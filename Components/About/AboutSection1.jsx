import { faAddressBook, faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Divider, Row, Typography, Button, Tooltip } from "antd";
import AboutUsSvg from "../../public/AboutUsSvg";

import styles from "./About.module.scss";

const { Title, Paragraph } = Typography;
const { Group } = Button;

const AboutSection1 = () => {
  return (
    <Row justify="space-between" align="middle" className={styles.aboutPage}>
      <Col className={styles.leftSide}>
        <Title className={styles.title}>
          About Us
          <Divider style={{ borderColor: "#ab966f", borderWidth: "2px" }} />
        </Title>
        <Paragraph className={styles.details}>
          Here at Nubia Travel Agency we strive to provide our customers with the best vacation experience possible in
          Lamu. We founded this business about 5 years ago with an aim to make traveling to Lamu a beautiful and
          memorable time for our clients, a couple of years later we became the top travel agency for Lamu bagging a
          couple of awards along the way and today we are still going strong.
        </Paragraph>
        <Group className={styles.contactDetails}>
          <Button type="ghost" size="large" icon={<FontAwesomeIcon icon={faPhone} color="#ab966f" />}>
            <Tooltip title="Call us">
              <span>803-619-5543</span>
            </Tooltip>
          </Button>
          <Button type="ghost" size="large" icon={<FontAwesomeIcon icon={faAt} color="#ab966f" />}>
            <Tooltip title="Email Us">
              <span>simonluttrell@ewhmt.com</span>
            </Tooltip>
          </Button>
          <Button type="ghost" size="large" icon={<FontAwesomeIcon icon={faAddressBook} color="#ab966f" />}>
            <Tooltip title="6716 Heritage Business Ct # 4, Chattanooga, TN 37421-8502 USA">
              <span>Tennessee, USA</span>
            </Tooltip>
          </Button>
        </Group>
      </Col>
      <Col className={styles.rightSide}>
        <AboutUsSvg width="90%" height="100%" />
      </Col>
    </Row>
  );
};

export default AboutSection1;
