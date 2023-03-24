import { MachineModel } from "entities/Machine";
import { UserListModel } from "entities/User";

const UserItemStyle = [
    "bg-zinc-200",
    "w-[250px] min-h-[100px] h-max",
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

export const VendorsList = () => {
    const vendorsList = MachineModel.allMachinesSelector();

    return (
        <div>
            <div className="flex flex-wrap flex-auto items-center justify-evenly">
                {
                    vendorsList.map((vendor) => (
                        <div className={UserItemStyle} key={vendor.id}>
                            <div className="flex justify-center items-center">
                                <span>{vendor.name}</span>
                            </div>
                            <div>
                                <span>Owner: {UserListModel.userByIdSelector(vendor.owner)?.nickname}</span>
                            </div>
                            <div>
                                <span>Status: {MachineModel.MachineStatus[vendor.status]}</span>
                            </div>
                            <div>
                                <span>Cost: ${vendor.cost}</span>
                            </div>
                            <div>
                                <span>Day profit: ${vendor.dayProfit}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}