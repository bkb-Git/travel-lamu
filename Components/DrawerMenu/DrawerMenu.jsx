import { Drawer } from "antd";

const DrawerMenu = (props) => {
  const { openMenu, menuHandler, placement, children } = props;

  return (
    <Drawer placement={placement} visible={openMenu} onClose={() => menuHandler(false)}>
      {children}
    </Drawer>
  );
};

export default DrawerMenu;
