import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Typography } from "antd";
import { Fade } from "react-reveal";

import style from "./OfferCard.module.scss";

const { Title, Text } = Typography;

const OfferCard = (props) => {
  const { offer, ...args } = props;
  const { name, description, svg } = offer;

  const renderSvg = () => {
    return (
      <Row justify="center" align="top">
        <FontAwesomeIcon size="6x" icon={svg} color="gray" />
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <Title className={style.offer__card__title} level={3}>
        {name}
      </Title>
    );
  };

  const renderText = () => {
    return <Text type="secondary">{description}</Text>;
  };

  return (
    <Col lg={6} className={style.offer}>
      <Fade {...args} duration={1500}>
        <Card bodyStyle={{ padding: 0, height: "100%" }} className={style.offer__card} bordered={false}>
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            <Col span={24}>{renderSvg()}</Col>
            <Col span={24}>{renderTitle()}</Col>
            <Col span={22}>{renderText()}</Col>
          </Row>
        </Card>
      </Fade>
    </Col>
  );
};

export default OfferCard;
