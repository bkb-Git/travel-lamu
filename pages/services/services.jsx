import { Row, Spin } from "antd";
import { useEffect, useState } from "react";

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
    <>
      <ServicesSection1 />
      <ServicesSection2 />
      <ServicesSection3 />
    </>
  );
};

export default Services;
