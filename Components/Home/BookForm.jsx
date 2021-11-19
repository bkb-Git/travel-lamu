import { faBed, faCalendarAlt, faHotel, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, DatePicker, Form, Input, InputNumber } from "antd";
import moment from "moment";

import style from "./Home.module.scss";

const { RangePicker } = DatePicker;

const BookForm = () => {
  const onFinish = () => {};

  const disabledDate = (current) => {
    // Can not select days before today and today
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

  return (
    <Form
      className={style.bookingForm}
      layout="inline"
      onFinish={onFinish}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Form.Item style={{ flex: 1 }}>
        <Input
          className={style.bookingFormItem}
          bordered
          size="large"
          placeholder="Hotel"
          addonBefore={<FontAwesomeIcon icon={faHotel} />}
        />
      </Form.Item>
      <Form.Item style={{ flex: 1.2 }}>
        <Col span={24} style={{ display: "flex" }}>
          <PrefixCalendarIcon />
          <RangePicker
            className={style.rangePicker}
            placeholder={["Check In", "Check Out"]}
            suffixIcon={false}
            allowClear={false}
            disabledDate={disabledDate}
            size="large"
          />
        </Col>
      </Form.Item>
      <Form.Item style={{ flex: 0.7 }}>
        <InputNumber
          className={style.bookingFormItem}
          size="large"
          placeholder="Guests"
          addonBefore={<FontAwesomeIcon icon={faUserFriends} color="#ab966f" />}
          min={1}
          max={12}
        />
      </Form.Item>
      <Form.Item style={{ flex: 0.7 }}>
        <InputNumber
          addonBefore={<FontAwesomeIcon icon={faBed} color="#ab966f" />}
          className={style.bookingFormItem}
          size="large"
          placeholder="Rooms"
          min={1}
          max={10}
        />
      </Form.Item>
      <Form.Item>
        <Button className={style.bookButton} size="large" type="primary">
          Book
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookForm;
