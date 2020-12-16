import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router-dom';
import "../CSS/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[value, setValue] = useState(false);
  const[signupvalue, setSignupvalue] = useState(false);
  const [userNameErr, setUserNameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  
  const handleSignup = () => {
    setSignupvalue(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if(isValid === true){
      setValue(true);
    }
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

  const handleusername = (e) => {
      setUsername(e.target.value);
  }

  const handlepassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
    {(value !== true)?
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={handleusername}
            required 
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
            onChange={handlepassword}
            required 
          />
          {Object.keys(passwordErr).map((key) => {
            return <div style={{color:"red"}}>{passwordErr[key]}</div>
          })}
        </Form.Group>
        <Button block size="lg" type="submit" className="rounded-pill btn-danger loginbtn" onClick={handleSubmit}>
          Login
        </Button>
        <p className="para">Don't have an account? <a className="para1" onClick={handleSignup}>Signup</a></p>
        {(signupvalue === true)?<Redirect to = "/signup" /> : ""}
      </Form>
    </div>
    :
    <Redirect to = "/profile" />
    }
    </>
  );
}