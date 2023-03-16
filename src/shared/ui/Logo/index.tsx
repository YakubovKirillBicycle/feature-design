import { Link } from "react-router-dom";

import { APP_NAVIGATOR } from "shared/model/constants";

import { LogoImage } from "./LogoImage";
import { LogoStyle } from "./style";

export const Logo = () => {
  return (
    <Link to={APP_NAVIGATOR.HOME}>
      <div className={LogoStyle}>
        <LogoImage width={35} />
        <span className="ml-3">Cube</span>
      </div>
    </Link>
   );
}