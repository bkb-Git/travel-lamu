import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Typography, Button, Rate, Statistic, Grid } from "antd";

import Image from "next/image";
import AmenityTag from "../AmenityTag";

import style from "./PropertyCard.module.scss";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const PropertyCard = (props) => {
  const { hotel } = props;
  const { hotelImg, name, price, amenities, distanceFromAirport, roomsAvailable } = hotel;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const cover = () => {
    return (
      <>
        <Image src={hotelImg} layout="fill" objectFit="cover" />
        <Button shape="circle" className={style.property__card__likeButton}>
          <Row justify="center" align="middle">
            <FontAwesomeIcon icon={faThumbsUp} />
          </Row>
        </Button>
      </>
    );
  };

  const hotelName = () => {
    return (
      <Col span={24} style={{ height: isMobileOrTablet ? "auto" : "20%" }}>
        <Row justify="space-between" align="top">
          <Title level={4} className={style.property__card__details__name} style={{ margin: 0 }}>
            {name}
          </Title>
          <span>
            <Rate disabled value={3.5} allowHalf />
            <Text className={style.property__card__details__reviews}>4 reviews</Text>
          </span>
        </Row>
      </Col>
    );
  };

  const propertyPrice = () => {
    return (
      <Col span={24} className={style.property__card__details__price}>
        <Row justify="space-between" align="middle">
          <Statistic title="Price" value={price} prefix="$" />
          <Button type="primary" size="large" shape="round">
            Reserve
          </Button>
        </Row>
      </Col>
    );
  };

  const amenitiesList = () => {
    return (
      <Row justify="start" align="top">
        {amenities.map((type) => (
          <AmenityTag amenity={type} key={type} />
        ))}
      </Row>
    );
  };

  const distance = () => {
    return (
      <Col style={{ marginBottom: "1em" }}>
        <Title level={5} style={{ marginBottom: "0.3em" }}>
          Distance From Airport
        </Title>
        <Text type="secondary">{`${distanceFromAirport} km`}</Text>
      </Col>
    );
  };

  const availableRooms = () => {
    return (
      <Col>
        <Title level={5} style={{ marginBottom: "0.3em" }}>
          Rooms Available
        </Title>
        <Text type="secondary">{`${roomsAvailable}`}</Text>
      </Col>
    );
  };

  const moreDetails = () => {
    return (
      <Col span={24} style={{ height: "50%" }}>
        <Row justify="start" align="middle">
          <Col span={12} className={style.property__card__details__moreDetails}>
            {amenitiesList()}
          </Col>
          <Col span={12} className={style.property__card__details__moreDetails}>
            {distance()}
            {availableRooms()}
          </Col>
        </Row>
      </Col>
    );
  };

  const renderCover = () => {
    return (
      <Col span={8} style={{ position: "relative", height: "100%" }}>
        {cover()}
      </Col>
    );
  };

  const renderHotelInfo = () => {
    return (
      <Col span={16} className={style.property__card__details}>
        <Row align={isMobileOrTablet && "middle"} style={{ position: "relative", height: "100%" }}>
          {hotelName()}
          {moreDetails()}
          {propertyPrice()}
        </Row>
      </Col>
    );
  };

  return (
    <Col xs={22} sm={22} lg={24} className={style.property}>
      <Card hoverable bordered bodyStyle={{ padding: 0, height: "100%" }} className={style.property__card}>
        <Row justify="center" align="middle" style={{ height: "100%", boxSizing: "border-box" }}>
          {renderCover()}
          {renderHotelInfo()}
        </Row>
      </Card>
    </Col>
  );
};

export default PropertyCard;
