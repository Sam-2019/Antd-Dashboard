import { useState } from "react";
import { Layout, Form, Input, Button, Space } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { UserOutlined } from "@ant-design/icons";
import { contentStyles, formStyles, spaceStyles } from "../../utils/styles";

const { Header, Content } = Layout;

export default function VerifyEmail() {
  const {mobile, nonMobile} = formStyles
  const responsive = useBreakpoint();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
              label="Email"
              rules={[{ required: true, message: "Required!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Space style={spaceStyles}  size="small" direction="vertical">
              <Button type="primary" loading={loading} htmlType="submit" block>
                Submit
              </Button>
            </Space>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
}
