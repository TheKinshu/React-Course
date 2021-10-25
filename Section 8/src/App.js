import React, { useState } from "react";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UsersList";
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enterUser) => {
    setUsers((prevUsers) => {
      const userList = [...prevUsers];
      userList.unshift({
        id: Math.floor(Math.random() * 1000).toString(),
        ...enterUser,
      });
      return userList;
    });
  };

  return (
    <div>
      <UserForm addUsers={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
