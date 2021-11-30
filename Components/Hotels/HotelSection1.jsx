import { Row, Col, Card, Typography, Form, DatePicker, InputNumber, Divider, Button } from "antd";
import Image from "next/image";
import { faCalendarAlt, faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LandscapePic from "../../public/LandscapePic.jpg";

import styles from "./hotels.module.scss";

const { Title } = Typography;

const HotelSection1 = () => {
  const CustomPrefixIcon = ({ iconColor, icon }) => {
    return (
      <div
        className="ant-input-group-addon"
        style={{
          width: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: `4px solid ${iconColor}`,
        }}
      >
        <FontAwesomeIcon color="#ab966f" icon={icon} />
      </div>
    );
  };

  const onFinish = () => {};

  return (
    <Row justify="center" align="middle" className={styles.hotelSection1}>
      <Image src={LandscapePic} layout="fill" className={styles.image} />
      <Col span={24} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card bordered className={styles.hotelSection1FormCard}>
          <Title level={1} className={styles.hotelSection1Title}>
            Hotels and Places to Stay
          </Title>
          <Divider style={{ borderWidth: 2, borderColor: "#ab966f" }} />
          <Form layout="inline" className={styles.hotelSection1Form} onFinish={onFinish}>
            <Form.Item className={styles.hotelSection1FormItem}>
              <Col span={24} style={{ display: "flex" }}>
                <CustomPrefixIcon icon={faCalendarAlt} iconColor="green" />
                <DatePicker style={{ flex: 1 }} size="large" placeholder="Check In" suffixIcon={null} />
              </Col>
            </Form.Item>
            <Form.Item className={styles.hotelSection1FormItem}>
              <Col span={24} style={{ display: "flex" }}>
                <CustomPrefixIcon icon={faCalendarAlt} iconColor="red" />
                <DatePicker style={{ flex: 1 }} size="large" placeholder="Check Out" suffixIcon={null} />
              </Col>
            </Form.Item>
            <Form.Item className={styles.hotelSection1FormItem}>
              <Col span={24} style={{ display: "flex" }}>
                <CustomPrefixIcon icon={faUserFriends} iconColor="gray" />
                <InputNumber style={{ flex: 1 }} size="large" placeholder="Guests" min={1} max={12} />
              </Col>
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                icon={<FontAwesomeIcon icon={faSearch} style={{ marginRight: ".5em" }} />}
              >
                Find
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default HotelSection1;
