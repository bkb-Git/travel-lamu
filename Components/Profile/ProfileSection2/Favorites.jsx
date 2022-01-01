import { useState } from "react";
import { faStar, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Space, Typography } from "antd";
import { favorites } from "../../../Utls/constants";

import styles from "../profile.module.scss";

const { Text } = Typography;

const Favorites = () => {
  const [editFavorites, setEditFavorites] = useState(false);

  const FormButton = () => {
    return (
      <Space>
        <Button type="primary" size="middle">
          Save
        </Button>
        <FontAwesomeIcon
          icon={faWindowClose}
          id={`${favorites}-close`}
          size="2x"
          className={styles.closeFormButton}
          onClick={() => setEditFavorites(false)}
        />
      </Space>
    );
  };

  const EditButton = () => (
    <FontAwesomeIcon
      icon={faEdit}
      id={favorites}
      className={styles.editButton}
      onClick={() => setEditFavorites(true)}
    />
  );

  const CardTitle = ({ title, icon }) => {
    return (
      <Col className={styles.cardTitle}>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "0.5rem" }} color="#ab966f" />
        {title}
      </Col>
    );
  };

  const renderFavorites = () => {
    return (
      <Card style={{ borderRadius: "20px", borderWidth: "2px", borderColor: "#ab966f" }}>
        <FontAwesomeIcon icon={faStar} color="#ab966f" style={{ marginRight: ".5em" }} />
        <Text className={styles.cardTitle}>No Favorite Places</Text>
      </Card>
    );
  };

  return (
    <Card
      extra={editFavorites ? <FormButton /> : <EditButton />}
      title={<CardTitle title="Favorites" icon={faStar} />}
      className={styles.profileCard}
      bordered={false}
      headStyle={{ borderColor: "#ab966f" }}
    >
      {renderFavorites()}
    </Card>
  );
};

export default Favorites;
