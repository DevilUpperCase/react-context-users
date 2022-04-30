import { useState, Provider, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UsersList } from "./Components/UserList";
import { UserContext, UserContextProvider } from "./Context/UserContext";
import { users as mock_users } from "./Mock/users";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UsersList />
      </UserContextProvider>
    </div>
  );
}

export default App;
