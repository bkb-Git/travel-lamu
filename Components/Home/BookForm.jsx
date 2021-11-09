import { faBed, faCalendarAlt, faHotel, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input } from "antd";

import style from "./Home.module.scss";

const BookForm = () => {
  const onFinish = () => {};
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
          prefix={<FontAwesomeIcon icon={faHotel} />}
        />
      </Form.Item>
      <Form.Item style={{ flex: 1 }}>
        <Input
          className={style.bookingFormItem}
          size="large"
          placeholder="Check In/Out"
          prefix={<FontAwesomeIcon icon={faCalendarAlt} />}
        />
      </Form.Item>
      <Form.Item style={{ flex: 0.7 }}>
        <Input
          className={style.bookingFormItem}
          size="large"
          placeholder="No. of Persons"
          prefix={<FontAwesomeIcon icon={faUserFriends} />}
        />
      </Form.Item>
      <Form.Item style={{ flex: 0.7 }}>
        <Input
          className={style.bookingFormItem}
          size="large"
          placeholder="Rooms"
          prefix={<FontAwesomeIcon icon={faBed} />}
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
