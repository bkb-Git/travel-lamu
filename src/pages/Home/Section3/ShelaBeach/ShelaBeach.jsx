import { Card, Col, Divider, Row, Typography, Grid } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fade } from "react-reveal";

import CarouselMod from "../../../../../Components/CarouselMod/CarouselMod";

import ShelaBeach1 from "../../../../../public/ShelaBeach1.jpg";
import ShelaBeach2 from "../../../../../public/ShelaBeach2.jpg";
import ShelaBeach3 from "../../../../../public/ShelaBeach3.jpg";
import ShelaBeach4 from "../../../../../public/ShelaBeach4.jpg";
import ShelaBeach5 from "../../../../../public/ShelaBeach5.jpg";
import CustomSlide from "../CustomSlide/CustomSlide";

import style from "./ShelaBeach.module.scss";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const ShelaBeach = () => {
  const [sliderNav, setSliderNav] = useState({ primary: null, secondary: null });
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [sliderNav]);

  const details = () => {
    return (
      <Col xs={22} sm={22} lg={24}>
        <Card
          className={style.shelaBeach__details__card}
          bodyStyle={{ padding: isMobileOrTablet && 0 }}
          bordered={false}
        >
          <Title className={style.shelaBeach__details__card__title} level={2}>
            Shela Beach
          </Title>
          <Text type="secondary" strong>
            Shela Beach is also known as Shella Beach and is on the island of Lamu in the north of Kenya. It is about
            two kilometres from Lamu town, the capital of Lamu. You can easily get to Shela Beach by walking along the
            water’s edge, or by using a boat hired from the locals as a water taxi. There are no proper roads or cars on
            Lamu and the only means of transport is by boat and donkey. Shela Beach is about 12 kilometres in length and
            is a sandy dream beach with dunes in the background and where you will only find buildings at either end.
            The rest of the beach has been completely left to nature.
          </Text>
        </Card>
      </Col>
    );
  };

  const title = () => {
    return (
      <Col xs={22} sm={22} lg={24}>
        <Title className={style.shelaBeach__details__title}>Beach-Side</Title>
        <Col className={style.shelaBeach__details__underline}>
          <Divider className={style.shelaBeach__details__underline__divider} />
        </Col>
      </Col>
    );
  };

  const primarySlider = () => {
    return (
      <CarouselMod
        arrows={false}
        dots={false}
        setRefSlide={setSliderNav}
        slideState={sliderNav}
        primary
        navFor={sliderNav.secondary}
        autoplay
      >
        <Image objectFit priority src={ShelaBeach1} />
        <Image objectFit src={ShelaBeach2} />
        <Image objectFit src={ShelaBeach3} />
        <Image objectFit src={ShelaBeach4} />
        <Image objectFit src={ShelaBeach5} />
      </CarouselMod>
    );
  };

  const secondarySlider = () => {
    return (
      <Card
        bodyStyle={{
          padding: 15,
          height: "100%",
        }}
        className={style.shelaBeach__images__cardSlider}
      >
        <CarouselMod
          infinite
          dots={false}
          setRefSlide={setSliderNav}
          refToHandle="secondary"
          navFor={sliderNav.primary}
          slidesToShow={3}
          swipeToSlide
          focusOnSelect
        >
          <CustomSlide image={ShelaBeach1} />
          <CustomSlide image={ShelaBeach2} />
          <CustomSlide image={ShelaBeach3} />
          <CustomSlide image={ShelaBeach4} />
          <CustomSlide image={ShelaBeach5} />
        </CarouselMod>
      </Card>
    );
  };

  const renderDetails = () => {
    return (
      <Row gutter={isMobileOrTablet ? [0, 32] : [0, 64]} justify="center" align="middle">
        {title()}
        {isMobileOrTablet && <Col span={22}>{primarySlider()}</Col>}
        {details()}
      </Row>
    );
  };

  const renderSliders = () => {
    return (
      <Row gutter={[0, 32]} justify="center" align="middle">
        <Col span={22}>{primarySlider()}</Col>
        <Col span={14}>{secondarySlider()}</Col>
      </Row>
    );
  };

  const renderShelaBeachImages = () => {
    if (isMobileOrTablet) return null;
    return (
      <Col lg={12} className={style.shelaBeach__images}>
        <Fade left duration={1500}>
          {renderSliders()}
        </Fade>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.shelaBeach}>
      {!isMobileOrTablet && renderShelaBeachImages()}
      <Col xs={22} sm={22} lg={12} className={style.shelaBeach__details}>
        <Fade right duration={1500}>
          {renderDetails()}
        </Fade>
      </Col>
      {isMobileOrTablet && renderShelaBeachImages()}
    </Row>
  );
};

export default ShelaBeach;
