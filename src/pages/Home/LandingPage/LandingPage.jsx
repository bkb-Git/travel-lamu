import { useState } from "react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Typography, Grid, Button } from "antd";
import Image from "next/image";

import DrawerMenu from "../../../../Components/DrawerMenu";
import BookForm from "../BookForm";

import Lamu2 from "../../../../public/Lamu2.jpg";

import style from "./LandingPage.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const LandingPage = () => {
  const [filterMenu, setFilterMenu] = useState(false);

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderImage = () => <Image objectFit={isMobileOrTablet && "cover"} priority layout="fill" src={Lamu2} />;

  const renderTitle = () => {
    return (
      <Row justify="center" align="middle">
        <Title className={style.landingPage__content__titleContainer__title}>Travel Lamu</Title>
      </Row>
    );
  };

  const bookingForm = () => {
    return (
      <Row justify="center" align={isMobileOrTablet ? "top" : "middle"} style={{ height: isMobileOrTablet && "100%" }}>
        <BookForm />
      </Row>
    );
  };

  const renderFormOrButton = () => {
    if (isMobileOrTablet) {
      return (
        <Col span={16}>
          <Row justify="center" align="middle">
            <Button
              className={style.landingPage__content__button}
              icon={<FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "1em" }} />}
              size="large"
              type="primary"
              onClick={() => setFilterMenu(true)}
            >
              Book Now
            </Button>
          </Row>
        </Col>
      );
    }

    return <Col lg={18}>{bookingForm()}</Col>;
  };

  const renderContent = () => {
    return (
      <Row justify="center" align="middle">
        <Col xs={20} sm={20} lg={24} className={style.landingPage__content__titleContainer}>
          {renderTitle()}
        </Col>
        {renderFormOrButton()}
      </Row>
    );
  };

  const renderFilterMenu = () => {
    return (
      <DrawerMenu placement="left" openMenu={filterMenu} menuHandler={setFilterMenu}>
        <Row
          gutter={isMobileOrTablet && [0, 32]}
          justify="center"
          align="middle"
          style={{ height: "100%", textAlign: "center" }}
        >
          <Col span={24}>
            <Title level={2}>Book Now</Title>
          </Col>
          <Col span={24} style={{ height: "100%" }}>
            {bookingForm()}
          </Col>
        </Row>
      </DrawerMenu>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.landingPage}>
      <Col lg={24} className={style.landingPage__image}>
        {renderImage()}
      </Col>
      <Col lg={24} className={style.landingPage__content}>
        {renderContent()}
      </Col>
      {renderFilterMenu()}
    </Row>
  );
};

export default LandingPage;
