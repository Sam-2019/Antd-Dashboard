import { Layout, Menu, Avatar, Dropdown, Badge, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory } from "react-router-dom";
import { userMenuItems } from "../../utils/data";
import { UserOutlined } from "@ant-design/icons";
import { useLazyQuery, useApolloClient } from "@apollo/client";
import { LOGOUT } from "../../utils/graphqlFunctions/queries";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../../utils/toolkit/features/user/userSlice";
import { setRefreshToken, setAccessToken } from "../../utils/cookies";
import Cookies from "js-cookie";

const { Header } = Layout;
const { Text } = Typography;

interface PropType {
  toggle: any;
  collapsed: any;
  showDrawer: any;
  visible: any;
}

const Navbar = ({ toggle, collapsed, showDrawer, visible }: PropType) => {
  const responsive = useBreakpoint();
  const history = useHistory();
  const dispatch = useDispatch();
  const client = useApolloClient();
  const user = useSelector((state: any) => state.user.user);

  const [logout] = useLazyQuery(LOGOUT, {
    onCompleted: (data) => {
      client.clearStore();
      Cookies.remove("refresh_token");
      setAccessToken("");
      setRefreshToken("");
      dispatch(isLoggedIn(false));
      history.push("/login");
    },
    onError: (errors) => {},
  });

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
          <Text type="danger" style={{ margin: 0, paddingRight: "10px" }}>
            Welcome, {user.firstName}
          </Text>
          <Dropdown overlay={menu}>
            <Badge>
              <Avatar
                size={35}
                icon={!user.imageURL && <UserOutlined />}
                src={user.imageURL}
              />
            </Badge>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
