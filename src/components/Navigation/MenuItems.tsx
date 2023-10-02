import { Menu } from "antd";

import { useNavigate } from "react-router-dom";
import { menuItems } from "../../utils/data";

const MenuItems = () => {
  const navigate = useNavigate();

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {menuItems.map((data: any) => (
        <Menu.Item
          key={data.key}
          icon={data.icon}
          onClick={() => navigate(data.path)}
        >
          {data.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuItems;
