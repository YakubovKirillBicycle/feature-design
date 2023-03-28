import { MachineModel } from "..";

interface IVendorListItemProps {
    status: MachineModel.MachineStatus,
    name: string,
    owner: string,
    cost: number,
    dayProfit: number,
}

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

export const VendorListItem = (props: IVendorListItemProps) => {
    const {
        status,
        name,
        owner,
        cost,
        dayProfit,
    } = props;

    const vendorStatusColor = {
        [MachineModel.MachineStatus.Active]: 'bg-green-400',
        [MachineModel.MachineStatus.Installation]: 'bg-yellow-500',
        [MachineModel.MachineStatus.Disabled]: 'bg-red-500',
    }
    return ( 
        <div className={UserItemStyle} >
                <div>
                    <div className={`${vendorStatusColor[status]} h-[10px] w-[10px] rounded-[5px] absolute`} />
                </div>
                <div className="flex justify-center items-center">
                    <span>{name}</span>
                </div>
                <div>
                    <span>Owner: {owner}</span>
                </div>
                <div>
                    <span>Status: {MachineModel.MachineStatus[status]}</span>
                </div>
                <div>
                    <span>Cost: ${cost}</span>
                </div>
                <div>
                    <span>Day profit: ${dayProfit}</span>
                </div>
            </div>
     );
}