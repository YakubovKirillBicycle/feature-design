import { memo } from "react";

import { mainWrapStyle } from "./ui/style";

const WRAPPER_CONTAINER = 'min-w-[270px] max-w-[1200px] w-[85%] max-sm:w-[100%]';
const headerStyle = [
  'bg-slate-500',
  'px-3',
  'py-3',
  'text-slate-100',
  'flex',
  'justify-center',
].join(' ');

const contentWrapStyle = [
  'min-h-full',
  'justify-center',
  'flex',
].join(' ');

const contentStyle = [
  'px-4',
  'py-4',
  WRAPPER_CONTAINER,
].join(' ');

const HomePage = () => {
  return (
    <div className={mainWrapStyle}>
      <header className={headerStyle}>
        <div className={`${WRAPPER_CONTAINER}`}>
          <span>Header</span>
        </div>
      </header>
      <div className={contentWrapStyle}>
        <div className={contentStyle}>
          <span>Hello</span>
        </div>
      </div>
      <footer className={headerStyle}>
        <div className={WRAPPER_CONTAINER}>
          <span>Footer</span>
        </div>
      </footer>
    </div>
  );
}
 
export default memo(HomePage);