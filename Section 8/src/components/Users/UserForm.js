import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = (event) => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and or age into the input-field!",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
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
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
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
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
