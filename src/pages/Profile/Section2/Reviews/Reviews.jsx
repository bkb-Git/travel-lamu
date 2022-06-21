import { faComment, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Space, Typography } from "antd";
import { useState } from "react";
import { reviews } from "../../../../../Utls/constants";

import styles from "../profile.module.scss";

const { Text } = Typography;

const Reviews = () => {
  const [editReviews, setEditReviews] = useState(false);

  const CardTitle = ({ title, icon }) => {
    return (
      <Col className={styles.cardTitle}>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "0.5rem" }} color="#ab966f" />
        {title}
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
          className={styles.closeFormButton}
          onClick={() => setEditReviews(false)}
        />
      </Space>
    );
  };

  const EditButton = () => (
    <FontAwesomeIcon icon={faEdit} id={reviews} className={styles.editButton} onClick={() => setEditReviews(true)} />
  );

  const renderReviews = () => {
    return (
      <Card style={{ borderRadius: "20px", borderWidth: "2px", borderColor: "#ab966f" }}>
        <FontAwesomeIcon icon={faComment} color="#ab966f" style={{ marginRight: ".5em" }} />
        <Text className={styles.cardTitle}>No Reviews</Text>
      </Card>
    );
  };

  return (
    <Card
      extra={editReviews ? <FormButton /> : <EditButton />}
      title={<CardTitle title="Reviews" icon={faComment} />}
      className={styles.profileCard}
      bordered={false}
      headStyle={{ borderColor: "#ab966f" }}
    >
      {renderReviews()}
    </Card>
  );
};

export default Reviews;
