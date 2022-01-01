import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Rate, Row, Statistic, Typography } from "antd";
import Image from "next/image";
import styles from "./HotelCard.module.scss";

const { Title, Text } = Typography;

const HotelCard = ({ hotelRoom }) => {
  const { coverImg, hotelName, rating, bed, roomType, price } = hotelRoom;

  return (
    <Col className={styles.hotelCard}>
      <Card bodyStyle={{ padding: "0px 0px 10px 0px", position: "relative", height: "100%", width: "100%" }}>
        <Col span={24} style={{ height: "70%", position: "relative" }}>
          <Image layout="fill" className={styles.cover} src={coverImg} />
          <Card bordered={false} bodyStyle={{ padding: 0 }} className={styles.priceTag}>
            <Statistic value={price} valueStyle={{ color: "white" }} prefix="$" />
          </Card>
        </Col>
        <Row justify="space-between" align="middle" className={styles.details}>
          <Col span={14} style={{ marginBottom: ".5em", height: "auto" }}>
            <Title level={3} style={{ marginBottom: 0 }}>
              {hotelName}
            </Title>
          </Col>
          <Col span={10} style={{ marginBottom: ".5em", height: "auto" }}>
            <Rate disabled allowHalf value={rating} />
          </Col>
          <Col span={12}>
            <Title level={5}>{roomType}</Title>
            <Text type="secondary">
              <FontAwesomeIcon icon={faBed} style={{ marginRight: "1em" }} color="#ab966f" />
              {bed}
            </Text>
          </Col>
          <Col span={12} style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Button type="primary">Book</Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default HotelCard;
