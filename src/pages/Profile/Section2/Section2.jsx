import { Col, Row, Grid } from "antd";

import BasicProfile from "./BasicProfile";
import Reviews from "./Reviews/Reviews";
import Favorites from "./Favorites/Favorites";

import style from "./Section2.module.scss";

const { useBreakpoint } = Grid;

const Section2 = ({ user }) => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;
  return (
    <Row gutter={isMobileOrTablet && [0, 16]} justify="space-around" align="center" className={style.userInfo}>
      <Col xs={22} sm={22} lg={8}>
        <BasicProfile user={user} />
      </Col>
      <Col xs={22} sm={22} lg={8}>
        <Reviews user={user} />
      </Col>
      <Col xs={22} sm={22} lg={8}>
        <Favorites user={user} />
      </Col>
    </Row>
  );
};

export default Section2;
