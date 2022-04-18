import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";
import { userMenuItems } from "../../utils/data";

const { Header } = Layout;

interface PropType {
  toggle: any;
  collapsed: any;
  showDrawer: any;
  visible: any;
}

const Navbar = ({ toggle, collapsed, showDrawer, visible }: PropType) => {
  const responsive = useBreakpoint();
  const history = useHistory();

  const menu = (
    <Menu>
      {userMenuItems.map((data: any) => (
        <Menu.Item
          key={data.key}
          icon={data.icon}
          onClick={() => history.push(data.path)}
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
            <Avatar size={35} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>

      {/*  */}
    </Header>
  );
};

export default Navbar;
