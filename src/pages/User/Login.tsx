import React from "react";
import { Layout, Form, Input, Button, Space } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  contentStyles,
  forgotPasswordStyles,
  formStyles,
  spaceStyles,
} from "../../utils/styles";
import { LOGIN, tokenExpired } from "../../utils/constants";
import { useLazyQuery, useApolloClient } from "@apollo/client";
import { USER_LOGIN } from "../../utils/graphqlFunctions/queries";
import { isLoggedIn } from "../../utils/toolkit/features/user/userSlice";
import { setRefreshToken, setAccessToken } from "../../utils/cookies";

const { Header, Content } = Layout;

export default function Login() {
  const location = useLocation();
  // const client = useApolloClient();
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = React.useState("");

  const [login, { loading }] = useLazyQuery(USER_LOGIN, {
    onCompleted: (data) => {
      setAccessToken(data.login);
      setRefreshToken(data.login);
      dispatch(isLoggedIn(true));
      history.push("/");
    },
    onError: (errors) => {
      // if (errors.message.includes(tokenExpired)) {
      //   client.clearStore();
      // }

      setMessage(errors.message);
    },
  });

  const { mobile, nonMobile } = formStyles;
  const responsive = useBreakpoint();
  const [form] = Form.useForm();

  function signup_route() {
    history.push("/signup");
  }

  const onFinish = async (fieldsValue: any) => {
    setMessage("");
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
              label="Email"
              rules={[{ required: true, message: "Required" }]}
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

            <span style={{ marginTop: "-5px", color: "red" }}>{message}</span>

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
