import { ImgHTMLAttributes } from "react";

const LogoImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return ( <img src={require("./store.png")} alt="Pokemon logo" {...props} /> );
}
 
export default LogoImage;