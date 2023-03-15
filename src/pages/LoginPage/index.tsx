import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UserModel } from "entities/User";
import { LoginModel } from "features/Login";
import { EMPTY_FORM } from "features/Login/model/helpers";
import { CustomButton, InputField , GlobalConstant, AppModel } from "shared";

import { schemloginFormSchema } from "./model/helpers";
import { modalContentStyle } from "./ui/style";

const LoginPage = () => {
    const user = UserModel.userSelector();
    const navigate = useNavigate();

    const { login, loadingState, error, clearLoginError } = LoginModel.useAuth();
    const { handleSubmit, control, getValues, formState, reset } = useForm({
        mode: 'onChange',
        defaultValues: EMPTY_FORM,
        resolver: yupResolver(schemloginFormSchema),
    });

    useEffect(() => {
        if (loadingState === AppModel.LoadingStatus.Done && !error && user.id) {
            reset(EMPTY_FORM);
            navigate(GlobalConstant.APP_NAVIGATOR.HOME) 
        }
    }, [loadingState])

    useEffect(() => {
        clearLoginError();
    }, [])
    
    const onCancelFormHandle = () => {
        reset(EMPTY_FORM);
        clearLoginError();
        navigate(GlobalConstant.APP_NAVIGATOR.HOME)
    }

    const onSubmitFormHandle = () => {
        clearLoginError();
        login(getValues().username, getValues().password);
    };

    const submitButtonText = loadingState === AppModel.LoadingStatus.Loading ? 'Loading' : 'Login';

    return (
        <div className="flex items-center justify-center h-[100%]">
            <div className={modalContentStyle}>
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
                    {error && 
                        <div className="w-[100%]">
                        {`Error: ${error}`}
                        </div>
                    }
                    <div className="flex justify-between space-x-2 mt-5 w-[100%]">
                        <CustomButton
                        buttonText={submitButtonText}
                        buttonProps={{ type: 'submit' }}
                        disabled={!formState.isValid || loadingState === AppModel.LoadingStatus.Loading}
                        />
                        <CustomButton
                        buttonText="Cancel"
                        buttonType="transparentDark"
                        buttonProps={{ onClick: onCancelFormHandle }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default LoginPage;
