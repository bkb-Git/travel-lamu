import { faAddressBook, faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Divider, Row, Typography, Button, Tooltip, Space, Grid } from "antd";
import AboutUsSvg from "../../../../public/AboutUsSvg";

import style from "./AboutUs.module.scss";

const { Title, Paragraph } = Typography;
const { Group } = Button;
const { useBreakpoint } = Grid;

const AboutSection1 = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const title = () => {
    return (
      <Title className={style.aboutPage__leftSide__title}>
        About Us
        <Divider style={{ borderColor: "#ab966f", borderWidth: "2px" }} />
      </Title>
    );
  };

  const details = () => {
    return (
      <Paragraph className={style.aboutPage__leftSide__details}>
        Here at Nubia Travel Agency we strive to provide our customers with the best vacation experience possible in
        Lamu. We founded this business about 5 years ago with an aim to make traveling to Lamu a beautiful and memorable
        time for our clients, a couple of years later we became the top travel agency for Lamu bagging a couple of
        awards along the way and today we are still going strong.
      </Paragraph>
    );
  };

  const contacts = () => {
    return (
      <Row justify="center" align="middle">
        <Group className={style.aboutPage__leftSide__contactDetails}>
          <Space size="large" className={style.aboutPage__leftSide__contactDetails__buttonContainer}>
            <Button type="ghost" size="large" icon={<FontAwesomeIcon icon={faPhone} color="#ab966f" />}>
              <Tooltip title="Call us">
                <span>803-619-5543</span>
              </Tooltip>
            </Button>
            <Button type="ghost" size="large" icon={<FontAwesomeIcon icon={faAt} color="#ab966f" />}>
              <Tooltip title="Email Us">
                <span>simonluttrell@ewhmt.com</span>
              </Tooltip>
            </Button>
            <Button type="ghost" size="large" icon={<FontAwesomeIcon icon={faAddressBook} color="#ab966f" />}>
              <Tooltip title="6716 Heritage Business Ct # 4, Chattanooga, TN 37421-8502 USA">
                <span>Tennessee, USA</span>
              </Tooltip>
            </Button>
          </Space>
        </Group>
      </Row>
    );
  };

  const renderRightSide = () => {
    return (
      <Col lg={10}>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col span={22}>
            <AboutUsSvg width="100%" height="100%" />
          </Col>
        </Row>
      </Col>
    );
  };

  const renderLeftSide = () => {
    return (
      <Col xs={22} lg={14}>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col span={18}>{title()}</Col>
          {isMobileOrTablet && (
            <Col span={22} style={{ margin: "2rem 0" }}>
              <AboutUsSvg width="100%" height="100%" />
            </Col>
          )}
          <Col span={22}>{details()}</Col>
          <Col span={22}>{contacts()}</Col>
        </Row>
      </Col>
    );
  };

  const renderContent = () => {
    if (isMobileOrTablet) {
      return <>{renderLeftSide()}</>;
    }
    return (
      <>
        {renderLeftSide()}
        {renderRightSide()}
      </>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.aboutPage}>
      {renderContent()}
    </Row>
  );
};

export default AboutSection1;
