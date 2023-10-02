import React from "react";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";

import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

import { useNavigate } from "react-router-dom";
import { menuItems } from "../../utils/data";

const items: MenuItem[] = menuItems;

const MenuItems = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activePath = items.filter(
    (item: any) => item.path === location.pathname
  );

  // const [state] = React.useState([activePath[0].key] || ["1"]);
  // console.log({ state });

  // React.useEffect(() => {
  //   console.log("log");
  //   console.log(location.pathname);
  //   const selectedPath = items.filter(
  //     (item: any) => item.path === location.pathname
  //   );
  //   console.log(selectedPath[0].key);
  // }, []);

  const handleClick = (e: any) => {
    const selectedPath = items.filter((item: any) => item.key === e.key);
    navigate(selectedPath[0].path);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={items}
    />
  );
};

export default MenuItems;
