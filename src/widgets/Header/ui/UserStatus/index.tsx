import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";


// import { useAppDispatch } from "app/helpers/hooks";
// import { fetchUser } from "entities/User/api";
// import { User } from "entities/User/model";
import { User } from "entities/User/model/types";
import Register from "features/Register";
import CustomButton from "shared/ui/Button";
import InputField from "shared/ui/Input";
import ModalWrap from "shared/ui/ModalWrap";
import { UserInterface } from "shared/ui/UserInterface";

import { schemloginFormSchema } from "./helpers";


interface IUserStatusProps {
  user: User | undefined,
  onLogOut: VoidFunction,
  onSubmit: (userName: string, password: string) => void,
}

export const UserStatus = (props: IUserStatusProps) => {
  const { user, onLogOut: onlogout, onSubmit } = props;
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, getValues, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemloginFormSchema),
  });

  const onSubmitHandle = () => {
    onSubmit(getValues().username, getValues().password);
    // const user = fetchUser(getValues().username, getValues().password)
    // dispatch(UserActions.setUser(user))
    // onToggle();
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }

  if (user && user.nickname?.length) return (
    <UserInterface userName={user.nickname} role={user.role} onLogout={onlogout} />
  )

  return (
    <div>
      <div className="flex space-x-2">
        <>
          <CustomButton buttonText="Login" buttonProps={{ onClick: toggleOpen }} />
          {open && 
            <ModalWrap>
              <form onSubmit={handleSubmit(onSubmitHandle)}>
                <div className="flex justify-center">
                  <span>Login</span>
                </div>
                <p>Username</p>
                <Controller
                  render={({ field }) => <InputField type="text" {...field} />}
                  name="username"
                  control={control}
                  defaultValue=''
                />
                <p className="mt-3">Password</p>
                <Controller
                  render={({ field }) => <InputField type="password" {...field} />}
                  name="password"
                  control={control}
                  defaultValue=''
                />
                <Controller
                  render={({ field }) => <InputField type="checkbox" id="rememberFlag" className="w-[20px] mr-2" {...field} />}
                  name="rememberFlag"
                  control={control}
                  defaultValue={false}
                />
                <label htmlFor="rememberFlag">Remember me</label>
                <div className="flex space-x-2 mt-5">
                  <CustomButton
                    buttonText="Login"
                    buttonProps={{ type: 'submit' }}
                    disabled={!formState.isValid}
                  />
                  <CustomButton
                    buttonText="Cancel"
                    buttonType="transparentDark"
                    buttonProps={{ onClick: toggleOpen }}
                  />
                </div>
              </form>
            </ModalWrap>
          }
        </>
        <Register />
      </div>
    </div>
    
  );
}
 