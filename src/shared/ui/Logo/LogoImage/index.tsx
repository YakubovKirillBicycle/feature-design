import { ImgHTMLAttributes } from "react";

export const LogoImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return ( <img src={require("./store.png")} alt="Pokemon logo" {...props} /> );
}