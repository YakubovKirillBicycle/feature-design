import LogoImage from "shared/ui/LogoImage";

import { LogoStyle } from "./style";

const Logo = () => {
  return ( 
    <div className={LogoStyle}>
      <LogoImage width={35} />
      <span className="ml-3">Hi Poke !</span>
    </div>
   );
}

export default Logo;