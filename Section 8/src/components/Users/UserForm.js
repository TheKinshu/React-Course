import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    const userInfo = {
      username: username,
      age: age,
    };
    props.addUsers(userInfo);
    setUsername("");
    setAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            type="text"
            onChange={usernameHandler}
          />
          <label htmmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
