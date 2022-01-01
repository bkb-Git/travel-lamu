import { getAuth, onAuthStateChanged } from "firebase/auth";
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

  return (
    <UserContext.Provider value={providerValue}>
      <MainLayout styles={{ overflowY: "scroll" }} breakpoint={isTabletOrMobile}>
        <Component {...pageProps} breakpoint={isTabletOrMobile} />
      </MainLayout>
    </UserContext.Provider>
  );
};

export default MyApp;
