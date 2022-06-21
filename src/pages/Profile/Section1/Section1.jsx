import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Typography, Avatar } from "antd";

import styles from "./profile.module.scss";

const { Title, Text } = Typography;

const Section1 = ({ user }) => {
  const { userDetails } = user;

  return (
    <Row className={styles.profileSection1}>
      <Col span={24} className={styles.profileBackground} />
      <Col span={24} className={styles.user}>
        <Col className={styles.userDetails}>
          <Avatar icon={<FontAwesomeIcon icon={faUser} size="6x" color="white" />} className={styles.avatar} />
          <Title level={3} className={styles.cardTitle} style={{ marginTop: "0.5em" }}>
            BlazerTraveler1345
          </Title>
          <Text type="secondary">{userDetails?.email}</Text>
        </Col>
      </Col>
    </Row>
  );
};

export default Section1;
