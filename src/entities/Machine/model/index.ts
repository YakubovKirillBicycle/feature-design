export enum MachineStatus {
    Active,
    Installation,
    Disabled,
}

export interface Machine {
    id: string,
    name: string,
    locationId: string,
    cost: number,
    productCost: number,
    dayProfit: number,
    status: MachineStatus,
    installationDate: Date,
}

export const INITIAL_MACHINE: Machine = {
    id: '',
    name: '',
    cost: 0,
    installationDate: new Date(),
    productCost: 0,
    dayProfit: 0,
    locationId: '',
    status: MachineStatus.Disabled,
}