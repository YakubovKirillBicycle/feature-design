import { Link } from "react-router-dom";

import { GlobalConstant, Loader } from "shared";

const UserControlItemStyle = [
    "bg-slate-100",
    "w-[300px] min-h-[150px] h-max",
    "rounded-[10px]",
    "p-4",
    "shadow-2xl",
    "mb-[20px]",
    "font-normal",
    "text-slate-700",
    "text-lg",
    "hover:cursor-pointer",
    "hover:bg-slate-200",
    "hover:shadow-xl",
    'transition duration-400 ease-in-out',
].join(' ')

interface IUserControlItem {
    count?: number;
    header?: string,
    activeCount?: number;
    isLoading?: boolean;
}

export const UserControlItem = (props: IUserControlItem) => {
    const {
        count: usersCount=0,
        activeCount=0,
        isLoading=false,
        header='Item'
    } = props;
    if (isLoading) return (
        <div className={UserControlItemStyle}>
            <div className="flex items-center justify-center">
                <span>{header}</span>
            </div>
            <div className="flex items-center justify-center">
                <Loader />
            </div> 
        </div>
    );
    return (
        <Link to={GlobalConstant.APP_NAVIGATOR.ADMIN.USERS}>
            <div className={UserControlItemStyle}>
                <div className="flex items-center justify-center">
                    <span>{header}</span>
                </div> 
                <div>
                    <span>All: {usersCount}</span> 
                </div>
                <div>
                    <span>Active: {activeCount}</span> 
                </div>
            </div>
        </Link>
     );
}