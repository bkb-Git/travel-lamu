import { Card, Col, Row, Typography } from "antd";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

import { faHotel, faLandmark, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import HotelRoom1 from "../../public/hotel-room1.jpg";
import HotelRoom2 from "../../public/hotel-room2.jpg";
import HotelRoom3 from "../../public/hotel-room3.jpg";
import HotelRoom4 from "../../public/hotel-room4.jpg";

import Section from "./Section";

import styles from "./Home.module.scss";

const { Title, Text } = Typography;

const Section2 = () => {
  return (
    <Section style={{ flexDirection: "column", background: "white" }}>
      <Row gutter={16} justify="center" align="middle" className={styles.section2Row1}>
        <Col span={6}>
          <Card bodyStyle={{ padding: 0, height: "100%" }} className={styles.section2Card} bordered={false}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col span={24} className={styles.section2CardIcon}>
                <FontAwesomeIcon icon={faLandmark} />
              </Col>
              <Col span={24}>
                <Title className={styles.section2CardTitle} level={3}>
                  Visit the Sites
                </Title>
              </Col>
              <Col span={24}>
                <Text type="secondary">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
                  nec faucibus velit. Quisque eleifend orci ipsum, a bibendum.
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bodyStyle={{ padding: 0, height: "100%" }} className={styles.section2Card} bordered={false}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col span={24} className={styles.section2CardIcon}>
                <FontAwesomeIcon icon={faHotel} />
              </Col>
              <Col span={24}>
                <Title className={styles.section2CardTitle} level={3}>
                  Hotels
                </Title>
              </Col>
              <Col span={24}>
                <Text type="secondary">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
                  nec faucibus velit. Quisque eleifend orci ipsum, a bibendum.
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Card bodyStyle={{ padding: 0, height: "100%" }} className={styles.section2Card} bordered={false}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col span={24} className={styles.section2CardIcon}>
                <FontAwesomeIcon icon={faUmbrellaBeach} />
              </Col>
              <Col span={24}>
                <Title className={styles.section2CardTitle} level={3}>
                  Beach
                </Title>
              </Col>
              <Col span={24}>
                <Text type="secondary">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
                  nec faucibus velit. Quisque eleifend orci ipsum, a bibendum.
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row justify="center" align="middle" className={styles.section2Row2}>
        <Slider
          dots
          infinite
          autoplay
          autoplaySpeed={2000}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          className={styles.slider}
        >
          <Card bodyStyle={{ height: "100%", padding: 0 }}>
            <Image src={HotelRoom1} />
          </Card>
          <Card bodyStyle={{ height: "100%", padding: 0 }}>
            <Image src={HotelRoom2} />
          </Card>
          <Card bodyStyle={{ height: "100%", padding: 0 }}>
            <Image src={HotelRoom3} />
          </Card>
          <Card bodyStyle={{ height: "100%", padding: 0 }}>
            <Image src={HotelRoom4} />
          </Card>
        </Slider>
      </Row>
    </Section>
  );
};

export default Section2;
