import { Menu } from "antd";
import { useRouter } from "next/dist/client/router";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  const handleRoute = (e) => router.push(`${e.key}`);

  return (
    <Menu selectedKeys={router.asPath} mode="horizontal" className={styles.navbar}>
      <Menu.Item key="/" onClick={handleRoute}>
        Home
      </Menu.Item>
      <Menu.Item key="/hotels" onClick={handleRoute}>
        Hotels
      </Menu.Item>
      <Menu.Item key="/services" onClick={handleRoute}>
        Services
      </Menu.Item>
      <Menu.Item key="/about" onClick={handleRoute}>
        About us
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
