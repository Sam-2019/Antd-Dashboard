import { useState } from "react";
import { Layout, Form, Input, Button, Space } from "antd";
import { useHistory } from "react-router-dom";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { contentStyles, formStyles, spaceStyles } from "../../utils/styles";
import { SUBMIT } from "../../utils/constants";
import { USER_SIGNUP } from "../../utils/graphqlFunctions/mutations";
import { useMutation } from "@apollo/client";

const { Header, Content } = Layout;

export default function Signup() {
  const [signup] = useMutation(USER_SIGNUP);

  const { mobile, nonMobile } = formStyles;
  const responsive = useBreakpoint();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function login_route() {
    history.push("/login");
  }

  const onFinish = async (fieldsValue: any) => {
    setLoading(true);
    const values = {
      firstName: fieldsValue.firstName,
      lastName: fieldsValue.lastName,
      password: fieldsValue.password,
      emailAddress: fieldsValue.email,
    };

    try {
      const data = await signup({
        variables: {
          signup: {
            ...values,
          },
        },
      });

      if (!data) {
        setLoading(false);
        return new Error("Error");
      }

      setTimeout(() => {
        setLoading(false);
        history.push("/login");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Layout className="site-layout">
        <Header>
          {/* <Title
            style={{
              color: "white",
            }}
          >
            Login
          </Title> */}
        </Header>

        <Content style={contentStyles}>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{
              width: responsive.md ? mobile : nonMobile,
            }}
          >
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Required!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Space style={spaceStyles} size="small" direction="vertical">
              <Button type="primary" loading={loading} htmlType="submit" block>
                {loading ? null : SUBMIT}
              </Button>

              <Button onClick={login_route} block>
                Login
              </Button>
            </Space>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
