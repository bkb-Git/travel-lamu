import { Col, Drawer, Typography, Divider } from "antd";

import Navbar from "../Navbar";

import styles from "./MainHeader.module.scss";

const { Title } = Typography;
const DrawerMenu = ({ openMenu, menuHandler, breakpoint, accountState }) => {
  const { loading, renderAccountState } = accountState;

  const renderTitle = () => {
    return (
      <Col className={styles.logo}>
        <Title level={4} className={styles.logoTitle2}>
          Nubia
        </Title>
        <Title level={4} style={{ margin: "0.5em 0 0.5em 0.5em" }}>
          Agency
        </Title>
      </Col>
    );
  };
  return (
    <Drawer placement="right" visible={openMenu} onClose={() => menuHandler(false)}>
      {renderTitle()}
      <Divider style={{ borderColor: "#333", margin: "10px 0" }} />
      {!loading && renderAccountState()}
      <Divider style={{ borderColor: "#333", margin: "10px 0" }} />
      <Navbar breakpoint={breakpoint} />
    </Drawer>
  );
};

export default DrawerMenu;
