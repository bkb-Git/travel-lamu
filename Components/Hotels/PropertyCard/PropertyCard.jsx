import { faCar, faSpa, faThumbsUp, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Typography, Button, Rate, Tag, Statistic } from "antd";

import Image from "next/image";

import styles from "./PropertyCard.module.scss";

const { Title, Text } = Typography;

const PropertyCard = ({ hotel }) => {
  const { hotelImg, name, price, amenities, distanceFromAirport, roomsAvailable } = hotel;

  const renderHotelCover = () => {
    return (
      <>
        <Image src={hotelImg} layout="fill" className={styles.cardImg} />
        <Button shape="circle" className={styles.likeButton}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </Button>
      </>
    );
  };

  const renderHotelName = () => {
    return (
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", height: "20%" }}
      >
        <Title level={4} className={styles.hotelName} style={{ margin: 0 }}>
          {name}
        </Title>
        <span>
          <Rate disabled value={3.5} allowHalf />
          <Text className={styles.hotelReviewTitle}>4 reviews</Text>
        </span>
      </Col>
    );
  };

  const renderHotelPricing = () => {
    return (
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "25%",
          marginTop: ".5em",
        }}
      >
        <Statistic title="Price" value={price} prefix="$" />
        <Button type="primary" size="large" shape="round">
          Reserve
        </Button>
      </Col>
    );
  };

  const renderOtherDetails = () => {
    const Amenity = ({ amenity }) => {
      const renderIcon = () => {
        let typeOfIcon;
        switch (amenity) {
          case "Wifi":
            typeOfIcon = faWifi;
            break;
          case "Free-Parking":
            typeOfIcon = faCar;
            break;
          case "BreakFast Included":
            typeOfIcon = faUtensils;
            break;
          case "Spa":
            typeOfIcon = faSpa;
            break;
          default:
            break;
        }

        return typeOfIcon;
      };

      return (
        <Tag
          icon={<FontAwesomeIcon icon={renderIcon()} style={{ marginRight: "0.5em" }} />}
          color="#ab966f"
          className={styles.amenity}
        >
          {amenity}
        </Tag>
      );
    };

    return (
      <Col span={24} style={{ height: "50%" }}>
        <Row justify="start" align="middle">
          <Col span={12} className={styles.otherDetailsSection}>
            {amenities.map((type) => (
              <Amenity amenity={type} key={type} />
            ))}
          </Col>
          <Col span={12} className={styles.otherDetailsSection}>
            <Col style={{ marginBottom: "1em" }}>
              <Title level={5} style={{ marginBottom: "0.3em" }}>
                Distance From Airport
              </Title>
              <Text type="secondary">{`${distanceFromAirport} km`}</Text>
            </Col>
            <Col>
              <Title level={5} style={{ marginBottom: "0.3em" }}>
                Rooms Available
              </Title>
              <Text type="secondary">{`${roomsAvailable}`}</Text>
            </Col>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Col span={24}>
      <Card hoverable bordered bodyStyle={{ padding: 0, height: "100%" }} className={styles.card}>
        <Row justify="center" align="middle" style={{ height: "100%", boxSizing: "border-box" }}>
          <Col span={8} style={{ position: "relative", height: "100%" }}>
            {renderHotelCover()}
          </Col>
          <Col span={16} className={styles.hotelDetails}>
            <Row style={{ position: "relative", height: "100%" }}>
              {renderHotelName()}
              {renderOtherDetails()}
              {renderHotelPricing()}
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default PropertyCard;
