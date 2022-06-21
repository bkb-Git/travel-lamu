import { faCar, faSpa, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "antd";

import style from "./AmenityTag.module.scss";

const AmenityTag = (props) => {
  const { amenity } = props;

  const renderIcon = () => {
    let typeOfIcon;
    switch (amenity) {
      case "Wifi":
        typeOfIcon = faWifi;
        break;
      case "Free-Parking":
        typeOfIcon = faCar;
        break;
      case "BreakFast Included":
        typeOfIcon = faUtensils;
        break;
      case "Spa":
        typeOfIcon = faSpa;
        break;
      default:
        break;
    }

    return typeOfIcon;
  };

  return (
    <Tag
      icon={<FontAwesomeIcon icon={renderIcon()} style={{ marginRight: "0.5em" }} />}
      color="#ab966f"
      className={style.amenity}
    >
      {amenity}
    </Tag>
  );
};

export default AmenityTag;
