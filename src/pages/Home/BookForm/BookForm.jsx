import { faBed, faCalendarAlt, faHotel, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, DatePicker, Form, Input, InputNumber, Grid } from "antd";
import moment from "moment";

import style from "./BookForm.module.scss";

const { RangePicker } = DatePicker;
const { useBreakpoint } = Grid;

const BookForm = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const onFinish = () => {};

  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const PrefixCalendarIcon = () => {
    return (
      <div
        className="ant-input-group-addon"
        style={{ width: "2.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesomeIcon color="#ab966f" icon={faCalendarAlt} />
      </div>
    );
  };

  const renderHotelNameInput = () => {
    return (
      <Form.Item className={style.form__item} style={{ flex: !isMobileOrTablet && 1 }}>
        <Input bordered size="large" placeholder="Hotel" addonBefore={<FontAwesomeIcon icon={faHotel} />} />
      </Form.Item>
    );
  };

  const renderDateInput = () => {
    return (
      <Form.Item style={{ flex: !isMobileOrTablet && 1.2 }}>
        <Col span={24} style={{ display: "flex" }}>
          <PrefixCalendarIcon />
          <RangePicker
            className={style.form__rangePicker}
            placeholder={["Check In", "Check Out"]}
            suffixIcon={false}
            allowClear={false}
            disabledDate={disabledDate}
            size="large"
          />
        </Col>
      </Form.Item>
    );
  };

  const renderGuestInput = () => {
    return (
      <Form.Item className={style.form__item} style={{ flex: !isMobileOrTablet && 0.7 }}>
        <InputNumber
          size="large"
          placeholder="Guests"
          addonBefore={<FontAwesomeIcon icon={faUserFriends} />}
          min={1}
          max={12}
          className={style.form__item__guestInput}
        />
      </Form.Item>
    );
  };

  const renderRoomsInput = () => {
    return (
      <Form.Item className={style.form__item} style={{ flex: !isMobileOrTablet && 0.7 }}>
        <InputNumber
          addonBefore={<FontAwesomeIcon icon={faBed} color="#ab966f" />}
          size="large"
          placeholder="Rooms"
          min={1}
          max={10}
          className={style.form__item__roomsInput}
        />
      </Form.Item>
    );
  };

  const renderBookButton = () => {
    return (
      <Form.Item style={isMobileOrTablet && { width: "100%" }}>
        <Button block={isMobileOrTablet} className={style.form__item__bookingButton} size="large" type="primary">
          Book
        </Button>
      </Form.Item>
    );
  };

  return (
    <Form className={style.form} layout={isMobileOrTablet ? "vertical" : "inline"} onFinish={onFinish}>
      {renderHotelNameInput()}
      {renderDateInput()}
      {renderGuestInput()}
      {renderRoomsInput()}
      {renderBookButton()}
    </Form>
  );
};

export default BookForm;
