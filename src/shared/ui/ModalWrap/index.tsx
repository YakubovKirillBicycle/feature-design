import { ReactNode } from "react";

import ModalContent from "./ModalContent";
import { modalBgStyle } from "./style";

interface Props { children: ReactNode }

const ModalWrap = ({ children }: Props) => {
    return (
        <div className={modalBgStyle}>
            <ModalContent>
                {children}
            </ModalContent>
        </div> );
}
 
export default ModalWrap;