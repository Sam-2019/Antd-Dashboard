import React from "react";
import { Drawer, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

interface PropType {
  onClose: any;
  visible: any;
}

const DrawerC = ({ onClose, visible }: PropType) => {
  let history = useHistory();

  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
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
    </Drawer>
  );
};

export default DrawerC;
