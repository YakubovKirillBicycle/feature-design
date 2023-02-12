import { useState } from "react";

import LoginButton from "entities/LoginButton";
import CustomButton from "shared/Button";

const LoginInterface = () => {
  return (
    <div className="bg-gray-800/40 absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-100 w-[260px] h-[300px] rounded-md shadow-md shadow-slate-500 font-light text-slate-800 text-xl p-4">
        <div className="flex justify-center">
          <span>Login</span>
        </div>
        <p>Username</p>
        <input type='text' className="bborder-slate-200 border-solid border-2 rounded-sm focus:border-slate-300 focus:border-solid focus:border-2 p-1"  />
        <p className="mt-3">Password</p>
        <input type='password' className="border-slate-200 border-solid border-2 rounded-sm focus:border-slate-300 focus:border-solid focus:border-2 p-1" />
        <input type="checkbox" name="remember-flag" id="remember-flag" className="border-slate-200 border-solid border-2 rounded-sm mr-2 hover:cursor-pointer" />
        <label htmlFor="remember-flag">Remember me</label>
        <div className="space-x-2 mt-5">
          <CustomButton buttonText="Login" buttonType="normal" />
          <CustomButton buttonText="Cancel" buttonType="transparentDark" />
        </div>
      </div>
    </div>
  )
}

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }
  console.log(open)

  return (
    <div>
      <LoginButton onClick={toggleOpen} />
      <LoginInterface />
    </div>
    
  );
}
 
export default Login;