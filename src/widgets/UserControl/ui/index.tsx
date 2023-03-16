import { Link } from "react-router-dom";

import { GlobalConstant } from "shared";

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

export const UserControlItem = () => {
    return (
        <Link to={GlobalConstant.APP_NAVIGATOR.ADMIN.USERS}>
            <div className={UserControlItemStyle}>
                <div>
                    <span>All: 30</span> 
                </div>
                <div>
                    <span>Active: 30</span> 
                </div>
            </div>
        </Link>
     );
}