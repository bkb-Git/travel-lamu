import { Col, Row, Typography } from "antd";

import style from "./Section1.module.scss";

const { Title } = Typography;

const ServicesSection1 = () => {
  return (
    <Row justify="center" align="bottom" className={style.section}>
      <Col xs={22} sm={22} lg={18}>
        <Title className={style.section__title}>What do we offer ?</Title>
      </Col>
    </Row>
  );
};

export default ServicesSection1;
