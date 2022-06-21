import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Typography, Button, Rate, Statistic, Grid } from "antd";

import Image from "next/image";
import { useState } from "react";
import AmenityTag from "../AmenityTag";

import style from "./PropertyCardMobile.module.scss";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const tabList = [
  {
    key: "front",
    tab: "Cover",
  },
  {
    key: "back",
    tab: "More Details",
  },
];

const PropertyCard = (props) => {
  const { hotel } = props;
  const { hotelImg, name, price, amenities, distanceFromAirport, roomsAvailable } = hotel;

  const [activeTabKey, setActiveTabKey] = useState("front");

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const onTabChange = (key) => setActiveTabKey(key);

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
      <Col span={activeTabKey === "back" ? 14 : 16} className={style.property__card__details__moreDetails}>
        <Row justify="start" align="middle">
          <Col span={24}>{amenitiesList()}</Col>
          <Col span={24}>
            {distance()}
            {availableRooms()}
          </Col>
        </Row>
      </Col>
    );
  };

  const renderCover = () => {
    return (
      <Col span={activeTabKey === "back" ? 10 : 8} style={{ height: activeTabKey === "back" ? "35vh" : "20vh" }}>
        {cover()}
      </Col>
    );
  };

  const renderHotelInfo = () => {
    return (
      <Col span={16} className={style.property__card__details}>
        <Row align={isMobileOrTablet && "middle"} style={{ position: "relative", height: "100%" }}>
          {hotelName()}
          {propertyPrice()}
        </Row>
      </Col>
    );
  };

  const contentList = {
    front: <>{renderHotelInfo()}</>,
    back: <>{moreDetails()}</>,
  };

  return (
    <Col xs={22} sm={22} lg={24} className={style.property}>
      <Card
        hoverable
        bordered
        className={style.property__card}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
        bodyStyle={{ padding: 0, height: "100%" }}
      >
        <Row justify="center" align="middle">
          {renderCover()}
          {contentList[activeTabKey]}
        </Row>
      </Card>
    </Col>
  );
};

export default PropertyCard;
