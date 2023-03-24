import { MockData } from "shared"

export const getMachines = () => {
    return MockData.MACHINE_STORE.map((machine) => ({
        ...machine,
        status: Math.floor(Math.random() * 3)
    }))
}