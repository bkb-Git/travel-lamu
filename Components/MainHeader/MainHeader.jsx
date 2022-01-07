import { useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Layout, Row, Typography, Button, Space, Avatar, Dropdown, Menu, Skeleton, notification } from "antd";
import { useRouter } from "next/dist/client/router";

import Navbar from "../Navbar";

import UserContext from "../../UserContext/UserContext";

import styles from "./MainHeader.module.scss";
import DrawerMenu from "./DrawerMenu";

const { Header } = Layout;
const { Title, Text } = Typography;

const MainHeader = ({ modalhandler, breakpoint }) => {
  const { loading, userDetails, error } = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);

  const auth = getAuth();

  const router = useRouter();

  const handleSignOut = () => signOut(auth);

  const renderAuthButtons = () => {
    return (
      <Space size="middle" direction={breakpoint ? "vertical" : "horizontal"} className={styles.spaceContainer}>
        <Button
          type="primary"
          block={breakpoint}
          icon={breakpoint && <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: "0.5em" }} />}
          ghost
          onClick={() => modalhandler({ signIn: true, signUp: false })}
        >
          Login
        </Button>
        <Button
          type="primary"
          block={breakpoint}
          icon={breakpoint && <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5em" }} />}
          onClick={() => modalhandler({ signIn: false, signUp: true })}
        >
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

    const renderAvatar = () => {
      return <Avatar size={32} icon={<FontAwesomeIcon icon={faUser} />} className={styles.avatar} />;
    };
    return (
      <Space
        size="middle"
        direction={breakpoint ? "vertical" : "horizontal"}
        className={breakpoint && styles.spaceContainer}
      >
        {!breakpoint ? (
          <>
            <Dropdown overlay={menu} overlayStyle={{ marginTop: "1em" }} trigger={["click"]}>
              {renderAvatar()}
            </Dropdown>
            <Text style={{ color: "white" }}>{userDetails?.email}</Text>
          </>
        ) : (
          <>
            <Row justify="space-around" align="middle">
              {renderAvatar()}
              <Text strong style={{ color: "#333" }}>
                {userDetails?.email}
              </Text>
            </Row>
            <Button
              type="primary"
              block
              icon={<FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5em" }} />}
              onClick={() => router.push("/profile")}
              ghost
            >
              Profile
            </Button>
            <Button
              type="primary"
              block
              icon={<FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "0.5em" }} />}
              onClick={handleSignOut}
            >
              Log Out
            </Button>
          </>
        )}
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
        {!breakpoint && (
          <>
            <Col flex={1} className={styles.navbar}>
              <Navbar breakpoint={breakpoint} />
            </Col>
            <Col flex={1} className={styles.headerButtons}>
              {loading ? <Skeleton loading active avatar paragraph={false} /> : renderAccountState()}
            </Col>
          </>
        )}
        {breakpoint && (
          <Col flex={1} className={styles.bars}>
            <Button icon={<FontAwesomeIcon icon={faBars} size="2x" />} size="large" onClick={() => setOpenMenu(true)} />
          </Col>
        )}
      </Row>
      <DrawerMenu
        openMenu={openMenu}
        menuHandler={setOpenMenu}
        breakpoint={breakpoint}
        modalhandler={modalhandler}
        accountState={{ loading, renderAccountState }}
      />
      {renderError()}
    </Header>
  );
};

export default MainHeader;
