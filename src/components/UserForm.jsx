import React, { useState } from "react";

const UserForm = (props) => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [submitted, setSubmitted] = useState(false);
  //   const [firstname, setFirstName] = useState("");
  //   const [lastname, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirm, setConfirm] = useState("");

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const changeMessage = () => {
      setSubmitted(true);
  }

  const allValid = (formInput) => {
    return nameValid(formInput.firstname)
    && nameValid(formInput.lastname)
    && emailValid(formInput.email)
    && passwordValid(formInput.password)
    && confirmValid(formInput.confirm);
  }

  const nameValid = (nameInput) => {
    if (nameInput.length >= 2) {
      return true;
    } else {
      return false;
    }
  };

  const emailValid = (emailInput) => {
    if (emailInput.length >= 5) {
      return true;
    } else {
      return false;
    }
  };

  const passwordValid = (passwordInput) => {
    if (passwordInput.length > 8) {
      return true;
    } else {
      return false;
    }
  };

  const confirmValid = (confirmInput) => {
    if (confirmInput.length > 8 && confirmInput === form.password) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form class="col-12" onSubmit={changeMessage}>
        {submitted ? (
          <h3 class="alert alert-success">
            Thank you for submitting your information!
          </h3>
        ) : (
          <h3>Welcome, please enter and submit your information.</h3>
        )}
        <hr />
        <div class="form-group">
          <label>First Name: </label>
          <input
            type="text"
            name="firstname"
            onChange={onChangeForm}
            class="form-control"
          />
          {nameValid(form.firstname) ? (
            ""
          ) : (form.firstname.length < 1) ? ("") :
            (<p class="alert alert-danger">
              First Name must be at least 2 characters!!!
            </p>
          )}
        </div>
        <div class="form-group">
          <label>Last Name: </label>
          <input
            type="text"
            name="lastname"
            onChange={onChangeForm}
            class="form-control"
          />
          {nameValid(form.lastname) ? (
            ""
          ) : (form.lastname.length < 1) ? ("") :
            (<p class="alert alert-danger">
              Last Name must be at least 2 characters!!!
            </p>
          )}
        </div>
        <div class="form-group">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={onChangeForm}
            class="form-control"
          />
          {emailValid(form.email) ? (
            ""
          ) : (form.email.length < 1) ? ("") :
            (<p class="alert alert-danger">
              Email must be at least 5 characters!!!
            </p>
          )}
        </div>
        <div class="form-group">
          <label>Password: </label>
          <input
            type="text"
            name="password"
            onChange={onChangeForm}
            class="form-control"
          />
          {passwordValid(form.password) ? (
            ""
          ) : (form.password.length < 1) ? ("") :
            (<p class="alert alert-danger">
              Password must be at least 8 characters!!!
            </p>
          )}
        </div>
        <div class="form-group">
          <label>Confirm Password: </label>
          <input
            type="text"
            name="confirm"
            onChange={onChangeForm}
            class="form-control"
          />
          {confirmValid(form.confirm) ? ("") : (form.confirm.length < 1) ? (
            ""
          ) : (
            <p class="alert alert-danger">Your passwords must match!!!</p>
          )}
        </div>
        {allValid(form) ? <input type="submit" value="Create User" className="btn btn-primary"/> : <input type="submit" value="Create User" className="btn btn-danger" disabled/>}
      </form>
      <hr />
      <br />
      <h4>Your Form Data</h4>
      <hr />
      <p>First Name: {form.firstname}</p>
      <p>Last Name: {form.lastname}</p>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
      <p>Confirm Password: {form.confirm}</p>
    </div>
  );
};
export default UserForm;
