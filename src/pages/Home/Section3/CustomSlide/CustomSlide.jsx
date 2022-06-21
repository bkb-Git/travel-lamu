import { Col } from "antd";
import Image from "next/image";

import style from "./CustomSlide.module.scss";

const CustomSlide = (props) => {
  const { image, ...args } = props;
  return (
    <Col {...args} className={style.customSlide}>
      <Image src={image} />
    </Col>
  );
};

export default CustomSlide;
