import { useNavigate } from "react-router";

import { UserType } from "entities/User";
import { CustomButton, GlobalConstant } from "shared";

interface IUserInterfaceProps {
    userName: string,
    isAdmin: boolean,
    role: UserType.Role,
    onLogout: VoidFunction,
}
  
export const UserInterface = (props: IUserInterfaceProps) => {
    const { userName, role, onLogout, isAdmin } = props;
    const navigate = useNavigate();

    const onLogoutClickHandle = () => {
        onLogout()
    }

    const onPanelClick = () => {
        navigate(GlobalConstant.APP_NAVIGATOR.ADMIN.HOME);
    }

    return (
        <div className="flex justify-center items-center">
            <div className=" w-[35px] h-[35px] rounded-lg mr-[10px]">
                <img src={require('./UserIcon.png')} alt="User" loading="lazy" />
            </div>
            <div className="flex flex-col font-light">
                <span>{userName}</span>
                <span className="text-xs">{UserType.Role[role]}</span>
            </div>
            {isAdmin && <CustomButton buttonText="Panel" buttonProps={{ style: {marginLeft: 10 }, onClick: onPanelClick }} />}
            <CustomButton buttonText="Logout" buttonProps={{ style: {marginLeft: 10 }, onClick: onLogoutClickHandle }} />
        </div>
    );
}