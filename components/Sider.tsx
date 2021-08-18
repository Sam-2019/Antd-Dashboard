import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Sider } = Layout;

interface PropType {
  collapsed: any;
  onActive: any;
}

const SiderDemo = ({ collapsed, onActive }: PropType) => {
  const responsive = useBreakpoint();

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
          onClick={() => onActive("dashboard")}
        >
          DashBoard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<GroupOutlined />}
          onClick={() => onActive("department")}
        >
          Departments
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<TeamOutlined />}
          onClick={() => onActive("members")}
        >
          Members
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderDemo;
