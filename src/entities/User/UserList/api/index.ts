import { User } from "entities/User/model/types";
import { GlobalConstant, MockData } from "shared";

export const getAllUsersFromDb = async (
    reject: (value: unknown) => any,
): Promise<User[]> => {
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res) => {
            if (res.status === 404) throw new Error(GlobalConstant.ERROR[res.status]);

            return ([...MockData.USERS])})
        .catch((err) => reject(err.message));
}