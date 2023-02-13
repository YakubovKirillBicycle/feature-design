import { ReactNode } from "react";

import { modalBgStyle } from "./ui/style";

interface Props { children: ReactNode }

const ModalWrap = ({ children }: Props) => {
    return (
        <div className={modalBgStyle}>
            {children}
        </div> );
}
 
export default ModalWrap;