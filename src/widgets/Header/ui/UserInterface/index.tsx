import { useAppDispatch } from "app/helpers/hooks";
import { UserActions } from "features/Login2/model";
import CustomButton from "shared/ui/Button";

interface IUserInterfaceProps {
    userName: string,
    role: string,
}
  
export const UserInterface = (props: IUserInterfaceProps) => {
    const { userName, role } = props
    const dispatch = useAppDispatch();

    const onLogoutClickHandle = () => {
        dispatch(UserActions.clearUser());
    }

    return (
        <div className="flex justify-center items-center">
            <div className=" w-[40px] h-[40px] rounded-lg mr-[10px]">
                <img src={require('./UserIcon.png')} alt="User icon" />
            </div>
            <div className="flex flex-col font-light">
                <span>{userName}</span>
                <span className="text-xs">{role}</span>
            </div>
            <CustomButton buttonText="Logout" buttonProps={{ style: {marginLeft: 10 }, onClick: onLogoutClickHandle }} />
        </div>
    );
}