import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { UserModel } from "entities/User";
import { LoadingStatus, useAppDispatch } from "shared/model";
import CustomButton from "shared/ui/Button";
import InputField from "shared/ui/Input";
import ModalWrap from "shared/ui/ModalWrap";

import { EMPTY_FORM, schemloginFormSchema } from "../model/helpers";

interface LoginFormProps {
  toggleOpen: VoidFunction,
}

const LoginForm = (props: LoginFormProps) => {
  const { toggleOpen } = props;
  const status = UserModel.userStatusSelector();
  const { handleSubmit, control, getValues, formState, reset } = useForm({
    mode: 'onChange',
    defaultValues: EMPTY_FORM,
    resolver: yupResolver(schemloginFormSchema),
  });
  const dispatch = useAppDispatch();

  const onSubmitFormHandle = () => {
    dispatch(UserModel.getUserAction({
      username: getValues().username,
      password: getValues().password,
    }));
    reset(EMPTY_FORM);
  };

  const onCancelFormHandle = () => {
    reset(EMPTY_FORM);
    toggleOpen()
  }

  const submitButtonText = status === LoadingStatus.Loading ? 'Loading' : 'Login';

  return (
      <ModalWrap>
        <form onSubmit={handleSubmit(onSubmitFormHandle)} className="w-[250px]">
          <div className="flex justify-center">
            <span>Login</span>
          </div>
          <div className="w-[100%]">
            <p>Username</p>
            <Controller
              render={({ field }) => <InputField type="text" {...field} />}
              name="username"
              control={control}
              defaultValue=''
            />
          </div>
          <div className="w-[100%]">
            <p className="mt-3">Password</p>
            <Controller
              render={({ field }) => <InputField type="password" {...field} />}
              name="password"
              control={control}
              defaultValue=''
            />
          </div>
          <div className="w-[100%]">
            <Controller
              render={({ field }) => <InputField type="checkbox" id="rememberFlag" className="w-[20px] mr-2" {...field} />}
              name="rememberFlag"
              control={control}
              defaultValue={'false'}
            />
            <label htmlFor="rememberFlag">Remember me</label>
          </div>
          <div className="flex justify-between space-x-2 mt-5 w-[100%]">
            <CustomButton
              buttonText={submitButtonText}
              buttonProps={{ type: 'submit' }}
              disabled={!formState.isValid || status === LoadingStatus.Loading}
            />
            <CustomButton
              buttonText="Cancel"
              buttonType="transparentDark"
              buttonProps={{ onClick: onCancelFormHandle }}
            />
          </div>
        </form>
      </ModalWrap>
  )
}

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <CustomButton buttonText="Login" buttonProps={{ onClick: toggleOpen }} />
      {open && 
        <LoginForm toggleOpen={toggleOpen} />
      }
    </div>
  );
}

export default Login