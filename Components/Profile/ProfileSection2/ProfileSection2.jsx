import { Col, Row } from "antd";

import BasicProfile from "./BasicProfile";
import Reviews from "./Reviews";
import Favorites from "./Favorites";

import styles from "../profile.module.scss";

const ProfileSection2 = ({ user }) => {
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

export default ProfileSection2;
