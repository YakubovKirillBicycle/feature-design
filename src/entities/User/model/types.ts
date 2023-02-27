export enum Role {
  'admin',
  'manager',
  'guest',
}

export enum Status {
  'online',
  'offline',
}

export interface IUserData {
  nickname: string,
  password: string,
}

export interface User {
  id: string,
  nickname: string,
  status:  Status,
  role: Role,
  cards: string[],
  friends: string[],
}

export const EMPTY_USER: User = {
  id: '',
  nickname: '',
  status: Status.offline,
  role: Role.guest,
  cards: [],
  friends: [],
}