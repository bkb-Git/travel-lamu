/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Form, Input, Checkbox, Button, Typography, Alert, Col, Divider } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import firebaseApp from "../../firebase/firebaseInit";

import styles from "./SignInForm.module.scss";

const { Title, Text } = Typography;

const SignInForm = ({ exitModal }) => {
  const auth = getAuth(firebaseApp);
  const [userDetails, setUserDetails] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    const { email, password } = values;
    setUserDetails(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUserDetails(false);
        setTimeout(() => {
          exitModal();
        }, 1000);
      })
      .catch((errorDetails) => {
        const errorCode = errorDetails.code;
        const errorMessage = errorDetails.message;
        setError({ errorCode, errorMessage });
        setUserDetails(false);
      });
  };

  const renderBanner = () => {
    return (
      <Form.Item style={{ width: "80%" }}>
        <Row style={{ padding: 10 }}>
          <Title level={4} className={styles.logo}>
            Nubia
          </Title>
          <Title level={4} className={styles.title}>
            Agency
          </Title>
        </Row>
        <Divider style={{ margin: 0, borderColor: "#ab966f" }} />
      </Form.Item>
    );
  };

  const renderTitle = () => {
    return (
      <Form.Item style={{ width: "80%" }}>
        <Title level={3} style={{ marginBottom: "0" }}>
          Welcome Back
        </Title>
      </Form.Item>
    );
  };

  const renderEmailInput = () => {
    return (
      <Form.Item
        name="email"
        label="Email"
        style={{ width: "80%" }}
        rules={[
          {
            required: true,
            message: "Please enter your Email Address!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
    );
  };

  const renderPasswordInput = () => {
    return (
      <Form.Item
        name="password"
        label="Password"
        style={{ width: "80%" }}
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
    );
  };

  const renderOtherInputs = () => {
    return (
      <Form.Item style={{ width: "80%", display: "flex", flexDirection: "column" }}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="#">
          Forgot password
        </a>
      </Form.Item>
    );
  };

  const renderLoginButton = () => {
    return (
      <Form.Item style={{ width: "80%" }}>
        <Button type="primary" block htmlType="submit" className="login-form-button" loading={userDetails}>
          Log in
        </Button>
        Or <Text style={{ color: "#ab966f" }}>register now!</Text>
      </Form.Item>
    );
  };

  const renderError = () => {
    if (error) {
      return (
        <Form.Item style={{ width: "80%" }}>
          <Alert type="error" message={`${error.errorMessage}`} showIcon />
        </Form.Item>
      );
    }
    return null;
  };

  const renderForm = () => {
    return (
      <Form
        name="Login"
        colon={false}
        requiredMark={false}
        layout="vertical"
        className={styles.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {renderBanner()}
        {renderTitle()}
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderOtherInputs()}
        {renderError()}
        {renderLoginButton()}
      </Form>
    );
  };

  return (
    <Row justify="start" align="middle">
      {renderForm()}
    </Row>
  );
};

export default SignInForm;
