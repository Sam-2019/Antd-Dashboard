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
              label="Email"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="set_password"
              label="Confirm Password"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input />
            </Form.Item>

            <Space style={{ width: "100%" }}>
              <Form.Item>
                <Button type="primary" loading={loading} htmlType="submit">
                  Signup
                </Button>
              </Form.Item>

              <Form.Item>
                <Button onClick={login_route}>Login</Button>
              </Form.Item>
            </Space>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
