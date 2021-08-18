import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import styles from "../styles/Home.module.css";

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
        <div onClick={toggle} className={styles.trigger}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      )}

      {responsive.xs && (
        <div onClick={showDrawer} className={styles.trigger2}>
          {visible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      )}
    </Header>
  );
};

export default Navbar;
