interface IUserInterfaceProps {
    userName: string,
    role: string,
}
  
export const UserInterface = (props: IUserInterfaceProps) => {
    const { userName, role } = props
    return (
        <div className="flex justify-center items-center">
            <div className=" w-[40px] h-[40px] rounded-lg mr-[10px]">
                <img src={require('./UserIcon.png')} alt="User icon" />
            </div>
            <div className="flex flex-col font-light">
            <span>{userName}</span>
            <span className="text-xs">{role}</span>
            </div>
        </div>
    );
}