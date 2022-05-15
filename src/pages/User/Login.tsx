import { Layout, Form, Input, Button, Space } from "antd";
import { Link, useHistory } from "react-router-dom";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  contentStyles,
  forgotPasswordStyles,
  formStyles,
  spaceStyles,
} from "../../utils/styles";
import { LOGIN } from "../../utils/constants";
import { useLazyQuery } from "@apollo/client";
import { USER_LOGIN } from "../../utils/graphqlFunctions/queries";

const { Header, Content } = Layout;

export default function Login() {
  const [login, { loading }] = useLazyQuery(USER_LOGIN, {
    onCompleted: (data) => {
      localStorage.setItem("userID", data.login.id);
      history.push("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mobile, nonMobile } = formStyles;
  const responsive = useBreakpoint();
  const [form] = Form.useForm();

  let history = useHistory();

  function signup_route() {
    history.push("/signup");
  }

  const onFinish = async (fieldsValue: any) => {
    try {
      login({
        variables: {
          emailAddress: fieldsValue.email,
          password: fieldsValue.password,
        },
      });
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
              name="email"
              label="Email / Username"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <div style={forgotPasswordStyles}>
              <Link to="/verify-email">Forgot password?</Link>
            </div>

            <Space style={spaceStyles} size="small" direction="vertical">
              <Button type="primary" loading={loading} htmlType="submit" block>
                {loading ? null : LOGIN}
              </Button>

              <Button onClick={signup_route} block>
                Signup
              </Button>
            </Space>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
