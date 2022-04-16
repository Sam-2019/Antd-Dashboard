import React, { useState } from "react";
import { Layout, Form, Input, Button, Space, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

export default function Login() {
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

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                padding: "0 0 15px 0",
              }}
            >
              <Link to="/signup">Forgot password?</Link>
            </div>

            <Space style={{ width: "100%" }} size="small" direction="vertical">
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
