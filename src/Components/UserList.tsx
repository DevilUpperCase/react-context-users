import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "../Context/UserContext";

export const UsersList = (props: any): JSX.Element => {

 
 /** @Error if --> const {users} = useContext(UserContext);
 Se declara "users", pero su valor no se lee nunca.ts(6133)
 La propiedad 'users' no existe en el tipo 'IUserContext | IUser[]'.*/
  const value = useContext(UserContext);
  

  //<MyContext.Provider value={/* some value */}></MyContext.Provider>
  return (
    <>
      {`quiero hacer un map con li de users que 
      se actualice cada vez que cambia el context`}
    </>
  );
}