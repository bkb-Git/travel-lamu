import { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Layout,
  Row,
  Typography,
  Button,
  Space,
  Avatar,
  Dropdown,
  Menu,
  Skeleton,
  notification,
  Grid,
} from "antd";
import { useRouter } from "next/dist/client/router";

import Navbar from "../../../Components/Navbar";

import UserContext from "../../../UserContext/UserContext";

import style from "./MainHeader.module.scss";
import NavbarDrawer from "./NavbarDrawer/NavbarDrawer";

const { Header } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const MainHeader = (props) => {
  const { modalhandler } = props;

  const { loading, userDetails, error } = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);

  const auth = getAuth();
  const router = useRouter();

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const handleSignOut = () => signOut(auth);

  const handleScroll = () => {
    const position = document.getElementById("main-layout").scrollTop;
    const headerEl = document.getElementById("header-fade");

    if (position > 100) {
      headerEl.style.background = "#33333360";
    } else {
      headerEl.style.background = "#333333";
    }
  };

  useEffect(() => {
    const scrollableElement = document.getElementById("main-layout");
    scrollableElement.addEventListener("scroll", handleScroll);

    const handleStop = () => setOpenMenu(false);
    router.events.on("routeChangeComplete", handleStop);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeComplete", handleStop);
    };
  }, [router]);

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

  const renderTitle = () => {
    return (
      <Col xs={12} sm={12} lg={8} className={style.header__logo}>
        <Row justify="center" align="middle">
          <Col xs={20} sm={20} lg={10}>
            <Title level={4} className={style.header__logo__title}>
              Nubia
            </Title>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderAvatar = () => {
    return <Avatar size={32} icon={<FontAwesomeIcon icon={faUser} />} className={style.header__avatar} />;
  };

  const renderUser = () => {
    return (
      <Space
        size="middle"
        direction={isMobileOrTablet ? "vertical" : "horizontal"}
        className={isMobileOrTablet && style.header__buttons__container}
      >
        {!isMobileOrTablet ? (
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

  const renderAuthButtons = () => {
    return (
      <Space
        size="middle"
        direction={isMobileOrTablet ? "vertical" : "horizontal"}
        className={style.header__buttons__container}
      >
        <Button
          type="primary"
          block={isMobileOrTablet}
          icon={isMobileOrTablet && <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: "0.5em" }} />}
          ghost
          onClick={() => modalhandler({ signIn: true, signUp: false })}
          className={style.header__buttons__container__item}
        >
          Login
        </Button>
        <Button
          type="primary"
          block={isMobileOrTablet}
          icon={isMobileOrTablet && <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5em" }} />}
          onClick={() => modalhandler({ signIn: false, signUp: true })}
          className={style.header__buttons__container__item}
        >
          Register now
        </Button>
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

  const renderSkeleton = () => (
    <Skeleton loading active avatar paragraph={false} className={style.header__loadingSkeleton} />
  );

  const renderContent = () => {
    if (isMobileOrTablet)
      return (
        <Col span={12}>
          <Row justify="end" align="middle">
            <Button icon={<FontAwesomeIcon icon={faBars} size="2x" />} size="large" onClick={() => setOpenMenu(true)} />
          </Row>
        </Col>
      );

    return (
      <>
        <Col lg={8} className={style.header__navbar}>
          <Navbar />
        </Col>
        <Col lg={8}>
          <Row justify="center" align="middle">
            {loading ? renderSkeleton() : renderAccountState()}
          </Row>
        </Col>
      </>
    );
  };

  return (
    <Header className={style.header} id="header-fade">
      <Row justify="center" align="middle" style={{ width: isMobileOrTablet && "100%" }}>
        {renderTitle()}
        {renderContent()}
      </Row>
      <NavbarDrawer
        openMenu={openMenu}
        menuHandler={() => setOpenMenu()}
        modalhandler={modalhandler}
        accountState={{ loading, renderAccountState }}
      />
      {renderError()}
    </Header>
  );
};

export default MainHeader;
