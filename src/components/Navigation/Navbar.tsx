import { Layout, Menu, Avatar, Dropdown, Badge } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory } from "react-router-dom";
import { userMenuItems } from "../../utils/data";
import { UserOutlined } from "@ant-design/icons";
import { useLazyQuery, useApolloClient } from "@apollo/client";
import { LOGOUT } from "../../utils/graphqlFunctions/queries";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../../utils/toolkit/features/user/userSlice";
import { setRefreshToken, setAccessToken } from "../../utils/cookies";
import Cookies from "js-cookie";

const { Header } = Layout;

interface PropType {
  toggle: any;
  collapsed: any;
  showDrawer: any;
  visible: any;
  userImage: any;
  userName: any;
}

const Navbar = ({
  toggle,
  collapsed,
  showDrawer,
  visible,
  userImage,
  userName,
}: PropType) => {
  const responsive = useBreakpoint();
  const history = useHistory();
  const dispatch = useDispatch();
  const client = useApolloClient();

  const [logout] = useLazyQuery(LOGOUT, {
    onCompleted: (data) => {
      client.clearStore();
      Cookies.remove("refresh_token");
      setAccessToken(data.logout.accessToken);
      setRefreshToken(data.logout.refreshToken);
      dispatch(isLoggedIn(false));
      history.push("/login");
    },
    onError: (errors) => {},
  });

  // <p>Hello, {JSON.stringify(userName)},</p>

  const action = async (data: any) => {
    if (data === "/login") {
      try {
        return logout();
      } catch (err) {
        console.log(err);
      }
    }

    return history.push(data);
  };

  const menu = (
    <Menu>
      {userMenuItems.map((data: any) => (
        <Menu.Item
          key={data.key}
          icon={data.icon}
          onClick={() => action(data.path)}
          style={{ width: "auto" }}
        >
          {data.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {responsive.xs ? null : (
            <div onClick={toggle} style={{ color: "#eaeaea" }}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          )}

          {responsive.xs && (
            <div onClick={showDrawer} style={{ color: "#e72020" }}>
              {visible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          )}
        </div>

        <div>
          <Dropdown overlay={menu}>
            <Badge count={1}>
              <Avatar
                size={35}
                icon={!userImage && <UserOutlined />}
                src={userImage && userImage}
              />
            </Badge>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
