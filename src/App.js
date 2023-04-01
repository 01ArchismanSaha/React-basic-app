import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserListHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      const id = Math.random().toString();
      return [...prevList, { name: uName, age: uAge, id: id }];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserListHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
