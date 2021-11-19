import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Layout, Typography, Divider, Form, Input, Button } from "antd";

import styles from "./MainFooter.module.scss";

const { Footer } = Layout;
const { Title, Text } = Typography;

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer className={styles.footer}>
      <Row gutter={[64, 16]} justify="center" align="top" style={{ width: "80%" }}>
        <Col span={8}>
          <Row gutter={[16, 8]} style={{ flexDirection: "column" }}>
            <Col span={24} style={{ marginBottom: "1em" }}>
              <Title level={4} style={{ color: "white", textAlign: "center" }}>
                Contact Us
              </Title>
              <Divider style={{ borderColor: "#ab966f" }} />
            </Col>
            <Col style={{ color: "white" }}>
              <FontAwesomeIcon icon={faMapMarkedAlt} color="#ab966f" style={{ marginRight: "1em" }} />
              <Text strong style={{ color: "white", marginRight: "5px" }}>
                Address :
              </Text>
              6716 Heritage Business Ct # 4, Chattanooga, TN 37421-8502 USA
            </Col>
            <Col style={{ color: "white" }}>
              <FontAwesomeIcon icon={faPhone} color="#ab966f" style={{ marginRight: "1em" }} />
              <Text strong style={{ color: "white", marginRight: "5px" }}>
                Phone :
              </Text>
              4234990497
            </Col>
            <Col style={{ color: "white" }}>
              <FontAwesomeIcon icon={faEnvelope} color="#ab966f" style={{ marginRight: "1em" }} />
              <Text strong style={{ color: "white", marginRight: "5px" }}>
                Email :
              </Text>
              info@deffacto.com
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[16, 1]} style={{ flexDirection: "column" }}>
            <Col span={24}>
              <Title level={4} style={{ color: "white", textAlign: "center" }}>
                Drop us a Line
              </Title>
              <Divider style={{ borderColor: "#ab966f" }} />
            </Col>
            <Form className={styles.footerForm}>
              <Form.Item>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item>
                <Input type="email" placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input.TextArea rows={2} placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" block>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[16, 32]} style={{ flexDirection: "column" }}>
            <Col span={24}>
              <Title level={4} style={{ color: "white", textAlign: "center" }}>
                Follow us
              </Title>
            </Col>
            <Col span={24} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FontAwesomeIcon icon={faFacebook} size="2x" color="white" className={styles.facebook} />
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" className={styles.instagram} />
              <FontAwesomeIcon icon={faTwitter} size="2x" color="white" className={styles.twitter} />
              <FontAwesomeIcon icon={faPinterest} color="white" size="2x" className={styles.pinterest} />
            </Col>
            <Title level={4} style={{ color: "white", textAlign: "center" }}>
              Nubia Agency
            </Title>
            <Text type="secondary" style={{ textAlign: "center", color: "white" }}>
              Copyright <Text style={{ color: "#ab966f" }}>&copy;</Text> {currentYear}, Nubia Agency Limited
            </Text>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default MainFooter;
