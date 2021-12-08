import { Row, Spin } from "antd";
import { useEffect, useState } from "react";
import HotelSection1 from "../../Components/Hotels/HotelSection1";
import HotelSection2 from "../../Components/Hotels/HotelSection2";
import MainLayout from "../../Components/MainLayout";

const Hotels = () => {
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
    <MainLayout styles={{ overflowY: "scroll" }}>
      <HotelSection1 />
      <HotelSection2 />
    </MainLayout>
  );
};

export default Hotels;
