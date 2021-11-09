import { Row } from "antd";

const Section = ({ children, style }) => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", ...style }}>
      {children}
    </Row>
  );
};

export default Section;
