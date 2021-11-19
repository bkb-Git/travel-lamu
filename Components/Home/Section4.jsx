import { Row, Col } from "antd";
import Slider from "react-slick";
import Image from "next/image";

import TestimonialCard from "../TestimonialCard";
import longBeach from "../../public/long-beach.jpg";
// import TestimonialBg from "../../public/testimonialBg";

import styles from "./Home.module.scss";

const messages = {
  jenni:
    "I have tried many other agencies, but the best service I have received has been with Nubia. They go out of their way to make sure that you're getting the best service and they are always available via email or phone. ",
  jia: "I booked my hotel through Nubia and the experience was great. It was actually one of the cheaper apps I found, but it had better reviews than any of the others I looked at. Plus, it didn't make me download an app to book like some others. All in all, it was a great experience!",
  jeane:
    "I can't say enough about how much I loved my vacation to Lamu. The atmosphere was welcoming, the culture was interesting, and the cuisine was delicious. I had never been to this region before and I am so glad that I went on this trip which is all thanks to Nubia Agency. It was an unforgettable experience that I will treasure for years to come!",
  jordan:
    "Booking a Hotel with Nubia Agency was easy and quick, they have the best service out there to plan a trip to Lamu. I highly recommend it.",
  jabala:
    "Just got back from a wonderful trip to Lamu and it was a great experience overall. The travel agency was easy to work with from the beginning. We received multiple itineraries from multiple groups, but the one from this company was the most flexible. I most definitely recommend this agency.",
};

const Section4 = () => {
  return (
    <Row justify="center" align="middle" className={styles.section4}>
      <Col span={24} className={styles.section4Testimonial}>
        {/* <TestimonialBg className={styles.testimonialSvg} /> */}
        <Image layout="fill" src={longBeach} className={styles.testimonalSvg} />
        <Slider
          infinite
          arrows={false}
          slidesToShow={3}
          slidesToScroll={1}
          className={styles.section4TestimonialSlider}
          autoplay
          autoplaySpeed={2000}
          pauseOnHover
        >
          <TestimonialCard name="Jenni" rating={2} quoteType="right" imgPlaceholder="jenni" message={messages.jenni} />
          <TestimonialCard name="Jia" rating={4} quoteType="left" imgPlaceholder="jia" message={messages.jia} />
          <TestimonialCard
            name="Jeane"
            rating={3.5}
            quoteType="right"
            imgPlaceholder="jeane"
            message={messages.jeane}
          />
          <TestimonialCard
            name="Jordan"
            rating={5}
            quoteType="left"
            imgPlaceholder="jordan"
            message={messages.jordan}
          />
          <TestimonialCard
            name="Jabala"
            rating={2.5}
            quoteType="right"
            imgPlaceholder="jabala"
            message={messages.jabala}
          />
        </Slider>
      </Col>
    </Row>
  );
};

export default Section4;
