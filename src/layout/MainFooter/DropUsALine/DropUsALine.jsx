import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";

import style from "./DropUsALine.module.scss";

const { Title } = Typography;

const DropUsALine = () => {
  const renderTitle = () => {
    return (
      <>
        <Title level={4} style={{ color: "white", textAlign: "center" }}>
          Drop us a Line
        </Title>
        <Divider style={{ borderColor: "#ab966f" }} />
      </>
    );
  };

  const renderForm = () => {
    return (
      <Form className={style.dropUsALine__form}>
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
    );
  };

  return (
    <Col xs={22} sm={22} lg={8} className={style.dropUsALine}>
      <Row justify="center" align="middle">
        <Col span={24}>{renderTitle()}</Col>
        <Col span={24}>{renderForm()}</Col>
      </Row>
    </Col>
  );
};

export default DropUsALine;
