import { Row, Typography } from "antd";

import styles from "./Services.module.scss";

const { Title } = Typography;

const ServicesSection1 = () => {
  return (
    <Row justify="center" align="bottom" className={styles.serviceSection1}>
      <Title className={styles.serviceSection1Title}>What do we offer ?</Title>
    </Row>
  );
};

export default ServicesSection1;
