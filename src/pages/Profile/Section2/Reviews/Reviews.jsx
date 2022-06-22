import { faComment, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { useState } from "react";
import { reviews } from "../../../../../Utls/constants";

import style from "./Reviews.module.scss";

const { Text } = Typography;

const Reviews = () => {
  const [editReviews, setEditReviews] = useState(false);

  const cardTitle = () => {
    return (
      <Col className={style.reviews__title}>
        <FontAwesomeIcon icon={faComment} style={{ marginRight: "0.5rem" }} color="#ab966f" />
        Reviews
      </Col>
    );
  };

  const FormButton = () => {
    return (
      <Space>
        <Button type="primary" size="middle">
          Save
        </Button>
        <FontAwesomeIcon
          icon={faWindowClose}
          id={`${reviews}-close`}
          size="2x"
          className={style.reviews__closeForm}
          onClick={() => setEditReviews(false)}
        />
      </Space>
    );
  };

  const EditButton = () => (
    <FontAwesomeIcon icon={faEdit} id={reviews} className={style.reviews__edit} onClick={() => setEditReviews(true)} />
  );

  const renderReviews = () => {
    return (
      <Card className={style.reviews__item}>
        <FontAwesomeIcon icon={faComment} color="#ab966f" style={{ marginRight: ".5em" }} />
        <Text className={style.reviews__title}>No Reviews</Text>
      </Card>
    );
  };

  return (
    <Row justify="center" align="middle">
      <Col span={20}>
        <Card
          extra={editReviews ? <FormButton /> : <EditButton />}
          title={cardTitle()}
          className={style.reviews}
          bordered={false}
          headStyle={{ borderColor: "#ab966f" }}
        >
          {renderReviews()}
        </Card>
      </Col>
    </Row>
  );
};

export default Reviews;
