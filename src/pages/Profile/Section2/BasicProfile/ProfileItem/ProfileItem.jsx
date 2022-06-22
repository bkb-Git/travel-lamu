import { Col, Row, Typography } from "antd";

import style from "./ProfileItem.module.scss";

const { Text, Title } = Typography;

const ProfileItem = (props) => {
  const { name, data, span } = props;

  return (
    <Col span={span} className={style.item}>
      <Row justify="flex-start" align="middle">
        <Text type="secondary">{name}</Text>
        <Title level={5} className={style.item__title}>
          {data}
        </Title>
      </Row>
    </Col>
  );
};

export default ProfileItem;
