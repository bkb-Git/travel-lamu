import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Typography, Avatar } from "antd";

import style from "./Section1.module.scss";

const { Title, Text } = Typography;

const Section1 = ({ user }) => {
  const { userDetails } = user;

  const avatar = () => {
    return (
      <Avatar
        icon={<FontAwesomeIcon icon={faUser} size="6x" color="white" />}
        className={style.user__header__profile__avatar__image}
      />
    );
  };

  const title = () => {
    return (
      <Title level={3} className={style.user__header__profile__title} style={{ marginTop: "0.5em" }}>
        BlazerTraveler1345
      </Title>
    );
  };

  const email = () => <Text type="secondary">{userDetails?.email}</Text>;

  const renderProfileAvatar = () => {
    return (
      <Row justify="center" align="bottom" style={{ height: "100%" }}>
        <Col span={24}>
          <Row justify="center" align="middle">
            {avatar()}
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="center" align="middle">
            {title()}
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="center" align="middle">
            {email()}
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <Row justify="center" className={style.user}>
      <Col span={24} className={style.user__header}>
        <Row justify="center" align="top" className={style.user__header__profile}>
          <Col xs={22} sm={22} lg={10} className={style.user__header__profile__avatar}>
            {renderProfileAvatar()}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Section1;
