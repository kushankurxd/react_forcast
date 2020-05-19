import svg1 from "../svg/01.svg";
import svg2 from "../svg/02.svg";
import svg3 from "../svg/03.svg";
import svg4 from "../svg/04.svg";
import svg9 from "../svg/09.svg";
import svg10 from "../svg/10.svg";
import svg11 from "../svg/11.svg";

const iconSelector = (iconString) => {
  const iconCode = iconString.substring(0, 2);
  let icon = null;
  switch (iconCode) {
    case "01":
      icon = svg1;
      break;
    case "02":
      icon = svg2;
      break;
    case "03":
      icon = svg3;
      break;
    case "04":
      icon = svg4;
      break;
    case "09":
      icon = svg9;
      break;
    case "10":
      icon = svg10;
      break;
    case "11":
      icon = svg11;
      break;
    default:
      icon = null;
  }
  return icon;
};

export default iconSelector;
