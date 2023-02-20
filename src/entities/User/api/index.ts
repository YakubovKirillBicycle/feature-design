import { v4 as uuidv4 } from 'uuid';

import { EMPTY_USER, User } from "../model"

export const fetchUser = (userName: string, password: string): User => {
  return ({
    ...EMPTY_USER,
    id: uuidv4(),
    nickname: userName,
    role: 'admin',
    status: 'online'
  })
}