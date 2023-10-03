import React from "react";
import DrawerC from "../Slider/Drawer";
import SiderDemo from "../Slider/Sider";
import Navbar from "../Navigation/Navbar";
import { Layout } from "antd";
import { useQuery } from "@apollo/client";
import { USER_DETAILS } from "../../utils/graphqlFunctions/queries";
import { setUser } from "../../utils/toolkit/features/user/userSlice";

import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../Breadcrumb";

//import BreadCrumb from "./Breadcrumb";

const { Content, Footer } = Layout;

const AppLayout = () => {
  //const [active, setActive] = React.useState("dashboard");
  const [visible, setVisible] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(USER_DETAILS, {
    onCompleted: (data) => {
      // dispatch(setUser(data.user));
    },
    onError: (errors) => {},
  });

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // const onActive = (data: React.SetStateAction<string>) => {
  //   setActive(data);
  // };

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
            padding: "10px",
            minHeight: 800,
            // border: "1px solid red",
          }}
        >
          {/* <BreadCrumb /> */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
