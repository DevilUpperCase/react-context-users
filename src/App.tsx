import { useState, Provider, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UsersList } from "./Components/UserList";
import { UserContext, UserContextProvider } from "./Context/UserContext";
import { users as mock_users } from "./Mock/users";
import { NewUser } from "./Components/NewUser";

function App() {
  /**
   * UserContextProvider 
   *  https://stackoverflow.com/questions/54738681/how-to-change-the-value-of-a-context-with-usecontext
   */
  return (
    <div className="App">
      <UserContextProvider>
        <>
          <NewUser />
          <UsersList />
        </>
      </UserContextProvider>
    </div>
  );
}

export default App;
