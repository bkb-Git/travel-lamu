import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Head } from "next/head";
import { Row, Spin } from "antd";
import { useMediaQuery } from "react-responsive";
import { useEffect, useMemo, useState } from "react";

import MainLayout from "../Components/MainLayout";

import UserContext from "../UserContext/UserContext";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState({ loading: true, userDetails: null, error: null });
  const [isShown, setIsShown] = useState(false);

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
    return (
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="%PUBLIC_URL%/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="%PUBLIC_URL%/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="%PUBLIC_URL%/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="%PUBLIC_URL%/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="%PUBLIC_URL%/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="%PUBLIC_URL%/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="%PUBLIC_URL%/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="%PUBLIC_URL%/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="%PUBLIC_URL%/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
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
