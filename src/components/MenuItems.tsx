import { Menu } from "antd";

import { useHistory } from "react-router-dom";
import { menuItems } from "../JSON/data";

const MenuItems = () => {
  const history = useHistory();

  return (
    <div>
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
    </div>
  );
};

export default MenuItems;
