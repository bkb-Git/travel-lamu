import { faAddressCard, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Form, Input, Row, Space, Typography } from "antd";
import { useState } from "react";
import { basicInfo } from "../../../../../Utls/constants";

import styles from "../profile.module.scss";

const { Text, Title } = Typography;

const BasicProfile = ({ user }) => {
  const { loading, userDetails } = user;
  const [editBasicProfile, setEditBasicProfile] = useState(false);

  const CardTitle = ({ title, icon }) => {
    return (
      <Col className={styles.cardTitle}>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "0.5rem" }} color="#ab966f" />
        {title}
      </Col>
    );
  };

  const BasicProfileItem = ({ name, data, span }) => {
    return (
      <Col
        span={span}
        style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "1rem" }}
      >
        <Text type="secondary">{name}</Text>
        <Title level={5} style={{ marginLeft: "1rem", marginTop: 0, marginBottom: 0 }}>
          {data}
        </Title>
      </Col>
    );
  };

  const FormButton = () => (
    <Space>
      <Button type="primary" size="middle">
        Save
      </Button>
      <FontAwesomeIcon
        icon={faWindowClose}
        id={`${basicInfo}-close`}
        size="2x"
        className={styles.closeFormButton}
        onClick={() => setEditBasicProfile(false)}
      />
    </Space>
  );

  const EditButton = () => (
    <FontAwesomeIcon
      icon={faEdit}
      id={basicInfo}
      className={styles.editButton}
      onClick={() => setEditBasicProfile(true)}
    />
  );

  const renderBasicProfileForm = () => {
    return (
      <Form requiredMark={false} colon={false}>
        <Form.Item style={{ marginBottom: "1rem" }} label="Name">
          <Input name="name" placeholder="Name" />
        </Form.Item>
        <Form.Item style={{ marginBottom: "1rem" }} label="Username">
          <Input name="username" placeholder="Username" />
        </Form.Item>
        <Form.Item style={{ marginBottom: "1rem" }} label="Email" rules={[{ type: "email" }]}>
          <Input name="email" placeholder="Email" />
        </Form.Item>
      </Form>
    );
  };

  const renderBasicProfileDetails = () => {
    return (
      <Row justify="flex-start" align="middle">
        <BasicProfileItem span={24} name="Name" data={userDetails?.displayName} />
        <BasicProfileItem span={24} name="Username" data="BlazerTraveler1345" />
        <BasicProfileItem span={24} name="Email" data={userDetails?.email} />
        <BasicProfileItem
          span={24}
          name="Account"
          data={
            userDetails?.emailVerified ? <Text type="success">Verified</Text> : <Text type="danger">Not Verified</Text>
          }
        />
      </Row>
    );
  };

  return (
    <Card
      extra={editBasicProfile ? <FormButton /> : <EditButton />}
      title={<CardTitle title="Basic Information" icon={faAddressCard} />}
      className={styles.profileCard}
      bordered={false}
      headStyle={{ borderColor: "#ab966f" }}
      loading={loading}
    >
      {editBasicProfile ? renderBasicProfileForm() : renderBasicProfileDetails()}
    </Card>
  );
};

export default BasicProfile;
