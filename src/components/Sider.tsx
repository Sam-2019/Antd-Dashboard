import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;

interface PropType {
  collapsed: any;

}

const SiderDemo = ({ collapsed }: PropType) => {
  const responsive = useBreakpoint();
  const history = useHistory();

  return (
    <Sider
      trigger={null}
      breakpoint="xs"
      collapsed={responsive.xs ? true : collapsed}
      collapsedWidth={responsive.xs ? "0" : "80"}
    >
      <div className="logo" />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<DashboardOutlined />}
          onClick={() => history.push("/")}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          key="2"
          icon={<GroupOutlined />}
          onClick={() => history.push("/department")}
        >
          Departments
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<TeamOutlined />}
          onClick={() => history.push("/members")}
        >
          Members
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderDemo;
