import { useState } from "react";
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

const { Header, Content } = Layout;

export default function Login() {
  const { mobile, nonMobile } = formStyles;
  const responsive = useBreakpoint();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function singup_route() {
    history.push("/signup");
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
                Login
              </Button>

              <Button onClick={singup_route} block>
                Signup
              </Button>
            </Space>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
