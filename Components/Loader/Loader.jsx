import { Row, Spin } from "antd";

const Loader = () => {
  return (
    <Row justify="center" align="center" style={{ height: "100%" }}>
      <Spin size="large" />
    </Row>
  );
};

export default Loader;
