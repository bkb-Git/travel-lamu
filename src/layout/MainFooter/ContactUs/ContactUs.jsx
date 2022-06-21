import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Divider, Row, Typography } from "antd";

import style from "./ContactUs.module.scss";

const { Title, Text } = Typography;

const ContactUs = () => {
  const renderTitle = () => {
    return (
      <>
        <Title level={4} style={{ color: "white", textAlign: "center" }}>
          Contact Us
        </Title>
        <Divider style={{ borderColor: "#ab966f" }} />
      </>
    );
  };

  const renderAddress = () => {
    return (
      <>
        <FontAwesomeIcon icon={faMapMarkedAlt} color="#ab966f" style={{ marginRight: "1em" }} />
        <Text strong style={{ color: "white", marginRight: "5px" }}>
          Address :
        </Text>
        6716 Heritage Business Ct # 4, Chattanooga, TN 37421-8502 USA
      </>
    );
  };

  const renderPhoneNumber = () => {
    return (
      <>
        <FontAwesomeIcon icon={faPhone} color="#ab966f" style={{ marginRight: "1em" }} />
        <Text strong style={{ color: "white", marginRight: "5px" }}>
          Phone :
        </Text>
        4234990497
      </>
    );
  };

  const renderEmail = () => {
    return (
      <>
        <FontAwesomeIcon icon={faEnvelope} color="#ab966f" style={{ marginRight: "1em" }} />
        <Text strong style={{ color: "white", marginRight: "5px" }}>
          Email :
        </Text>
        info@deffacto.com
      </>
    );
  };

  return (
    <Col xs={22} sm={22} lg={8} className={style.contact}>
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24} className={style.contact__title}>
          {renderTitle()}
        </Col>
        <Col span={20} className={style.contact__details}>
          {renderAddress()}
        </Col>
        <Col span={20} className={style.contact__details}>
          {renderPhoneNumber()}
        </Col>
        <Col span={20} className={style.contact__details}>
          {renderEmail()}
        </Col>
      </Row>
    </Col>
  );
};

export default ContactUs;
