/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Divider, Row, Typography, Grid } from "antd";

import style from "./ServiceCard.module.scss";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

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

const ServiceCard = (props) => {
  const { serviceName, anchorLink, ServiceSvg, svgToRight } = props;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderSvg = () => {
    return (
      <Col xs={22} sm={22} lg={12}>
        <ServiceSvg width="80%" height="100%" style={svgToRight ? { float: "right" } : null} />
      </Col>
    );
  };

  const renderServiceDetails = () => {
    return (
      <Col xs={22} sm={22} lg={12}>
        <Row justify="center" align="middleF">
          <Col span={22}>
            <Title level={isMobileOrTablet ? 4 : 1} className={style.service__title}>
              {serviceName}
              <Divider style={{ borderColor: "#ab966f", width: "2em" }} />
            </Title>
          </Col>
          {isMobileOrTablet && (
            <Col span={24}>
              <ServiceSvg width="100%" height="100%" />
            </Col>
          )}
          <Col span={18}>
            <Paragraph className={style.service__description}>
              {serviceDetails[serviceName]}
              <a id={anchorLink} style={{ opacity: 0, cursor: "none" }}>
                #
              </a>
            </Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderContent = () => {
    return svgToRight ? (
      <Row justify="space-between" align="middle">
        {renderServiceDetails()}
        {renderSvg()}
      </Row>
    ) : (
      <Row justify="space-between" align="middle">
        {renderSvg()}
        {renderServiceDetails()}
      </Row>
    );
  };

  return (
    <Col xs={22} sm={22} lg={20} className={style.service}>
      {isMobileOrTablet ? renderServiceDetails() : renderContent()}
    </Col>
  );
};

export default ServiceCard;
