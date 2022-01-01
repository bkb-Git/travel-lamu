import { useEffect, useState } from "react";
import { Row, Spin } from "antd";

import Head from "next/head";

import MainFooter from "../Components/MainFooter";
import Section1 from "../Components/Home/Section1";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import Section4 from "../Components/Home/Section4";

const Home = ({ breakpoint }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  if (!isShown) {
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Row>
    );
  }
  return (
    <>
      <Head>
        <title>Travel Lamu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1 breakpoint={breakpoint} />
      <Section2 breakpoint={breakpoint} />
      <Section3 breakpoint={breakpoint} />
      <Section4 breakpoint={breakpoint} />
      <MainFooter breakpoint={breakpoint} />
    </>
  );
};

export default Home;
