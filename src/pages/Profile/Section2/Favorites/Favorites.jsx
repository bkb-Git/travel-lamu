import { useState } from "react";
import { faStar, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { favorites } from "../../../../../Utls/constants";

import style from "./Favorites.module.scss";

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
          className={style.favorites__closeForm}
          onClick={() => setEditFavorites(false)}
        />
      </Space>
    );
  };

  const EditButton = () => (
    <FontAwesomeIcon
      icon={faEdit}
      id={favorites}
      className={style.favorites__edit}
      onClick={() => setEditFavorites(true)}
    />
  );

  const cardTitle = () => {
    return (
      <Col className={style.favorites__title}>
        <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem" }} color="#ab966f" />
        Favorites
      </Col>
    );
  };

  const renderFavorites = () => {
    return (
      <Card className={style.favorites__item}>
        <FontAwesomeIcon icon={faStar} color="#ab966f" style={{ marginRight: ".5em" }} />
        <Text className={style.cardTitle}>No Favorite Places</Text>
      </Card>
    );
  };

  return (
    <Row justify="center" align="middle">
      <Col span={20}>
        <Card
          extra={editFavorites ? <FormButton /> : <EditButton />}
          title={cardTitle()}
          className={style.favorites}
          bordered={false}
          headStyle={{ borderColor: "#ab966f" }}
        >
          {renderFavorites()}
        </Card>
      </Col>
    </Row>
  );
};

export default Favorites;
