import { Row, Col, Card, Typography, Form, DatePicker, InputNumber, Divider, Button, Grid } from "antd";
import Image from "next/image";
import { faCalendarAlt, faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LandscapePic from "../../../../public/LandscapePic.jpg";

import style from "./Section1.module.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const Section1 = (props) => {
  const { setMenuOpen } = props;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const CustomPrefixIcon = ({ iconColor, icon }) => {
    return (
      <div
        className="ant-input-group-addon"
        style={{
          width: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: `4px solid ${iconColor}`,
        }}
      >
        <FontAwesomeIcon color="#ab966f" icon={icon} />
      </div>
    );
  };

  const handleSubmit = () => {};

  const checkIn = () => {
    return (
      <Col span={24} style={{ display: "flex" }}>
        <CustomPrefixIcon icon={faCalendarAlt} iconColor="green" />
        <DatePicker style={{ flex: 1 }} size="large" placeholder="Check In" suffixIcon={null} />
      </Col>
    );
  };

  const checkOut = () => {
    return (
      <Col span={24} style={{ display: "flex" }}>
        <CustomPrefixIcon icon={faCalendarAlt} iconColor="red" />
        <DatePicker style={{ flex: 1 }} size="large" placeholder="Check Out" suffixIcon={null} />
      </Col>
    );
  };

  const guests = () => {
    return (
      <Col span={24} style={{ display: "flex" }}>
        <CustomPrefixIcon icon={faUserFriends} iconColor="gray" />
        <InputNumber style={{ flex: 1 }} size="large" placeholder="Guests" min={1} max={12} />
      </Col>
    );
  };

  const submitButton = () => {
    return (
      <Col span={16}>
        <Row justify="center" align="middle">
          <Button
            onClick={() => isMobileOrTablet && setMenuOpen(true)}
            size="large"
            type="primary"
            icon={<FontAwesomeIcon icon={faSearch} style={{ marginRight: ".5em" }} />}
          >
            Find
          </Button>
        </Row>
      </Col>
    );
  };

  const renderImage = () => <Image src={LandscapePic} layout="fill" className={style.banner__image} />;

  const renderTitle = () => {
    return (
      <>
        <Title level={isMobileOrTablet ? 4 : 1} className={style.banner__title}>
          Hotels and Places to Stay
        </Title>
        <Divider style={{ borderWidth: 2, borderColor: "#ab966f" }} />
      </>
    );
  };

  const renderForm = () => {
    return (
      <Form layout="inline" className={style.banner__card__form} onFinish={handleSubmit}>
        <Form.Item className={style.banner__card__form__item}>{checkIn()}</Form.Item>
        <Form.Item className={style.banner__card__form__item}>{checkOut()}</Form.Item>
        <Form.Item className={style.banner__card__form__item}>{guests()}</Form.Item>
        <Form.Item>{submitButton()}</Form.Item>
      </Form>
    );
  };

  return (
    <Row justify="center" align="middle" className={style.banner}>
      {renderImage()}
      <Col lg={24}>
        <Row justify="center" align="middle">
          <Card bordered className={style.banner__card}>
            {renderTitle()}
            {!isMobileOrTablet ? (
              renderForm()
            ) : (
              <Row justify="center" align="middle">
                {submitButton()}
              </Row>
            )}
          </Card>
        </Row>
      </Col>
    </Row>
  );
};

export default Section1;
