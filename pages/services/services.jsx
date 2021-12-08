import { Row, Spin } from "antd";
import { useEffect, useState } from "react";
import MainLayout from "../../Components/MainLayout";
import ServicesSection1 from "../../Components/Services/ServicesSection1";
import ServicesSection2 from "../../Components/Services/ServicesSection2";
import ServicesSection3 from "../../Components/Services/ServicesSection3";

const Services = () => {
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
      <ServicesSection1 />
      <ServicesSection2 />
      <ServicesSection3 />
    </MainLayout>
  );
};

export default Services;
