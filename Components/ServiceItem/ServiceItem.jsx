import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Typography, Grid, Row } from "antd";

import style from "./ServiceItem.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const ServiceItem = (props) => {
  const { icon, service, anchorLink } = props;
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const handleClick = (link) => {
    const scrollToElement = document.getElementById(link);
    return scrollToElement.scrollIntoView({ block: "center", inline: "nearest" });
  };

  const renderSvg = () => {
    return (
      <Button
        type="ghost"
        shape="circle"
        icon={<FontAwesomeIcon icon={icon} color="#ab966f" />}
        className={style.service__button}
        onClick={() => handleClick(anchorLink)}
      />
    );
  };

  const renderTitle = () => {
    return (
      <Title level={4} style={{ color: "#333" }}>
        {service}
      </Title>
    );
  };

  return (
    <Col xs={6} sm={6} lg={6} className={style.service}>
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={18}>
          <Row justify="center" align="middle">
            {renderSvg()}
          </Row>
        </Col>
        <Col span={18}>
          <Row justify="center" align="middle">
            {renderTitle()}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ServiceItem;
