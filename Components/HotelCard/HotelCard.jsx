import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Rate, Row, Statistic, Typography, Grid } from "antd";
import Image from "next/image";
import style from "./HotelCard.module.scss";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const HotelCard = (props) => {
  const { hotelRoom } = props;
  const { coverImg, hotelName, rating, bed, roomType, price } = hotelRoom;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderImage = () => {
    return (
      <>
        <Image layout="fill" objectFit="cover" src={coverImg} />
        <Card bordered={false} bodyStyle={{ padding: 0 }} className={style.card__image__priceTag}>
          <Statistic value={price} valueStyle={{ color: "white" }} prefix="$" />
        </Card>
      </>
    );
  };

  const renderHotelDetails = () => {
    return (
      <Row justify={isMobileOrTablet ? "center" : "space-between"} align="middle">
        <Col xs={24} sm={24} lg={14} className={style.card__details__hotelName}>
          <Title level={3} style={{ marginBottom: 0 }}>
            {hotelName}
          </Title>
        </Col>
        <Col xs={24} sm={24} lg={10} className={style.card__details__rating}>
          <Rate disabled allowHalf value={rating} />
        </Col>
        <Col xs={12} sm={12} lg={12} className={style.card__details__roomType}>
          <Title level={5}>{roomType}</Title>
          <Text type="secondary" style={{ marginLeft: isMobileOrTablet && "0.5em" }}>
            <FontAwesomeIcon icon={faBed} style={{ marginRight: "1em" }} color="#ab966f" />
            {bed}
          </Text>
        </Col>
        <Col xs={12} sm={12} lg={12} className={style.card__details__button}>
          <Button type="primary">Book</Button>
        </Col>
      </Row>
    );
  };

  return (
    <Card className={style.card} bodyStyle={{ padding: "0px 0px 10px 0px", height: "100%" }}>
      <Row justify="center" align="middle">
        <Col span={24} className={style.card__image}>
          {renderImage()}
        </Col>
        <Col span={22} className={style.card__details}>
          {renderHotelDetails()}
        </Col>
      </Row>
    </Card>
  );
};

export default HotelCard;
