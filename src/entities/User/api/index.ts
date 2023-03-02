import { v4 as uuidv4 } from 'uuid';

import { EMPTY_USER, Role, Status, User } from '../model/types';

export const fakeGetUser = (userName: string, password: string): Promise<User> => {
    const newUser = {
        ...EMPTY_USER,
        id: uuidv4(),
        nickname: userName,
        role: 'admin' as unknown as Role,
        status: 'online' as unknown as Status
    }
    return new Promise((res) => {
        setTimeout(() => {
            res(newUser)
        }, 1000)
    })
}
