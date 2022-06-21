import Slide from "react-reveal/Slide";
import { Row, Layout, Grid } from "antd";

import ContactUs from "./ContactUs";
import DropUsALine from "./DropUsALine";
import FollowUs from "./FollowUs";

import style from "./MainFooter.module.scss";

const { Footer } = Layout;
const { useBreakpoint } = Grid;

const MainFooter = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Slide bottom>
      <Footer className={style.footer}>
        <Row
          gutter={isMobileOrTablet && [0, 96]}
          justify={isMobileOrTablet ? "center" : "space-between"}
          align={isMobileOrTablet ? "middle" : "top"}
          className={style.footer__details}
        >
          <ContactUs />
          <DropUsALine />
          <FollowUs />
        </Row>
      </Footer>
    </Slide>
  );
};

export default MainFooter;
