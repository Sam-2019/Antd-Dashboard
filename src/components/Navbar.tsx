import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Header } = Layout;

interface PropType {
  toggle: any;
  collapsed: any;
  showDrawer: any;
  visible: any;
}

const Navbar = ({ toggle, collapsed, showDrawer, visible }: PropType) => {
  const responsive = useBreakpoint();
  return (
    <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
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
    </Header>
  );
};

export default Navbar;
