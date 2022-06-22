import { Button, Checkbox, Input, Layout, Row, Slider, Typography, Select, Col, Skeleton, Grid } from "antd";
import { useState, useEffect } from "react";

import SideMenuOption from "../SideMenuOption";
import PropertyCard from "../../../../Components/PropertyCard";
import PropertyCardMobile from "../../../../Components/PropertyCardMobile";
import DrawerMenu from "../../../../Components/DrawerMenu";

import HotelImage1 from "../../../../public/hotelImg1.jpg";
import HotelImage2 from "../../../../public/hotelImg2.jpg";
import HotelImage3 from "../../../../public/hotelImg3.jpg";
import HotelImage4 from "../../../../public/hotelImg4.jpg";
import HotelImage5 from "../../../../public/hotelImg5.jpg";
import HotelImage6 from "../../../../public/hotelImg6.jpg";

import style from "./Section2.module.scss";

const { Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { useBreakpoint } = Grid;

const PREVIEW__HOTELS = [
  {
    hotelImg: HotelImage1,
    name: "RiverSide Hotel",
    price: 54,
    amenities: ["Spa", "BreakFast Included", "Free-Parking"],
    distanceFromAirport: 12,
    roomsAvailable: 6,
  },
  {
    hotelImg: HotelImage2,
    name: "Royal Loch Motel",
    price: 28,
    amenities: ["Wifi", "Free-Parking"],
    distanceFromAirport: 8,
    roomsAvailable: 4,
  },
  {
    hotelImg: HotelImage3,
    name: "Grand Season Resort",
    price: 35,
    amenities: ["Spa", "Wifi"],
    distanceFromAirport: 22,
    roomsAvailable: 8,
  },
  {
    hotelImg: HotelImage4,
    name: "Twin Luxury Resort",
    price: 60,
    amenities: ["Wifi", "BreakFast Included", "Spa"],
    distanceFromAirport: 14,
    roomsAvailable: 10,
  },
  {
    hotelImg: HotelImage5,
    name: "Golden Shrine Motel",
    price: 40,
    amenities: ["Free-Parking", "BreakFast Included"],
    distanceFromAirport: 7,
    roomsAvailable: 3,
  },
  {
    hotelImg: HotelImage6,
    name: "Courtyard Hotel",
    price: 80,
    amenities: ["Wifi", "Free-Parking", "BreakFast Included"],
    distanceFromAirport: 12,
    roomsAvailable: 12,
  },
];

const POPULAR__PROPERTIES = ["Five Stars", "WiFi", "BreakFast Included", "Air Conditioning"];

const Section2 = (props) => {
  const { setMenuOpen, filterMenu } = props;

  const [priceRange, setPriceRange] = useState([20, 50]);
  const [hotelsLoading, setHotelsLoading] = useState(true);

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {
    setTimeout(() => {
      setHotelsLoading(false);
    }, 2000);
  }, []);

  const handlePriceRangeChange = (value) => setPriceRange(value);

  const renderInputPropertyName = () => <Input size="large" placeholder="Property Name" />;

  const propertyCardList = () => {
    if (!hotelsLoading) {
      return PREVIEW__HOTELS.map((hotel) => {
        if (isMobileOrTablet) return <PropertyCardMobile key={hotel.name} hotel={hotel} />;
        return <PropertyCard key={hotel.name} hotel={hotel} />;
      });
    }
    return null;
  };

  const renderPriceSlider = () => {
    return (
      <>
        <Title level={4} style={{ textAlign: "center", marginTop: ".5em" }}>
          ${priceRange[0]} - ${priceRange[1]}
        </Title>
        <Slider onChange={handlePriceRangeChange} range={{ draggableTrack: true }} defaultValue={[20, 50]} />
      </>
    );
  };

  const renderPopularFilter = () => (
    <Checkbox.Group style={{ display: "flex", flexDirection: "column" }} options={POPULAR__PROPERTIES} />
  );

  const renderGuestRatingStars = () => {
    return (
      <Row justify="space-between" align="middle">
        <Button className={style.ratingButton} shape="round" size="middle">
          1
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          2
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          3
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          4
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          5
        </Button>
      </Row>
    );
  };

  const renderHotelStarRatingButtons = () => {
    return (
      <Row justify="space-between" align="middle">
        <Button className={style.ratingButton} shape="round" size="middle">
          1
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          2
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          3
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          4
        </Button>
        <Button className={style.ratingButton} shape="round" size="middle">
          5
        </Button>
      </Row>
    );
  };

  const renderSider = () => {
    return (
      <Sider width={300} className={style.section__sideMenu}>
        <SideMenuOption title="Name">{renderInputPropertyName()}</SideMenuOption>
        <SideMenuOption title="Price">{renderPriceSlider()}</SideMenuOption>
        <SideMenuOption title="Popular">{renderPopularFilter()}</SideMenuOption>
        <SideMenuOption title="Star Rating">{renderHotelStarRatingButtons()}</SideMenuOption>
        <SideMenuOption title="Guest Rating">{renderGuestRatingStars()}</SideMenuOption>
      </Sider>
    );
  };

  const renderContentHeader = () => {
    return (
      <Row
        justify={isMobileOrTablet ? "center" : "space-between"}
        align={isMobileOrTablet ? "middle" : "top"}
        className={style.section__header}
      >
        <Col xs={22} sm={22} lg={24}>
          <Paragraph className={style.section__header__details}>
            <Text strong>6</Text> out of <Text strong>100</Text> properties are available and match your filters.
            <Text strong className={style.section__header__clearFilters}>
              Clear all Filters
            </Text>
          </Paragraph>
          <Col>
            <Text className={style.section__header__label}>Sort by : </Text>
            <Select className={style.section__header__select} defaultValue="Price (Low to High)">
              <Option value="top-rated">Top rated</Option>
              <Option value="distance">Distance from Airport</Option>
              <Option value="best-value">Best value</Option>
              <Option value="Price">Price (Low to High)</Option>
            </Select>
          </Col>
        </Col>
      </Row>
    );
  };

  const renderContent = () => {
    return (
      <Row justify={isMobileOrTablet && "center"} gutter={[0, 16]} className={style.section__propertyCardContainer}>
        <Skeleton loading={hotelsLoading} active avatar />
        <Skeleton loading={hotelsLoading} active avatar />
        <Skeleton loading={hotelsLoading} active avatar />
        <Skeleton loading={hotelsLoading} active avatar />
        {propertyCardList()}
      </Row>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.section}>
      <Layout>
        {!isMobileOrTablet && renderSider()}
        <Layout className={style.section__innerLayout}>
          {renderContentHeader()}
          {renderContent()}
        </Layout>
      </Layout>
      <DrawerMenu placement="left" openMenu={filterMenu} menuHandler={setMenuOpen}>
        {renderSider()}
      </DrawerMenu>
    </Row>
  );
};

export default Section2;
