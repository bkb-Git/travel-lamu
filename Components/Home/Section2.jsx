import { Card, Col, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Reveal";
import Slider from "react-slick";

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHotel,
  faLandmark,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import HotelRoom1 from "../../public/hotel-room1.jpg";
import HotelRoom2 from "../../public/hotel-room2.jpg";
import HotelRoom3 from "../../public/hotel-room3.jpg";
import HotelRoom4 from "../../public/hotel-room4.jpg";

import styles from "./Home.module.scss";
import HotelCard from "../HotelCard";

const { Title, Text } = Typography;

const hotels = {
  hotelRoom1: {
    coverImg: HotelRoom1,
    hotelName: "Spring Hotel",
    rating: 4.5,
    bed: "2 Twin Beds",
    roomType: "Apartment (1 room)",
    price: 45,
  },
  hotelRoom2: {
    coverImg: HotelRoom2,
    hotelName: "Lamu High Hotel",
    rating: 3.5,
    bed: "Double Bed",
    roomType: "Deluxe Room",
    price: 65,
  },
  hotelRoom3: {
    coverImg: HotelRoom3,
    hotelName: "Sunset Hotel",
    rating: 3,
    bed: "2 Twin Bed",
    roomType: "Standard Room",
    price: 35,
  },
  hotelRoom4: {
    coverImg: HotelRoom4,
    hotelName: "Laden Hotel",
    rating: 4,
    bed: "Queen Size",
    roomType: "Standard Room",
    price: 50,
  },
};

const Section2 = () => {
  const NextSelectArrow = ({ className, style, onClick }) => (
    <FontAwesomeIcon
      icon={faArrowAltCircleRight}
      onClick={onClick}
      style={{ ...style, display: "block" }}
      className={`sliderArrow ${className} fa-3x`}
    />
  );

  const PrevSelectArrow = ({ className, style, onClick }) => (
    <FontAwesomeIcon
      icon={faArrowAltCircleLeft}
      onClick={onClick}
      style={{ ...style, display: "block" }}
      className={`sliderArrow ${className}`}
    />
  );

  const VisitTheSights = () => {
    return (
      <Col span={6} style={{ height: "100%" }}>
        <Fade left duration={2500}>
          <Card bodyStyle={{ padding: 0, height: "100%" }} className={styles.section2Card} bordered={false}>
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col span={24} className={styles.section2CardIcon}>
                <FontAwesomeIcon icon={faLandmark} />
              </Col>
              <Col span={24}>
                <Title className={styles.section2CardTitle} level={3}>
                  Visit the Sights
                </Title>
              </Col>
              <Col span={24}>
                <Text type="secondary">
                  There are beautiful and historic sites to visit , most famously Lamu Old Town a UNESCO World Heritage
                  Site.
                </Text>
              </Col>
            </Row>
          </Card>
        </Fade>
      </Col>
    );
  };

  const Hotels = () => {
    return (
      <Col span={6} style={{ height: "100%" }}>
        <Fade bottom duration={2500}>
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
                  You can find comfortable, blissful and affordable places to stay while enjoying the view and weather
                  during your visit.
                </Text>
              </Col>
            </Row>
          </Card>
        </Fade>
      </Col>
    );
  };

  const Beach = () => {
    return (
      <Col span={6} style={{ height: "100%" }}>
        <Fade right duration={2500}>
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
                  Long and beautiful coastlines to heart-warming sunsets, spend your mornings or evenings walking on the
                  beach.
                </Text>
              </Col>
            </Row>
          </Card>
        </Fade>
      </Col>
    );
  };

  const HotelRoomsSlider = () => {
    return (
      <Fade bottom duration={2500} delay={6000}>
        <Slider
          dots
          infinite
          nextArrow={<NextSelectArrow />}
          prevArrow={<PrevSelectArrow />}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2500}
          pauseOnHover
          className={styles.slider}
        >
          <HotelCard hotelRoom={hotels.hotelRoom1} />
          <HotelCard hotelRoom={hotels.hotelRoom2} />
          <HotelCard hotelRoom={hotels.hotelRoom3} />
          <HotelCard hotelRoom={hotels.hotelRoom4} />
        </Slider>
      </Fade>
    );
  };

  return (
    <Row justify="center" align="middle" style={{ flexDirection: "column", background: "white", height: "120vh" }}>
      <Row gutter={16} justify="center" align="middle" className={styles.section2Row1}>
        <VisitTheSights />
        <Hotels />
        <Beach />
      </Row>
      <Row justify="center" align="middle" className={styles.section2Row2}>
        <HotelRoomsSlider />
      </Row>
    </Row>
  );
};

export default Section2;
