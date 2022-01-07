/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Divider, Row, Typography } from "antd";

import AirportPickupSvg from "../../public/AirportPickupSvg";
import BookingSvg from "../../public/BookingSvg";
import CampfireSvg from "../../public/CampfireSvg";
import CarRentalSvg from "../../public/CarRentalSvg";

import styles from "./Services.module.scss";

const { Title, Paragraph } = Typography;

const ServicesSection2 = () => {
  const serviceDetails = {
    "Airport Pickup":
      "We know how inconvenient it can be to get transportation when you arrive, you can pre-book a trained, English-speaking driver to pick you up at the airport for the same price as a regular taxi to get you to your hotel.",
    Booking:
      "There are a great list of places to stay while visiting Lamu, from hotels with affordable prices and amazing views to apartments you can rent out. Check out our listings to find the right place for you.",
    "Tour Packages":
      "Allow us to take you to our favourite hangouts, restaurants, markets, hidden getaways, and sites that tell the long and amazing story of Lamu. Take a look  Come journey with us.",
    "Car Rentals":
      "If you need to get around conveniently , we are here to help , we offer a variety of vehicles you can rent out at affordable rates. Pre-book one of our cars just before you arrive from our agents. ",
  };
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
            {serviceDetails[serviceName]}
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
