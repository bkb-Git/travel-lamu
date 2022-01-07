import { Row } from "antd";
import PageNotFound from "../public/PageNotFoundSvg";

const Custom404 = () => {
  return (
    <Row justify="center" align="middle" className="custom404">
      <PageNotFound width="50%" height="50%" />
    </Row>
  );
};

export default Custom404;
