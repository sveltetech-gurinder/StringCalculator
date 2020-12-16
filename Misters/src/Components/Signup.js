import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router-dom';
import "../CSS/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[loginvalue, setLoginvalue] = useState(false);
  const [userNameErr, setUserNameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  
  const handlelogin = () => {
    setLoginvalue(true);
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = formValidation();
  }

  const formValidation = () => {
    const userNameErr = {};
    const passwordErr = {};
    let isValid = true;

    if(username.trim().length < 1){
      userNameErr.userNameEmpty = "Enter the Username";
      isValid = false;
    }

    if(password.trim().length < 6){
      passwordErr.passwordErr6 = "atleast 6 characters";
      isValid = false;
    }
    setUserNameErr(userNameErr);
    setPasswordErr(passwordErr)
    return isValid;
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {Object.keys(userNameErr).map((key) => {
            return <div style={{color:"red"}}>{userNameErr[key]}</div>
          })}
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {Object.keys(passwordErr).map((key) => {
            return <div style={{color:"red"}}>{passwordErr[key]}</div>
          })}
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {Object.keys(passwordErr).map((key) => {
            return <div style={{color:"red"}}>{passwordErr[key]}</div>
          })}
        </Form.Group>
        <Button block size="lg" type="submit" className="rounded-pill btn-danger loginbtn" onClick={!validateForm()}>
          SIGN UP
        </Button>
        <p className="para">Already have an account? <a className="para2" onClick={handlelogin}>Signin</a></p>
        {(loginvalue === true)?<Redirect to = "/" />:""}
      </Form>
    </div>
  );
}