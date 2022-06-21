import { Row, Grid } from "antd";

import AirportPickupSvg from "../../../../public/AirportPickupSvg";
import BookingSvg from "../../../../public/BookingSvg";
import CampfireSvg from "../../../../public/CampfireSvg";
import CarRentalSvg from "../../../../public/CarRentalSvg";

import ServiceCard from "./ServiceCard";

import styles from "./Section3.module.scss";

const { useBreakpoint } = Grid;

const ServicesSection3 = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Row gutter={!isMobileOrTablet && [0, 64]} justify="center" align="top" className={styles.section}>
      <ServiceCard serviceName="Airport Pickup" anchorLink="block-1" ServiceSvg={AirportPickupSvg} />
      <ServiceCard serviceName="Booking" anchorLink="block-2" ServiceSvg={BookingSvg} svgToRight />
      <ServiceCard serviceName="Tour Packages" anchorLink="block-3" ServiceSvg={CampfireSvg} />
      <ServiceCard serviceName="Car Rentals" anchorLink="block-4" ServiceSvg={CarRentalSvg} svgToRight />
    </Row>
  );
};

export default ServicesSection3;
