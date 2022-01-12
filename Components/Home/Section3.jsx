import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Card, Col, Divider, Row, Typography } from "antd";
import Image from "next/image";

import LamuOldTown1 from "../../public/LamuOldTownPic1.jpg";
import LamuOldTown2 from "../../public/LamuOldTownPic2.jpg";
import LamuOldTown3 from "../../public/LamuOldTownPic3.jpg";
import LamuOldTown4 from "../../public/LamuOldTownPic4.jpg";
import LamuOldTown5 from "../../public/LamuOldTownPic5.jpg";
import ShelaBeach1 from "../../public/ShelaBeach1.jpg";
import ShelaBeach2 from "../../public/ShelaBeach2.jpg";
import ShelaBeach3 from "../../public/ShelaBeach3.jpg";
import ShelaBeach4 from "../../public/ShelaBeach4.jpg";
import ShelaBeach5 from "../../public/ShelaBeach5.jpg";

import styles from "./Home.module.scss";

const { Title, Text } = Typography;

const Section3 = () => {
  const [slider1Nav, setSlider1Nav] = useState({ nav1: null, nav2: null });
  const [slider2Nav, setSlider2Nav] = useState({ nav1: null, nav2: null });
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const slider4 = useRef(null);

  useEffect(() => {
    setSlider1Nav({ nav1: slider1.current, nav2: slider2.current });
    setSlider2Nav({ nav1: slider3.current, nav2: slider4.current });
  }, []);

  return (
    <Row justify="center" align="middle" style={{ height: "210vh", background: "white" }}>
      <Col span={24} style={{ height: "50%" }}>
        <Row align="middle" style={{ height: "100%" }}>
          <Col span={12} className={styles.section3Details}>
            <Col>
              <Title className={styles.title2} style={{ textAlign: "left", marginLeft: "0.5em" }}>
                (UNESCO) World Heritage Site
              </Title>
              <Divider className={styles.divider} />
            </Col>
            <Card className={styles.section3Part1Card} bordered={false}>
              <Title className={styles.section3Part1CardTitle} level={2}>
                Lamu Old Town
              </Title>
              <Text type="secondary" strong>
                Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa, retaining its
                traditional functions. Built in coral stone and mangrove timber, the town is characterized by the
                simplicity of structural forms enriched by such features as inner courtyards, verandas, and elaborately
                carved wooden doors. Lamu has hosted major Muslim religious festivals since the 19th century, and has
                become a significant centre for the study of Islamic and Swahili cultures.
              </Text>
            </Card>
          </Col>
          <Col span={12} className={styles.section3Images}>
            <Slider
              arrows={false}
              asNavFor={slider1Nav.nav2}
              ref={slider1}
              className={styles.section3Slider1A}
              autoplay
              autoplaySpeed={3000}
            >
              <Image priority src={LamuOldTown1} />
              <Image src={LamuOldTown2} />
              <Image src={LamuOldTown3} />
              <Image src={LamuOldTown4} />
              <Image src={LamuOldTown5} />
            </Slider>

            <Card
              bodyStyle={{
                padding: 15,
                height: "100%",
              }}
              className={styles.section3Part2Card2}
            >
              <Slider
                infinite
                className={styles.section3Slider2}
                asNavFor={slider1Nav.nav1}
                ref={slider2}
                slidesToShow={3}
                swipeToSlide
                focusOnSelect
              >
                <Image priority src={LamuOldTown1} />
                <Image src={LamuOldTown2} />
                <Image src={LamuOldTown3} />
                <Image src={LamuOldTown4} />
                <Image src={LamuOldTown5} />
              </Slider>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ height: "50%" }}>
        <Row align="middle" style={{ height: "100%" }}>
          <Col span={12} className={styles.section3Images}>
            <Slider
              arrows={false}
              asNavFor={slider2Nav.nav2}
              ref={slider3}
              className={styles.section3Slider1B}
              autoplay
              autoplaySpeed={3000}
            >
              <Col style={{ position: "relative" }}>
                <Image layout="responsive" priority src={ShelaBeach1} />
              </Col>
              <Col style={{ position: "relative" }}>
                <Image layout="responsive" src={ShelaBeach2} />
              </Col>
              <Image layout="responsive" src={ShelaBeach3} />
              <Col style={{ position: "relative" }}>
                <Image layout="responsive" src={ShelaBeach4} />
              </Col>
              <Col style={{ position: "relative" }}>
                <Image layout="responsive" src={ShelaBeach5} />
              </Col>
            </Slider>

            <Card
              bodyStyle={{
                padding: 15,
                height: "100%",
              }}
              className={styles.section3Part2Card2}
            >
              <Slider
                infinite
                className={styles.section3Slider2}
                asNavFor={slider2Nav.nav1}
                ref={slider4}
                slidesToShow={3}
                swipeToSlide
                focusOnSelect
              >
                <Image src={ShelaBeach1} />
                <Image src={ShelaBeach2} />
                <Image src={ShelaBeach3} />
                <Image src={ShelaBeach4} />
                <Image src={ShelaBeach5} />
              </Slider>
            </Card>
          </Col>
          <Col span={12} className={styles.section3Details}>
            <Col>
              <Title className={styles.title2} style={{ textAlign: "left", marginLeft: "0.5em" }}>
                Beach-Side
              </Title>
              <Divider className={styles.divider} />
            </Col>

            <Card className={styles.section3Part1Card2} bordered={false}>
              <Title className={styles.section3Part1CardTitle} level={2}>
                Shela Beach
              </Title>
              <Text type="secondary" strong>
                Shela Beach is also known as Shella Beach and is on the island of Lamu in the north of Kenya. It is
                about two kilometres from Lamu town, the capital of Lamu. You can easily get to Shela Beach by walking
                along the water’s edge, or by using a boat hired from the locals as a water taxi. There are no proper
                roads or cars on Lamu and the only means of transport is by boat and donkey. Shela Beach is about 12
                kilometres in length and is a sandy dream beach with dunes in the background and where you will only
                find buildings at either end. The rest of the beach has been completely left to nature.
              </Text>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Section3;
