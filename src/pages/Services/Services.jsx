import { Grid } from "antd";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const { useBreakpoint } = Grid;

const Services = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <>
      <Section1 />
      {!isMobileOrTablet && <Section2 />}
      <Section3 />
    </>
  );
};

export default Services;
