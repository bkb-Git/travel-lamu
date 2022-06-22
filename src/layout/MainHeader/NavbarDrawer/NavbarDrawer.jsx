import { Col, Divider, Row, Typography } from "antd";

import DrawerMenu from "../../../../Components/DrawerMenu";
import Navbar from "../../../../Components/Navbar";

import style from "./NavbarDrawer.module.scss";

const { Title } = Typography;

const NavbarDrawer = (props) => {
  const { openMenu, menuHandler, modalhandler, accountState } = props;
  const { loading, renderAccountState } = accountState;

  const renderTitle = () => {
    return (
      <Row justify="center" align="middle" className={style.title}>
        <Col span={12}>
          <Title level={4} className={style.title__logo}>
            Nubia
          </Title>
        </Col>
        <Col span={12}>
          <Title level={4} style={{ margin: "0.5em 0 0.5em 0.5em" }}>
            Agency
          </Title>
        </Col>
      </Row>
    );
  };

  return (
    <DrawerMenu placement="right" openMenu={openMenu} menuHandler={menuHandler} modalhandler={modalhandler}>
      {renderTitle()}
      <Divider style={{ borderColor: "#333", margin: "10px 0" }} />
      {!loading && renderAccountState()}
      <Divider style={{ borderColor: "#333", margin: "10px 0" }} />
      <Navbar />
    </DrawerMenu>
  );
};

export default NavbarDrawer;
