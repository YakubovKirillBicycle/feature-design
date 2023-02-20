import { memo } from "react";

import { WidthWrapContainer } from "shared/ui/WidthWrapContainer";

import { contentWrapStyle } from "./ui/style";

const contentStyle = [
  'px-4',
  'py-4',
].join(' ');

const Content = () => {
  return ( 
    <div className={contentWrapStyle}>
      <WidthWrapContainer>
        <div className={contentStyle}>
          <span>Hello</span>
        </div>
        </WidthWrapContainer>
    </div>
   );
}
 
export default memo(Content);