import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { IUser } from "../Interfaces/IUser";

export const NewUser = (props: any): JSX.Element => {
  const { users, setUsers } = useContext(UserContext);

  /* We copy first user as template to only change his name and set it as new user*/
  const getNewUserByName = (name: string): IUser => {
    const new_user_by_name = users[0];
    new_user_by_name.name = name;
    return new_user_by_name;
  };

  const addUser = (user_name : string) => {
    const new_user = getNewUserByName(user_name)
    const fin_users : IUser[] = [];
    Object.assign(fin_users, users)
    fin_users.push(new_user); 
    setUsers(fin_users);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const new_user_name = (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
    addUser(new_user_name)
    // https://stackoverflow.com/questions/60635093/react-formeventhtmlformelement-form-input-props-types 
    console.log((event.currentTarget.elements.namedItem('name') as HTMLInputElement).value);
    // setUsers(newUser(event.target.[name]), users)
  };
  return (
      <form onSubmit={handleSubmit}>
        <label>Nombre usuario nuevo:</label>
        <input name="name" type="text" placeholder="Nuevo usuario" />
        <input type="submit" value="Submit" />
      </form>
  );
};
