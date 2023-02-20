import { ReactNode } from "react";

import { WRAPPER_CONTAINER } from "./style";

export const WidthWrapContainer = ({ children }: { children: ReactNode }) => {
  return ( 
    <div className={WRAPPER_CONTAINER}>{children}</div>
   );
}