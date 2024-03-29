import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

import { getMachines } from "../api";

export enum MachineStatus {
    Active,
    Installation,
    Disabled,
}

export interface Machine {
    id: string,
    name: string,
    locationId: string,
    owner: string,
    cost: number,
    productCost: number,
    dayProfit: number,
    status: MachineStatus,
    installationDate: string,
}

export const INITIAL_MACHINE: Machine = {
    id: '',
    name: '',
    cost: 0,
    installationDate: '',
    productCost: 0,
    dayProfit: 0,
    locationId: '',
    owner: '',
    status: MachineStatus.Disabled,
}

const machinesAdapter = createEntityAdapter<Machine>({
    selectId: (machine) => machine.id
});

const machineSlice = createSlice({
    name: 'machines',
    initialState: machinesAdapter.getInitialState(),
    reducers: {
        addMachine: machinesAdapter.addOne,
        addMachines: machinesAdapter.addMany,
        removeMachine: machinesAdapter.removeOne,
        clearMachines: machinesAdapter.removeAll,
    },
})

export const { reducer, actions }  = machineSlice

const machinesSelectors = machinesAdapter.getSelectors((state: RootState) => state.machines );

export const {
    selectById,
    selectAll,
} = machinesSelectors;

export const allMachinesSelector = () => useSelector(machinesSelectors.selectAll)

export const machinesLengthByStatusSelector = (status: MachineStatus) => useSelector(machinesSelectors.selectAll)
    .filter((machine) => machine.status === status)
    .length;

export const getMockMachines = () => getMachines()