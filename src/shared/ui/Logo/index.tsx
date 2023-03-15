import { LogoImage } from "./LogoImage";
import { LogoStyle } from "./style";

export const Logo = () => {
  return ( 
    <div className={LogoStyle}>
      <LogoImage width={35} />
      <span className="ml-3">Cube</span>
    </div>
   );
}