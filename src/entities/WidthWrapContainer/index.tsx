import { ReactNode, memo } from "react";

import { WRAPPER_CONTAINER } from "./style";

interface Props { children: ReactNode }

// eslint-disable-next-line react/prop-types
const WidthWrapContainer = ({ children }: Props) => {
  return ( 
    <div className={WRAPPER_CONTAINER}>{children}</div>
   );
}

export default memo(WidthWrapContainer);