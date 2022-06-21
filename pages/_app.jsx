import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import MainLayout from "../src/layout/MainLayout";
import UserContext from "../UserContext/UserContext";
import Loader from "../Components/Loader";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState({ loading: true, userDetails: null, error: null });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const providerValue = useMemo(() => user, [user]);
  const auth = getAuth();

  useEffect(() => {
    setLoading(false);
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

  if (loading || user.loading) return <Loader />;

  return (
    <UserContext.Provider value={providerValue}>
      <MainLayout>
        <HeadElement />
        <Component {...pageProps} />
      </MainLayout>
    </UserContext.Provider>
  );
};

export default MyApp;
