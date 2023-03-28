import { v4 as uuidv4 } from 'uuid';

import { GlobalConstant, MockData } from 'shared';

import { EMPTY_USER, Role, Status, User } from '../model/types';

export const fakeGetUser = (
    userName: string,
    password: string,
    reject: (value: unknown) => any,
): Promise<User> => {
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res) => {
            if (res.status === 404) throw new Error(GlobalConstant.ERROR[res.status]);

            if (password === 'admin') return MockData.ADMIN_USER;
            if (password === 'user') {
                return MockData.USERS.find((user) => user.nickname === userName) || {
                    ...EMPTY_USER,
                    id: uuidv4(),
                    nickname: userName,
                    role: 'manager' as unknown as Role,
                    status: 'online' as unknown as Status
                }
            }

            return ({
                ...EMPTY_USER,
                id: uuidv4(),
                nickname: userName,
                role: 'admin' as unknown as Role,
                status: 'online' as unknown as Status
        })})
        .catch((err) => reject(err.message));
}
