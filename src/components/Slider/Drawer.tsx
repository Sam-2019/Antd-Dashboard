import { Drawer } from "antd";

import MenuItems from "../Navigation/MenuItems";

interface PropType {
  onClose: any;
  visible: any;
}

const DrawerC = ({ onClose, visible }: PropType) => {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <MenuItems />
    </Drawer>
  );
};

export default DrawerC;
