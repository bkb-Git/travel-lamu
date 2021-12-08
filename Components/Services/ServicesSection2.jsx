import { faCalendarCheck, faCar, faCompass, faShuttleVan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Typography } from "antd";

import styles from "./Services.module.scss";

const { Title } = Typography;

const ServicesSection2 = () => {
  const handleClick = (link) => {
    const scrollToElement = document.getElementById(link);
    return scrollToElement.scrollIntoView({ block: "center", inline: "nearest" });
    // router.push(link);
  };

  const ServiceItem = ({ icon, service, anchorLink }) => {
    return (
      <Col className={styles.serviceItem}>
        <Button
          type="ghost"
          shape="circle"
          icon={<FontAwesomeIcon icon={icon} color="#ab966f" />}
          className={styles.serviceButton}
          onClick={() => handleClick(anchorLink)}
        />
        <Title level={4} style={{ color: "#333" }}>
          {service}
        </Title>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={styles.serviceSection2}>
      <Col span={20} className={styles.servicesOfferedContainer}>
        <ServiceItem icon={faShuttleVan} service="Airport Pickup" anchorLink="block-1" />
        <ServiceItem icon={faCalendarCheck} service="Booking" anchorLink="block-2" />
        <ServiceItem icon={faCompass} service="Tour Packages" anchorLink="block-3" />
        <ServiceItem icon={faCar} service="Car Rentals" anchorLink="block-4" />
      </Col>
    </Row>
  );
};

export default ServicesSection2;
