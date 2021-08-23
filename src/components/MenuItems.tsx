import { Menu } from "antd";

import { useHistory } from "react-router-dom";
import { menuItems } from "../others/data";

const MenuItems = () => {
  const history = useHistory();

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {menuItems.map((data: any) => (
        <Menu.Item
          key={data.key}
          icon={data.icon}
          onClick={() => history.push(data.path)}
        >
          {data.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuItems;
