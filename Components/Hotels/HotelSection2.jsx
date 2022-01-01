import { Button, Checkbox, Input, Layout, Row, Slider, Typography, Select, Col, Skeleton } from "antd";
import { useState, useEffect } from "react";

import SideMenuOption from "./SideMenuOption";
import PropertyCard from "./PropertyCard";

import HotelImage1 from "../../public/hotelImg1.jpg";
import HotelImage2 from "../../public/hotelImg2.jpg";
import HotelImage3 from "../../public/hotelImg3.jpg";
import HotelImage4 from "../../public/hotelImg4.jpg";
import HotelImage5 from "../../public/hotelImg5.jpg";
import HotelImage6 from "../../public/hotelImg6.jpg";

import styles from "./hotels.module.scss";

const { Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const HotelSection2 = () => {
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [hotelsLoading, setHotelsLoading] = useState(true);

  const popularProperties = ["Five Stars", "WiFi", "BreakFast Included", "Air Conditioning"];
  const previewHotels = [
    { hotelImg: HotelImage1, name: "RiverSide Hotel" },
    { hotelImg: HotelImage2, name: "Royal Loch Motel" },
    { hotelImg: HotelImage3, name: "Grand Season Resort" },
    { hotelImg: HotelImage4, name: "Twin Luxury Resort" },
    { hotelImg: HotelImage5, name: "Golden Shrine Motel" },
    { hotelImg: HotelImage6, name: "Courtyard Hotel" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setHotelsLoading(false);
    }, 2000);
  }, []);

  const handlePriceRangeChange = (value) => {
    return setPriceRange(value);
  };

  const renderInputPropertyName = () => {
    return <Input size="large" placeholder="Property Name" />;
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
    <Checkbox.Group style={{ display: "flex", flexDirection: "column" }} options={popularProperties} />
  );

  const renderGuestRatingStars = () => {
    return (
      <Row justify="space-between" align="middle">
        <Button className={styles.ratingButton} shape="round" size="middle">
          1
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          2
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          3
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          4
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          5
        </Button>
      </Row>
    );
  };

  const renderHotelStarRatingButtons = () => {
    return (
      <Row justify="space-between" align="middle">
        <Button className={styles.ratingButton} shape="round" size="middle">
          1
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          2
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          3
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          4
        </Button>
        <Button className={styles.ratingButton} shape="round" size="middle">
          5
        </Button>
      </Row>
    );
  };

  const renderContentHeader = () => {
    return (
      <Row
        justify="space-between"
        align="top"
        style={{
          background: "transparent",
          padding: 0,
        }}
      >
        <Paragraph className={styles.hotelSection2HeaderDetails}>
          <Text strong>20</Text> out of <Text strong>300</Text> properties are available and match your filters.
          {"  "}
          <Text strong className={styles.hotelSection2ClearFilters}>
            Clear all Filters
          </Text>
        </Paragraph>
        <Col>
          <Text className={styles.hotelSection2SortLabel}>Sort by : </Text>
          <Select className={styles.hotelSection2SortSelect} defaultValue="Price (Low to High)">
            <Option value="top-rated">Top rated</Option>
            <Option value="distance">Distance from Airport</Option>
            <Option value="best-value">Best value</Option>
            <Option value="Price">Price (Low to High)</Option>
          </Select>
        </Col>
      </Row>
    );
  };

  const renderContent = () => {
    return (
      <Row gutter={[0, 16]} style={{ margin: "16px 0" }}>
        <Skeleton loading={hotelsLoading} active avatar />
        <Skeleton loading={hotelsLoading} active avatar />
        <Skeleton loading={hotelsLoading} active avatar />
        <Skeleton loading={hotelsLoading} active avatar />
        {!hotelsLoading && previewHotels.map((hotel) => <PropertyCard key={hotel.name} hotel={hotel} />)}
      </Row>
    );
  };

  return (
    <Row justify="center" align="middle" className={styles.hotelSection2}>
      <Layout>
        <Sider width={300} className={styles.hotelSection2SideMenu}>
          <SideMenuOption title="Name">{renderInputPropertyName()}</SideMenuOption>
          <SideMenuOption title="Price">{renderPriceSlider()}</SideMenuOption>
          <SideMenuOption title="Popular">{renderPopularFilter()}</SideMenuOption>
          <SideMenuOption title="Star Rating">{renderHotelStarRatingButtons()}</SideMenuOption>
          <SideMenuOption title="Guest Rating">{renderGuestRatingStars()}</SideMenuOption>
        </Sider>
        <Layout style={{ margin: "0 30px" }}>
          {renderContentHeader()}
          {renderContent()}
        </Layout>
      </Layout>
    </Row>
  );
};

export default HotelSection2;
