import { MachineModel } from "entities/Machine";
import VendorListItem from "entities/Machine/ui";
import { UserListModel } from "entities/User";

interface IVendorList {
    vendors: MachineModel.Machine[]
}

const VendorsList = (props: IVendorList) => {
    const { vendors } = props;

    return (
        <div>
            <div className="flex flex-wrap flex-auto items-center justify-evenly">
                {
                    vendors.map((vendor) => (
                        <VendorListItem key={vendor.id} {...vendor} owner={UserListModel.userByIdSelector(vendor.owner)?.nickname || ''} />
                    ))
                }
            </div>
        </div>
    );
}

export default (VendorsList);