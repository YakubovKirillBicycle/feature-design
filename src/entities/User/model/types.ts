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
  password: string,
  status:  Status,
  registerDate: Date,
  city: string,
  role: Role,
  items: string[],
}

export const EMPTY_USER: User = {
  id: '',
  nickname: '',
  password: '',
  city: 'Gomel',
  registerDate: new Date(),
  status: Status.offline,
  role: Role.guest,
  items: [],
}