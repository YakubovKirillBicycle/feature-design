import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import CustomButton from "shared/ui/Button";
import InputField from "shared/ui/Input";
import ModalWrap from "shared/ui/ModalWrap";

interface LoginInterfaceProps {
    onToggle?: VoidFunction,
}

const schema = yup.object().shape({
  username: yup.string().min(4).max(20).required(),
  password: yup.string().min(4).max(10).required(),
  rememberFlag: yup.boolean(),
});

export const LoginInterface = (props: LoginInterfaceProps) => {
    const { onToggle } = props;
    const { handleSubmit, control, getValues, formState } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema),
    });
    console.log('ddd');
    const onSubmit = () => { console.log(getValues()) };
    return (
      <ModalWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <CustomButton buttonText="Cancel" buttonType="transparentDark" buttonProps={{ onClick: onToggle }} />
          </div>
        </form>
      </ModalWrap>
    )
}
