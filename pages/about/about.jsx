import { Row, Spin } from "antd";
import { useEffect, useState } from "react";
import AboutSection1 from "../../Components/About/AboutSection1";

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
  return (
    <Row style={{ background: "white", height: "100%" }}>
      <AboutSection1 />
    </Row>
  );
};

export default About;
