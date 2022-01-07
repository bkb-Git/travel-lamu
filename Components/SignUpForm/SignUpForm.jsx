/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Row, Typography, Input, Button, Result, Alert, Divider } from "antd";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import firebaseApp from "../../firebase/firebaseInit";

import styles from "./SignUpForm.module.scss";

const { Title, Text } = Typography;

const SignUpForm = ({ exitModal, modalhandler }) => {
  const auth = getAuth(firebaseApp);
  const [userDetails, setUserDetails] = useState({ loading: false });
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    const { email, password } = values;
    setUserDetails({ ...userDetails, loading: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUserDetails({ loading: false, userCredentials });
        setTimeout(() => {
          exitModal();
        }, 3000);
      })
      .catch((errorDetails) => {
        const errorCode = errorDetails.code;
        const errorMessage = errorDetails.message;
        setError({ errorCode, errorMessage });
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
          Register Here!
        </Title>
      </Form.Item>
    );
  };

  const renderUsernameInput = () => {
    return (
      <Form.Item
        name="username"
        label="Username"
        style={{ width: "80%" }}
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
    );
  };

  const renderEmailInput = () => {
    return (
      <Form.Item
        name="email"
        label="E-mail"
        style={{ width: "80%" }}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="E-mail" />
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

  const renderReEnterPasswordInput = () => {
    return (
      <Form.Item
        name="confirm-password"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        style={{ width: "80%" }}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("The two passwords that you entered do not match!"));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
    );
  };

  const renderSignUpButton = () => {
    return (
      <Form.Item style={{ width: "80%" }}>
        <Button type="primary" block htmlType="submit" className="signup-form-button" loading={userDetails.loading}>
          Sign Up
        </Button>
        Or{" "}
        <Text
          style={{ color: "#ab966f", cursor: "pointer" }}
          onClick={() => modalhandler({ signIn: true, signUp: false })}
        >
          Sign In now!
        </Text>
      </Form.Item>
    );
  };

  const renderError = () => {
    if (!error) {
      return null;
    }
    return (
      <Form.Item style={{ width: "80%" }}>
        <Alert message={`${error.errorMessage}`} type="error" showIcon />
      </Form.Item>
    );
  };

  const renderForm = () => {
    return (
      <Form
        name="Login"
        colon={false}
        requiredMark={false}
        layout="vertical"
        className={styles.signUpForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {renderBanner()}
        {renderTitle()}
        {renderUsernameInput()}
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderReEnterPasswordInput()}
        {renderError()}
        {renderSignUpButton()}
      </Form>
    );
  };

  const renderResult = () => {
    const { userCredentials = null } = userDetails;
    const { user = null } = userCredentials;
    const { email = "" } = user;

    return (
      <Result
        style={{ width: "100%" }}
        status="success"
        title="Sign Up Successful!"
        subTitle={`Please Verify account ${email}`}
      />
    );
  };

  return (
    <Row justify="start" align="middle">
      {!userDetails.userCredentials ? renderForm() : renderResult()}
    </Row>
  );
};

export default SignUpForm;
