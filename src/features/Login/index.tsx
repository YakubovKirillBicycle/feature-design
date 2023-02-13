import { memo, useState } from "react";

import LoginButton from "entities/LoginButton";

import LoginInterface from "./LoginInterface";

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <LoginButton onClick={toggleOpen} />
      {open && <LoginInterface onToggle={toggleOpen} />}
    </div>
    
  );
}
 
export default memo(Login);