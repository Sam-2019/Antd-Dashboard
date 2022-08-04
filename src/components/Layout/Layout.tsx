import React from "react";
import DrawerC from "../Slider/Drawer";
import SiderDemo from "../Slider/Sider";
import Navbar from "../Navigation/Navbar";
import { Layout } from "antd";
import { useQuery } from "@apollo/client";
import { USER_DETAILS } from "../../utils/graphqlFunctions/queries";
import { useSelector } from "react-redux";

//import BreadCrumb from "./Breadcrumb";

const { Content } = Layout;

interface PropType {
  children: any;
}

const AppLayout = ({ children }: PropType) => {
  //const [active, setActive] = React.useState("dashboard");
  const [visible, setVisible] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const { user } = useSelector((state: any) => state.user);

  const { loading, error, data } = useQuery(USER_DETAILS);


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

  const userImage = (data: any) => {
    // console.log(loading);
    // console.log({ userImage: data });
    if (!data) return;
    if (data.user === null) return;
    if (data.user.imageURL === null) return;
    return data.user.imageURL;
  };

  const userName = (data: any) => {
    // console.log(loading);
    // console.log({ userName: data });
    if (!data) return;
    if (data.user === null) return;
    if (data.user.firstName === null) return;
    return data.user.firstName;
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
          userImage={userImage(data)}
          userName={userName(data)}
        />
        <Content
          className="site-layout-background"
          style={{
            padding: "10px",
            minHeight: 750,
            //  border: "1px solid red",
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
