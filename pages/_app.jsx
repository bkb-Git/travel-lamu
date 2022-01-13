import { getAuth, onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { Row, Spin } from "antd";
import { useMediaQuery } from "react-responsive";
import { useEffect, useMemo, useState } from "react";

import MainLayout from "../Components/MainLayout";

import UserContext from "../UserContext/UserContext";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState({ loading: true, userDetails: null, error: null });
  const [isShown, setIsShown] = useState(false);

  const router = useRouter();

  const providerValue = useMemo(() => user, [user]);
  const auth = getAuth();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  useEffect(() => {
    setIsShown(true);
  }, []);

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (userData) => {
        if (userData) {
          setUser({ loading: false, userDetails: userData });
        } else {
          setUser({ loading: false, userDetails: null });
        }
      },
      (err) =>
        setUser((prevUser) => {
          return { loading: false, error: err, ...prevUser };
        })
    );
  }, [auth]);

  if (!isShown) {
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Row>
    );
  }

  const HeadElement = () => {
    const routes = {
      "/": "Home",
      "/hotels": "Hotels",
      "/services": "Services",
      "/about": "About Us",
      "/profile": "Profile",
    };

    return (
      <Head>
        <title>{`${routes[router.pathname]} || Travel Lamu`}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
        <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    );
  };

  return (
    <UserContext.Provider value={providerValue}>
      <MainLayout breakpoint={isTabletOrMobile}>
        <HeadElement />
        <Component {...pageProps} breakpoint={isTabletOrMobile} />
      </MainLayout>
    </UserContext.Provider>
  );
};

export default MyApp;
