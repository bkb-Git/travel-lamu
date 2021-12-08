import { Row, Spin } from "antd";
import { useEffect, useState } from "react";
import MainLayout from "../../Components/MainLayout";

const About = () => {
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
  return <MainLayout styles={{ background: "white" }}>About us</MainLayout>;
};

export default About;
