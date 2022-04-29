import { useState, Provider, useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import { UsersList } from './Components/UserList'
import { UserContext } from './Context/UserContext'
import { users as mock_users } from './Mock/users'

function App() {
  const value = useContext(UserContext);

  return (
    <div className="App">
      <UsersList value={value}></UsersList>

    </div>
  )
}

export default App
