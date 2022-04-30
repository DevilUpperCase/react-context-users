import { IUser } from "../IUser";

export interface IUserContext {
  users: IUser[];
  setUsers: (value: IUser[]) => void;
}
