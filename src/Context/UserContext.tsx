import React, { useState } from "react";
import { render } from "react-dom";
import { IUser } from "../Interfaces/IUser";
import { users as mock_users, users } from "../Mock/users";

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
  users: users,
  setUsers: () => {}
} as IUserContext;

/* It's necessesary to create context, 
it can be init as undefined if it's needed */
export const UserContext = React.createContext<IUserContext>(value);

/* Children are Components
Value can be called from first children using useContext(useContext) */
export const UserContextProvider = ({ children }: IProps) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
