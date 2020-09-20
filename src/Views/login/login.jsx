import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/authSlice";
import "./login.css";

export default () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });

  function inputChanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    dispatch(signIn(formInput));
    e.preventDefault();
  }

  return (
    <div className="loginBiG">
      <form className="login-panel">
        <h1>Login:</h1>
        <input
          className="input1"
          name="name"
          placeholder="Username"
          onChange={inputChanged}
          value={formInput.name}
        ></input>
        <input
        className="input2"
          name="password"
          placeholder="Password"
          onChange={inputChanged}
          value={formInput.password}
        ></input>
        <button className="btn-lgn" type="submit" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
};
