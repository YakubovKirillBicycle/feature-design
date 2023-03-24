import { MachineModel } from "entities/Machine"

export const getVendorsWithStatus = (userVendors: string[], allVendors: MachineModel.Machine[], status: MachineModel.MachineStatus) => {
    return userVendors.reduce((activeVendors, vendorId) => {
        const activeVendor = allVendors.find((vendor) => vendor.id === vendorId);
        if (activeVendor && activeVendor.status === status)
            return [...activeVendors, activeVendor]
        return [...activeVendors]
    }, [] as MachineModel.Machine[]);
}