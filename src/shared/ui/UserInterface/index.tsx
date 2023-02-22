import CustomButton from "shared/ui/Button";

interface IUserInterfaceProps {
    userName: string,
    role: string,
    onLogout: VoidFunction,
}
  
export const UserInterface = (props: IUserInterfaceProps) => {
    const { userName, role, onLogout } = props

    const onLogoutClickHandle = () => {
        onLogout()
    }

    return (
        <div className="flex justify-center items-center">
            <div className=" w-[35px] h-[35px] rounded-lg mr-[10px]">
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