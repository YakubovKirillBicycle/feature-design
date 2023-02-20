import { ImgHTMLAttributes } from "react";

const LogoImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return ( <img src={require("./poke.png")} alt="Pokemon logo" {...props} /> );
}
 
export default LogoImage;