import { Layout } from "antd";
import React from "react";
import DrawerC from "./Drawer";
import SiderDemo from "./Sider";
import Navbar from "./Navbar";
import TableContainer from "./Table";
import GridC from "./Grid";

const { Content } = Layout;

const Demo = () => {
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
      <SiderDemo collapsed={collapsed} onActive={onActive} />
      <DrawerC visible={visible} onClose={onClose} onActive={onActive} />
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
          {active === "dashboard" && <GridC />}
          {active === "department" && "kngkhnk"}
          {active === "members" && <TableContainer />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Demo;
