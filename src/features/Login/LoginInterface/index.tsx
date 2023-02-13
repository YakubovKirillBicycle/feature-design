import { memo } from "react";

import ModalContent from "entities/ModalContent";
import ModalWrap from "entities/ModalWrap";
import CustomButton from "shared/ui/Button";
import InputField from "shared/ui/Input";

interface LoginInterfaceProps {
    onToggle?: VoidFunction,
}
  
const LoginInterface = (props: LoginInterfaceProps) => {
    const { onToggle } = props;
    return (
      <ModalWrap>
        <ModalContent>
          <div className="flex justify-center">
            <span>Login</span>
          </div>
          <p>Username</p>
          <InputField type="text" />
          <p className="mt-3">Password</p>
          <InputField type="password" />
          <InputField type="checkbox" name="remember-flag" id="remember-flag" className="w-[20px] mr-2" />
          <label htmlFor="remember-flag">Remember me</label>
          <div className="flex space-x-2 mt-5">
            <CustomButton buttonText="Login" buttonType="normal" buttonProps={{ onClick: onToggle }} />
            <CustomButton buttonText="Cancel" buttonType="transparentDark" buttonProps={{ onClick: onToggle }} />
          </div>
        </ModalContent>
      </ModalWrap>
    )
}

export default memo(LoginInterface);