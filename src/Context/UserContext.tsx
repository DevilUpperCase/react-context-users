import React, { useContext, useState } from "react";
import { IUser } from "../Interfaces/IUser";
import { users as mock_users } from "../Mock/users";

/**
 * Export
 * UserContextProvider,
 * UserContext --> needs to be called in App like   useContext(UserContext);
 */

interface IUserContext {
  users: IUser[];
  setUsers: (value: IUser[]) => void;
}

interface IProps {
  children: React.ReactNode;
}

/* useState is not needed, useContext can works like a useState */
const value = {
  users: mock_users,
  setUsers: (new_users: IUser[] | any) => {
    value.users = new_users;
  },
} as IUserContext;

/* It's necessesary to create context, 
it can be init as undefined if it's needed */
export const UserContext = React.createContext<IUserContext>(value);

/* Children are Components
Value can be called from children of unique fragment using useContext(useContext) */
export const UserContextProvider = ({ children }: IProps) => {
  const [ users, setUsers ] = useState(mock_users)
  const contextValue = { users, setUsers };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
