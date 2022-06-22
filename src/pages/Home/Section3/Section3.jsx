import { Col, Row } from "antd";

import LamuTown from "./LamuTown";
import ShelaBeach from "./ShelaBeach";

import style from "./Section3.module.scss";

const Section3 = () => {
  return (
    <Row justify="center" align="middle" className={style.sites}>
      <Col lg={24} className={style.sites__section} style={{ height: "50%" }}>
        <LamuTown />
      </Col>
      <Col lg={24} className={style.sites__section} style={{ height: "50%" }}>
        <ShelaBeach />
      </Col>
    </Row>
  );
};

export default Section3;
