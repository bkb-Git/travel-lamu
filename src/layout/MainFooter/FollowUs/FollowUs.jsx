import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Typography } from "antd";

import style from "./FollowUs.module.scss";

const { Title, Text } = Typography;

const FollowUs = () => {
  const currentYear = new Date().getFullYear();

  const renderTitle = () => {
    return (
      <Title level={4} className={style.followUs__title}>
        Follow us
      </Title>
    );
  };

  const renderSocialIcons = () => {
    return (
      <Row justify="center" align="middle">
        <FontAwesomeIcon icon={faFacebook} size="2x" color="white" className={style.followUs__facebook} />
        <FontAwesomeIcon icon={faInstagram} size="2x" color="white" className={style.followUs__instagram} />
        <FontAwesomeIcon icon={faTwitter} size="2x" color="white" className={style.followUs__twitter} />
        <FontAwesomeIcon icon={faPinterest} color="white" size="2x" className={style.followUs__pinterest} />
      </Row>
    );
  };

  const renderCompanyLogo = () => {
    return (
      <Title level={4} className={style.followUs__companyLogo}>
        Nubia Agency
      </Title>
    );
  };

  const renderCopyright = () => {
    return (
      <Row justify="center" align="middle">
        <Text type="secondary" style={{ textAlign: "center", color: "white" }}>
          Copyright <Text style={{ color: "#ab966f" }}>&copy;</Text> {currentYear}, Nubia Agency Limited
        </Text>
      </Row>
    );
  };

  return (
    <Col xs={22} sm={22} lg={8} className={style.followUs}>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Row justify="center" align="middle" gutter={[0, 32]}>
          <Col span={24}>{renderTitle()}</Col>
          <Col span={18}>{renderSocialIcons()}</Col>
          <Col span={24}>{renderCompanyLogo()}</Col>
          <Col span={22}>{renderCopyright()}</Col>
        </Row>
      </Row>
    </Col>
  );
};

export default FollowUs;
