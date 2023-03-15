import ModalContent from "./ModalContent";
import { modalBgStyle } from "./style";

interface Props {
    children: React.ReactNode
}

export const ModalWrap = (props: Props) => {
    const { children } = props;

    return (
        <div className={modalBgStyle}>
            <ModalContent>
                {children}
            </ModalContent>
        </div> );
}