import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, Col, Rate, Typography } from "antd";

import style from "./TestimonialCard.module.scss";

const { Title, Text } = Typography;

const TestimonialCard = ({ name, rating, quoteType, imgPlaceholder, message }) => {
  const backgroundSvg = { left: faQuoteLeft, right: faQuoteRight };
  return (
    <Col className={style.testimonial}>
      <Card
        bodyStyle={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "5px 15px",
        }}
        className={style.testimonial__card}
      >
        <Col className={style.testimonial__card__background}>
          <FontAwesomeIcon color="#ab966f" size="9x" icon={backgroundSvg[quoteType]} />
        </Col>
        <Avatar size={60} src={`https://joeschmoe.io/api/v1/${imgPlaceholder}}`} />
        <Rate disabled value={rating} allowHalf />
        <Text strong style={{ color: "#333" }}>
          {message}
        </Text>
        <Title level={4} className={style.testimonial__card__name}>
          {name}
        </Title>
      </Card>
    </Col>
  );
};

export default TestimonialCard;
