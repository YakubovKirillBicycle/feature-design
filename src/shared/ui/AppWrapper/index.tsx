import { mainWrapStyle } from "./style";

interface Props {
    children: React.ReactNode
}

const AppWrapper = (props: Props) => {
    const { children } = props;

    return (
        <div className={mainWrapStyle}>
            {children}
        </div> );
}

export default AppWrapper;