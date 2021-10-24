import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmmlFor="age">Age (Years)</label>
          <input id="age" type="number" />
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
