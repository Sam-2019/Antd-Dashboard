import React from "react";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";

import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

import { useNavigate } from "react-router-dom";
import { menuItems } from "../../utils/data";
import { pathSnippetsWithFilterAndKey } from "../../utils/functions";

const items: MenuItem[] = menuItems;

const MenuItems = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log({ location });
  const activePath = items.filter(
    (item: any) => item.path === location.pathname
  );

  const wafer = pathSnippetsWithFilterAndKey(location, menuItems);
  const [state] = React.useState([wafer[0].key] || ["1"]);

  const handleClick = (e: any) => {
    const selectedPath = items.filter((item: any) => item.key === e.key);
    navigate(selectedPath[0].path);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={state}
      items={items}
    />
  );
};

export default MenuItems;
