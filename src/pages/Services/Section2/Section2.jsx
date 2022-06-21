import { faCalendarCheck, faCar, faCompass, faShuttleVan } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";

import ServiceItem from "../../../../Components/ServiceItem";

import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <Row justify="center" align="middle" className={styles.section}>
      <Col xs={22} sm={22} lg={24}>
        <Row justify="center" align="middle">
          <ServiceItem icon={faShuttleVan} service="Airport Pickup" anchorLink="block-1" />
          <ServiceItem icon={faCalendarCheck} service="Booking" anchorLink="block-2" />
          <ServiceItem icon={faCompass} service="Tour Packages" anchorLink="block-3" />
          <ServiceItem icon={faCar} service="Car Rentals" anchorLink="block-4" />
        </Row>
      </Col>
    </Row>
  );
};

export default Section2;
