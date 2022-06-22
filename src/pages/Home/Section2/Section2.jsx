import { Col, Row, Grid } from "antd";

import { faHotel, faLandmark, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

import HotelCard from "../../../../Components/HotelCard";

import OfferCard from "./OfferCard/OfferCard";
import CarouselMod from "../../../../Components/CarouselMod/CarouselMod";

import HotelRoom1 from "../../../../public/hotel-room1.jpg";
import HotelRoom2 from "../../../../public/hotel-room2.jpg";
import HotelRoom3 from "../../../../public/hotel-room3.jpg";
import HotelRoom4 from "../../../../public/hotel-room4.jpg";

import style from "./Section2.module.scss";

const { useBreakpoint } = Grid;

const hotels = {
  hotelRoom1: {
    coverImg: HotelRoom1,
    hotelName: "Spring Hotel",
    rating: 4.5,
    bed: "2 Twin Beds",
    roomType: "Apartment (1 room)",
    price: 45,
  },
  hotelRoom2: {
    coverImg: HotelRoom2,
    hotelName: "Lamu High Hotel",
    rating: 3.5,
    bed: "Double Bed",
    roomType: "Deluxe Room",
    price: 65,
  },
  hotelRoom3: {
    coverImg: HotelRoom3,
    hotelName: "Sunset Hotel",
    rating: 3,
    bed: "2 Twin Bed",
    roomType: "Standard Room",
    price: 35,
  },
  hotelRoom4: {
    coverImg: HotelRoom4,
    hotelName: "Laden Hotel",
    rating: 4,
    bed: "Queen Size",
    roomType: "Standard Room",
    price: 50,
  },
};

const OFFERS = {
  VisitTheSights: {
    name: "Visit the Sights",
    svg: faLandmark,
    description:
      " There are beautiful and historic sites to visit , most famously Lamu Old Town a UNESCO World Heritage Site.",
  },
  Hotels: {
    name: "Hotels",
    svg: faHotel,
    description:
      " You can find comfortable, blissful and affordable places to stay while enjoying the view and weather during your visit.",
  },
  Beach: {
    name: "Beach",
    svg: faUmbrellaBeach,
    description:
      " Long and beautiful coastlines to heart-warming sunsets, spend your mornings or evenings walking on the beach.",
  },
};

const Section2 = () => {
  const { xs, sm, lg } = useBreakpoint();
  // eslint-disable-next-line no-unused-vars
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderWhatToExpect = () => {
    return (
      <>
        <OfferCard left={!isMobileOrTablet} bottom={isMobileOrTablet} offer={OFFERS.VisitTheSights} />
        <OfferCard bottom offer={OFFERS.Hotels} />
        <OfferCard right={!isMobileOrTablet} bottom={isMobileOrTablet} offer={OFFERS.Beach} />
      </>
    );
  };

  const renderHotelRoomsSlider = () => {
    return (
      <Fade bottom duration={1500}>
        <CarouselMod
          additionalStyling={{ height: isMobileOrTablet && "65vh" }}
          arrows
          dots={false}
          infinite
          slidesToShow={isMobileOrTablet ? 1 : 3}
        >
          <HotelCard hotelRoom={hotels.hotelRoom1} />
          <HotelCard hotelRoom={hotels.hotelRoom2} />
          <HotelCard hotelRoom={hotels.hotelRoom3} />
          <HotelCard hotelRoom={hotels.hotelRoom4} />
        </CarouselMod>
      </Fade>
    );
  };

  return (
    <Row gutter={isMobileOrTablet ? [0, 84] : [0, 64]} justify="center" align="middle" className={style.section2}>
      <Col xs={20} sm={20} lg={20} className={style.section2__whatToExpect}>
        <Row gutter={isMobileOrTablet && [0, 64]} justify="space-around" align="middle" style={{ height: "100%" }}>
          {renderWhatToExpect()}
        </Row>
      </Col>
      <Col xs={17} sm={17} lg={21} className={style.section2__HotelRooms}>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          {renderHotelRoomsSlider()}
        </Row>
      </Col>
    </Row>
  );
};

export default Section2;
