import React, { useState } from "react";
import "./SignUp.css";

const SignUp = ({ setIsLoggedIn, loadUser, setGetId }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const onInputNameChange = (e) => {
    setName(e.target.value);
  };

  const onInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const resetErrorMessage = () => {
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
  };

  const sendSignUpData = () => {
    if (!isValidEmail(email)) {
      setEmailErrorMessage("Please Enter a Valid Email Address");
      setTimeout(resetErrorMessage, 3300);
      return;
    }
    if (!isValidPassword(password)) {
      setPasswordErrorMessage("Password Should Be At Least 6 Characters Long");
      setTimeout(resetErrorMessage, 3300);
      return;
    }
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.email) {
          alert("User Already Exists");
        } else {
          setGetId(user.id);
          loadUser(user);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Register</h1>
      <input onChange={onInputNameChange} type="text" placeholder="Name" />
      <input onChange={onInputEmailChange} type="email" placeholder="Email" />
      <input
        onChange={onInputPasswordChange}
        type="password"
        placeholder="Password"
      />
      <button onClick={sendSignUpData}>Submit</button>
      <div className="error-message">{emailErrorMessage}</div>
      <div className="error-message">{passwordErrorMessage}</div>
    </div>
  );
};

export default SignUp;
