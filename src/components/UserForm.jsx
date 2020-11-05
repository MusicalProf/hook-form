import React, { useState } from "react";

const UserForm = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const createUser = (e) => {
    // e.preventDefault();
    const newUser = { firstname, lastname, email, password, confirm };
    console.log("Welcome", newUser);
  };
  return (
    <div>
        <form class="col-12" onSubmit={createUser}>
          <div class='form-group'>
            <label>First Name: </label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} class="form-control" />
          </div>
          <div class='form-group'>
            <label>Last Name: </label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} class="form-control"/>
          </div>
          <div class='form-group'>
            <label>Email: </label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} class="form-control"/>
          </div>
          <div class='form-group'>
            <label>Password: </label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} class="form-control"/>
          </div>
          <div class='form-group'>
            <label>Confirm Password: </label>
            <input type="text" onChange={(e) => setConfirm(e.target.value)} class="form-control"/>
          </div>
          <input type="submit" value="Create User" />
        </form>
        <hr/>
        <br/>
        <h4>Your Form Data</h4>
        <hr/>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>
    </div>
  );
};
export default UserForm;
