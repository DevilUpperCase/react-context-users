import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { IUser } from "../Interfaces/IUser";

export const UsersList = (props: any): JSX.Element => {

  
  /** 
   * @Error if --> const {users} = useContext(UserContext);
   Se declara "users", pero su valor no se lee nunca.ts(6133)
   La propiedad 'users' no existe en el tipo 'IUserContext | IUser[]'.
   
   /**
    * @Solution --> ContextProvider only provide context for 1 children,
    not for children of children or some children. So every children we want to use the context
    have to be wrapped by a context provider and by a fragment(unique children of provider)
    */

   // We can call useContext(userContext) in every child inside the unique fragment of the provider
   const { users } = useContext(UserContext);
   

  //<MyContext.Provider value={/* some value */}></MyContext.Provider>
  return (
    <>
      {users.map((user, index) => {
        return (<li key={index}>{user.name}</li>)
      })}
    </>
  );
};
