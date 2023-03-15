import { UserModel } from "entities/User";
import { useAppDispatch } from "shared/model";

interface IUseAuth {
    login: (userName: string, password: string) => void,
}

export const useAuth = (): IUseAuth => {
    const dispatch = useAppDispatch();

    const login = (userName: string, password: string) => {
        dispatch(UserModel.getUserAction({
            username: userName,
            password: password,
          }));
    }

    return {
        login,
    }
}