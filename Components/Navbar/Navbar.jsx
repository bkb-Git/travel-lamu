import { faConciergeBell, faHome, faHotel, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "antd";
import { useRouter } from "next/dist/client/router";

import styles from "./Navbar.module.scss";

const Navbar = ({ breakpoint }) => {
  const router = useRouter();

  const handleRoute = (e) => router.push(`${e.key}`);

  return (
    <Menu selectedKeys={router.asPath} mode={breakpoint ? "vertical" : "horizontal"} className={styles.navbar}>
      <Menu.Item icon={breakpoint && <FontAwesomeIcon icon={faHome} />} key="/" onClick={handleRoute}>
        Home
      </Menu.Item>
      <Menu.Item icon={breakpoint && <FontAwesomeIcon icon={faHotel} />} key="/hotels" onClick={handleRoute}>
        Hotels
      </Menu.Item>
      <Menu.Item icon={breakpoint && <FontAwesomeIcon icon={faConciergeBell} />} key="/services" onClick={handleRoute}>
        Services
      </Menu.Item>
      <Menu.Item icon={breakpoint && <FontAwesomeIcon icon={faInfoCircle} />} key="/about" onClick={handleRoute}>
        About us
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
