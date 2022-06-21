import { Col, Divider, Row, Typography } from "antd";

import style from "./SideMenuOption.module.scss";

const { Title } = Typography;

const SideMenuOption = (props) => {
  const { title, children } = props;

  const renderTitle = () => {
    return (
      <Title level={5} className={style.sideMenuOption__title}>
        {title}
      </Title>
    );
  };

  return (
    <Col span={24} className={style.sideMenuOption}>
      <Row>
        <Col span={24}>{renderTitle()}</Col>
        <Col span={24}>{children}</Col>
        <Col span={24}>
          <Divider />
        </Col>
      </Row>
    </Col>
  );
};

export default SideMenuOption;
