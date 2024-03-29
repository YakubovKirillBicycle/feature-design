import { MachineModel } from "entities/Machine";
import { UserListModel } from "entities/User";

import { getVendorsWithStatus } from "./model/helpers";

const UserItemStyle = [
    "bg-zinc-200",
    "w-[200px] min-h-[100px] h-max",
    "rounded-[10px]",
    "p-2",
    "shadow-xl",
    "mb-[20px]",
    "font-normal",
    "text-slate-700",
    "text-base",
    "hover:cursor-pointer",
    "hover:bg-slate-200",
    "hover:shadow-lg",
    'transition duration-400 ease-in-out',
].join(' ')

export const UsersList = () => {
    const usersList = UserListModel.userListSelector();
    const vendorsList = MachineModel.allMachinesSelector();

    return (
        <div>
            <div className="flex flex-wrap flex-auto items-center justify-evenly">
                {
                    usersList.map((user) => (
                        <div className={UserItemStyle} key={user.id}>
                            <div className="flex justify-center items-center">
                                <span>{user.nickname}</span>
                            </div>
                            <div>
                                <span>All vendors: {user.items.length}</span>
                            </div>
                            <div>
                                <span>Active: {getVendorsWithStatus(user.items, vendorsList, MachineModel.MachineStatus.Active).length}</span>
                            </div>
                            <div>
                                <span>Disabled: {getVendorsWithStatus(user.items, vendorsList, MachineModel.MachineStatus.Disabled).length}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}