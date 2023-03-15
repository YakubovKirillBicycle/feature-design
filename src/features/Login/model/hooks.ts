import { UserModel } from "entities/User";
import { AppModel } from "shared";

interface IUseAuth {
    login: (userName: string, password: string) => void,
    loadingState: AppModel.LoadingStatus,
    error: null | string,
    clearLoginError: VoidFunction;
}

export const useAuth = (): IUseAuth => {
    const dispatch = AppModel.useAppDispatch();
    const status = UserModel.userStatusSelector();

    const login = (userName: string, password: string) => {
        dispatch(UserModel.getUserAction({
            username: userName,
            password: password,
        }));
    }

    const clearLoginError = () => {
        dispatch(UserModel.actions.clearUserError());
    }

    return {
        login,
        clearLoginError,
        loadingState: status.state,
        error: status.error,
    }
}