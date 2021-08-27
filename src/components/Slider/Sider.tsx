import React from "react";
import { Layout } from "antd";

import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import MenuItems from "../Navigation/MenuItems";

const { Sider } = Layout;

interface PropType {
  collapsed: any;
}

const SiderDemo = ({ collapsed }: PropType) => {
  const responsive = useBreakpoint();

  return (
    <Sider
      trigger={null}
      breakpoint="xs"
      collapsed={responsive.xs ? true : collapsed}
      collapsedWidth={responsive.xs ? "0" : "80"}
    >
      <div className="logo" />

      <MenuItems />
    </Sider>
  );
};

export default SiderDemo;
