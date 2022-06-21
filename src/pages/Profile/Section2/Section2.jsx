import { Col, Row } from "antd";

import BasicProfile from "./BasicProfile";
import Reviews from "./Reviews/Reviews";
import Favorites from "./Favorites/Favorites";

import styles from "../profile.module.scss";

const Section2 = ({ user }) => {
  return (
    <Row justify="space-around" align="center" className={styles.profileSection2}>
      <Col span={6} className={styles.profileCardContainer}>
        <BasicProfile user={user} />
      </Col>
      <Col span={6} className={styles.profileCardContainer}>
        <Reviews user={user} />
      </Col>
      <Col span={6} className={styles.profileCardContainer}>
        <Favorites user={user} />
      </Col>
    </Row>
  );
};

export default Section2;
