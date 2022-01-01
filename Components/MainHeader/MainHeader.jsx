import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Layout, Row, Typography, Button, Space, Avatar, Dropdown, Menu, Skeleton, notification } from "antd";
import { useRouter } from "next/dist/client/router";

import Navbar from "../Navbar";

import UserContext from "../../UserContext/UserContext";

import styles from "./MainHeader.module.scss";

const { Header } = Layout;
const { Title, Text } = Typography;

const MainHeader = ({ modalhandler }) => {
  const { loading, userDetails, error } = useContext(UserContext);

  const auth = getAuth();

  const router = useRouter();

  const handleSignOut = () => signOut(auth);

  const renderAuthButtons = () => {
    return (
      <Space size="middle">
        <Button type="primary" ghost onClick={() => modalhandler({ signIn: true, signUp: false })}>
          Login
        </Button>
        <Button type="primary" onClick={() => modalhandler({ signIn: false, signUp: true })}>
          Register now
        </Button>
      </Space>
    );
  };

  const renderUser = () => {
    const menu = () => {
      return (
        <Menu>
          <Menu.Item
            key="1"
            icon={<FontAwesomeIcon icon={faUser} color="#ab966f" />}
            onClick={() => router.push("/profile")}
          >
            Profile
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2" icon={<FontAwesomeIcon icon={faSignOutAlt} color="#ab966f" />} onClick={handleSignOut}>
            Log out
          </Menu.Item>
        </Menu>
      );
    };
    return (
      <Space size="middle">
        <Dropdown overlay={menu} overlayStyle={{ marginTop: "1em" }} trigger={["click"]}>
          <Avatar size={32} icon={<FontAwesomeIcon icon={faUser} />} className={styles.avatar} />
        </Dropdown>
        <Text style={{ color: "white" }}>{userDetails?.email}</Text>
      </Space>
    );
  };

  const renderAccountState = () => {
    if (userDetails) {
      return renderUser();
    }
    return renderAuthButtons();
  };

  const renderError = () => {
    if (!error) {
      return null;
    }
    return notification.error({
      message: "Unable to contact server",
      description: error.message,
    });
  };
  return (
    <Header className={styles.header}>
      <Row justify="space-between" align="middle">
        <Col flex={1} className={styles.logo}>
          <Title level={4} className={styles.logoTitle}>
            Nubia
          </Title>
        </Col>
        <Col flex={1} className={styles.navbar}>
          <Navbar />
        </Col>
        <Col flex={1} className={styles.headerButtons}>
          {loading ? <Skeleton loading active avatar paragraph={false} /> : renderAccountState()}
        </Col>
      </Row>
      {renderError()}
    </Header>
  );
};

export default MainHeader;
