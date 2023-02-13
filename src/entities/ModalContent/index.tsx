import { ReactNode } from "react";

import { modalContentStyle } from "./style";

interface Props { children: ReactNode }

const ModalContent = ({ children }: Props) => {
    return ( 
        <div className={modalContentStyle}>
            {children}
        </div>
     );
}
 
export default ModalContent;