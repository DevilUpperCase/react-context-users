import React, { useState } from "react";
import { render } from "react-dom";
import { IUser } from "../Interfaces/IUser";
import { users as mock_users } from "../Mock/users";

/**
 * Export 
  * UserContextProvider,
  * UserContext --> needs to be called in App like   useContext(UserContext);
 */
export const UserContext = React.createContext<IUserContext | IUser[] >(mock_users);

interface IUserContext {
  users: IUser[];
  setUsers: (value: IUser[]) => void;
}

interface IProps {
  children: React.ReactNode;
}

// Children are Components
export const UserContextProvider = ({ children }: IProps) => {
  const [users, setUsers] = useState(mock_users);

  const value = {
    users,
    setUsers,
  } as IUserContext;


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
