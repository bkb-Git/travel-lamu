import { useEffect, useState } from "react";
import { Card, Col, Divider, Row, Typography, Grid } from "antd";
import { Fade } from "react-reveal";
// import Slider from "react-slick";
import Image from "next/image";

import CarouselMod from "../../../../../Components/CarouselMod/CarouselMod";

import LamuOldTown1 from "../../../../../public/LamuOldTownPic1.jpg";
import LamuOldTown2 from "../../../../../public/LamuOldTownPic2.jpg";
import LamuOldTown3 from "../../../../../public/LamuOldTownPic3.jpg";
import LamuOldTown4 from "../../../../../public/LamuOldTownPic4.jpg";
import LamuOldTown5 from "../../../../../public/LamuOldTownPic5.jpg";

import style from "./LamuTown.module.scss";
import CustomSlide from "../CustomSlide/CustomSlide";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const LamuTown = () => {
  const [sliderNav, setSliderNav] = useState({ primary: null, secondary: null });
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [sliderNav]);

  const details = () => {
    return (
      <Col xs={22} sm={22} lg={24}>
        <Card className={style.lamuTown__details__card} bodyStyle={{ padding: isMobileOrTablet && 0 }} bordered={false}>
          <Title className={style.lamuTown__details__card__title} level={2}>
            Lamu Old Town
          </Title>
          <Text type="secondary" strong>
            Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa, retaining its traditional
            functions. Built in coral stone and mangrove timber, the town is characterized by the simplicity of
            structural forms enriched by such features as inner courtyards, verandas, and elaborately carved wooden
            doors. Lamu has hosted major Muslim religious festivals since the 19th century, and has become a significant
            centre for the study of Islamic and Swahili cultures.
          </Text>
        </Card>
      </Col>
    );
  };

  const title = () => {
    return (
      <Col xs={22} sm={22} lg={24}>
        <Title className={style.lamuTown__details__title}>(UNESCO) World Heritage Site</Title>
        <Col className={style.lamuTown__details__underline}>
          <Divider className={style.lamuTown__details__underline__divider} />
        </Col>
      </Col>
    );
  };

  const primarySlider = () => {
    return (
      <CarouselMod
        dots={false}
        arrows={false}
        swipeToSlide
        infinite
        setRefSlide={setSliderNav}
        slideState={sliderNav}
        primary
        navFor={sliderNav.secondary}
        additionalStyling={{ height: isMobileOrTablet && "30vh" }}
        autoplay
      >
        <Image priority src={LamuOldTown1} objectFit />
        <Image src={LamuOldTown2} objectFit />
        <Image src={LamuOldTown3} objectFit />
        <Image src={LamuOldTown4} objectFit />
        <Image src={LamuOldTown5} objectFit />
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
        className={style.lamuTown__images__cardSlider}
      >
        <CarouselMod
          infinite
          dotsClassName={style.lamuTown__images__cardSlider__dots}
          dots={false}
          slidesToShow={3}
          swipeToSlide
          focusOnSelect
          setRefSlide={setSliderNav}
          refToHandle="secondary"
          navFor={sliderNav.primary}
        >
          <CustomSlide objectFit priority image={LamuOldTown1} />
          <CustomSlide objectFit image={LamuOldTown2} />
          <CustomSlide objectFit image={LamuOldTown3} />
          <CustomSlide objectFit image={LamuOldTown4} />
          <CustomSlide objectFit image={LamuOldTown5} />
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

  const renderLamuTownImages = () => {
    if (isMobileOrTablet) return null;
    return (
      <Col lg={12} className={style.lamuTown__images}>
        <Fade right duration={1500}>
          {renderSliders()}
        </Fade>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.lamuTown}>
      <Col xs={22} sm={22} lg={12} className={style.lamuTown__details}>
        <Fade left duration={1500}>
          {renderDetails()}
        </Fade>
      </Col>
      {renderLamuTownImages()}
    </Row>
  );
};

export default LamuTown;
