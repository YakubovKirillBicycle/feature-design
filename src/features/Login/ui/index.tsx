import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import CustomButton from "shared/ui/Button";
import InputField from "shared/ui/Input";
import ModalWrap from "shared/ui/ModalWrap";

import { EMPTY_FORM, schemloginFormSchema } from "../model/helpers";

interface ILoginProps {
  onSubmit: (userName: string, password: string) => void,
}

const Login = (props: ILoginProps) => {
  const { onSubmit } = props;
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, getValues, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues: EMPTY_FORM,
    resolver: yupResolver(schemloginFormSchema),
  });

  const toggleOpen = () => {
    reset(EMPTY_FORM);
    setOpen((prev) => !prev);
  }

  const onSubmitHandle = () => {
    onSubmit(getValues().username, getValues().password);
    reset(EMPTY_FORM);
    setOpen((prev) => !prev);
  };

  return (
    <div>
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
            defaultValue={'false'}
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
    </div>
  );
}

export default Login