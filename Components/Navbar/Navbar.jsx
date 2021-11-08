import { Menu } from "antd";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Menu mode="horizontal" className={styles.navbar}>
      <Menu.Item key="Home">Home</Menu.Item>
      <Menu.Item key="Plans">Hotels</Menu.Item>
      <Menu.Item key="Services">Services</Menu.Item>
      <Menu.Item key="About us">About us</Menu.Item>
    </Menu>
  );
};

export default Navbar;
