import LogoImage from "shared/LogoImage";

import { LogoStyle } from "./ui/style";

const Logo = () => {
  return ( 
    <div className={LogoStyle}>
      <LogoImage width={35} />
      <span className="ml-3">Hi Poke !</span>
    </div>
   );
}

export default Logo;