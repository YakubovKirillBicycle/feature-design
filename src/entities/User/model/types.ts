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
  status: keyof typeof Status,
  role: keyof typeof Role,
  cards: string[],
  friends: string[],
}

export const EMPTY_USER: User = {
  id: '',
  nickname: '',
  status: 'offline',
  role: 'guest',
  cards: [],
  friends: [],
}