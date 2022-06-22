import { useState } from "react";
import { faAddressCard, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Form, Input, Row, Space, Typography } from "antd";

import { basicInfo } from "../../../../../Utls/constants";
import ProfileItem from "./ProfileItem";

import style from "./BasicProfile.module.scss";

const { Text } = Typography;

const BasicProfile = ({ user }) => {
  const { loading, userDetails } = user;
  const [editBasicProfile, setEditBasicProfile] = useState(false);

  const cardTitle = () => {
    return (
      <Col className={style.basicProfile__title}>
        <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "0.5rem" }} color="#ab966f" />
        Basic Information
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
        className={style.basicProfile__closeForm}
        onClick={() => setEditBasicProfile(false)}
      />
    </Space>
  );

  const EditButton = () => (
    <FontAwesomeIcon
      icon={faEdit}
      id={basicInfo}
      className={style.basicProfile__edit}
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
      <Row gutter={[0, 8]} justify="flex-start" align="middle">
        <ProfileItem span={24} name="Name" data={userDetails?.displayName} />
        <ProfileItem span={24} name="Username" data="BlazerTraveler1345" />
        <ProfileItem span={24} name="Email" data={userDetails?.email} />
        <ProfileItem
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
    <Row justify="center" align="middle">
      <Col span={20}>
        <Card
          extra={editBasicProfile ? <FormButton /> : <EditButton />}
          title={cardTitle()}
          className={style.basicProfile}
          bordered={false}
          headStyle={{ borderColor: "#ab966f" }}
          loading={loading}
        >
          {editBasicProfile ? renderBasicProfileForm() : renderBasicProfileDetails()}
        </Card>
      </Col>
    </Row>
  );
};

export default BasicProfile;
