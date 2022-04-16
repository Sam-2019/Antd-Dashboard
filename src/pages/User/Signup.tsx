import { useState } from "react";
import { Layout, Form, Input, Button, Space } from "antd";
import { useHistory } from "react-router-dom";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Header, Content } = Layout;

export default function Signup() {
  const responsive = useBreakpoint();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function login_route() {
    history.push("/login");
  }

  const onFinish = async (fieldsValue: any) => {
    console.log(fieldsValue);

    setTimeout(() => {
      setLoading(true);
    }, 600);
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

        <Content
          style={{
            padding: "50px 0px 0px 0px",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{
              width: responsive.md ? "300px" : "80%",
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

            <Space style={{ width: "100%" }} size="small" direction="vertical">
              <Button type="primary" loading={loading} htmlType="submit" block>
                Signup
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
