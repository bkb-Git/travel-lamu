/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Divider, Row, Typography } from "antd";

import AirportPickupSvg from "../../public/AirportPickupSvg";
import BookingSvg from "../../public/BookingSvg";
import CampfireSvg from "../../public/CampfireSvg";
import CarRentalSvg from "../../public/CarRentalSvg";

import styles from "./Services.module.scss";

const { Title, Paragraph } = Typography;

const ServicesSection2 = () => {
  const Service = ({ serviceName, anchorLink, ServiceSvg, svgToRight }) => {
    const renderSvg = () => {
      return (
        <Col span={12}>
          <ServiceSvg width="80%" height="100%" style={svgToRight ? { float: "right" } : null} />
        </Col>
      );
    };

    const renderServiceDetails = () => {
      return (
        <Col span={12}>
          <Title level={1} className={styles.serviceSection3Title}>
            {serviceName}
            <Divider style={{ borderColor: "#ab966f", width: "2em" }} />
          </Title>
          <Paragraph className={styles.serviceSection3ServiceDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum, ipsam exercitationem, provident
            vero earum laborum, voluptates voluptatum praesentium fuga optio? Culpa laboriosam maiores excepturi cum
            consectetur laudantium sunt vero.
            <a id={anchorLink} style={{ opacity: 0, cursor: "none" }}>
              #
            </a>
          </Paragraph>
        </Col>
      );
    };

    const renderContent = () => {
      return svgToRight ? (
        <>
          {renderServiceDetails()}
          {renderSvg()}
        </>
      ) : (
        <>
          {renderSvg()}
          {renderServiceDetails()}
        </>
      );
    };
    return (
      <Col span={24} className={styles.service}>
        {renderContent()}
      </Col>
    );
  };

  return (
    <Row justify="center" align="top" className={styles.serviceSection3}>
      <Service serviceName="Airport Pickup" anchorLink="block-1" ServiceSvg={AirportPickupSvg} />
      <Service serviceName="Booking" anchorLink="block-2" ServiceSvg={BookingSvg} svgToRight />
      <Service serviceName="Tour Packages" anchorLink="block-3" ServiceSvg={CampfireSvg} />
      <Service serviceName="Car Rentals" anchorLink="block-4" ServiceSvg={CarRentalSvg} svgToRight />
    </Row>
  );
};

export default ServicesSection2;
