import { Col, Layout, Row, Typography, Button, Space } from "antd";
import Navbar from "../Navbar";

import styles from "./MainHeader.module.css";

const { Header } = Layout;
const { Title } = Typography;

const MainHeader = () => {
  return (
    <Header className={styles.header}>
      <Row justify="space-between" align="middle">
        <Col flex={1} className={styles.logo}>
          <Title level={4} className={styles.title}>
            Lamu
          </Title>
        </Col>
        <Col flex={1} className={styles.navbar}>
          <Navbar />
        </Col>
        <Col flex={1} className={styles.headerButtons}>
          <Space size="middle">
            <Button type="primary" ghost>
              Login
            </Button>
            <Button type="primary">Register now</Button>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default MainHeader;
