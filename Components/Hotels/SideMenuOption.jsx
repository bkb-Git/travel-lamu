import { Col, Divider, Typography } from "antd";

import styles from "./hotels.module.scss";

const { Title } = Typography;

const SideMenuOption = ({ title, children }) => {
  return (
    <Col span={24} style={{ display: "flex", flexDirection: "column" }}>
      <Title level={5} className={styles.sideMenuOptionTitle}>
        {title}
      </Title>
      {children}
      <Divider />
    </Col>
  );
};

export default SideMenuOption;
