import { Col, Row, Typography } from "antd";
import Image from "next/image";

import Lamu2 from "../../public/Lamu2.jpg";

import styles from "./Home.module.scss";
import BookForm from "./BookForm";

const { Title } = Typography;

const Section1 = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={24} className={styles.image} style={{ zIndex: 1 }}>
        <Image priority layout="fill" src={Lamu2} />
        <Row>
          <Col span={24} className={styles.titleContainer}>
            <Title className={styles.title}>Travel Lamu</Title>
          </Col>
          <Col offset={4} span={16}>
            <BookForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Section1;