import { faConciergeBell, faHome, faHotel, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Grid } from "antd";
import { useRouter } from "next/dist/client/router";

import styles from "./Navbar.module.scss";

const { useBreakpoint } = Grid;

const Navbar = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const router = useRouter();

  const handleRoute = (e) => router.push(`${e.key}`);

  return (
    <Menu selectedKeys={router.asPath} mode={isMobileOrTablet ? "vertical" : "horizontal"} className={styles.navbar}>
      <Menu.Item
        icon={isMobileOrTablet && <FontAwesomeIcon icon={faHome} />}
        key="/"
        onClick={handleRoute}
        className={styles.navbar__item}
      >
        Home
      </Menu.Item>
      <Menu.Item
        icon={isMobileOrTablet && <FontAwesomeIcon icon={faHotel} />}
        key="/hotels"
        onClick={handleRoute}
        className={styles.navbar__item}
      >
        Hotels
      </Menu.Item>
      <Menu.Item
        icon={isMobileOrTablet && <FontAwesomeIcon icon={faConciergeBell} />}
        key="/services"
        onClick={handleRoute}
        className={styles.navbar__item}
      >
        Services
      </Menu.Item>
      <Menu.Item
        icon={isMobileOrTablet && <FontAwesomeIcon icon={faInfoCircle} />}
        key="/about"
        onClick={handleRoute}
        className={styles.navbar__item}
      >
        About us
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
