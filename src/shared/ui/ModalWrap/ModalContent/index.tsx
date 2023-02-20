import { ReactNode } from "react";

import { modalContentStyle } from "./style";

const ModalContent = ({ children }: { children: ReactNode }) => {
    return ( 
        <div className={modalContentStyle}>
            {children}
        </div>
     );
}
 
export default ModalContent;