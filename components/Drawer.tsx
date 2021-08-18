import React from "react";
import { Drawer, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
} from "@ant-design/icons";

interface PropType {
  onClose: any;
  visible: any;
  onActive: any;
}

const DrawerC = ({ onClose, visible, onActive }: PropType) => {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
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
    </Drawer>
  );
};

export default DrawerC;
