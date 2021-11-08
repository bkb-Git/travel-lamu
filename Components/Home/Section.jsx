import { Row } from "antd";

const Section = ({ children }) => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      {children}
    </Row>
  );
};

export default Section;
