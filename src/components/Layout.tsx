import React from "react";
import { Breadcrumb, Layout } from "antd";

import DrawerC from "./Drawer";
import SiderDemo from "./Sider";
import Navbar from "./Navbar";

import BreadCrumb from "./Breadcrumb";

const { Content } = Layout;

interface PropType {
  children: any;
}

const AppLayout = ({ children }: PropType) => {

  const [active, setActive] = React.useState("dashboard");
  const [visible, setVisible] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onActive = (data: React.SetStateAction<string>) => {
    setActive(data);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SiderDemo collapsed={collapsed} />
      <DrawerC visible={visible} onClose={onClose} />
      <Layout className="site-layout">
        <Navbar
          toggle={toggle}
          collapsed={collapsed}
          showDrawer={showDrawer}
          visible={visible}
        />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <BreadCrumb /> */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
