import React, { useState } from "react";

const SignUp = ({ setIsLoggedIn, loadUser, setGetId, preventRefresh }) => {
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
      <div class="form-box register">
        <h2>Registration</h2>
        <form onSubmit={preventRefresh}>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input
              className="input-color"
              onChange={onInputNameChange}
              type="text"
            />
            <label>Name</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              className="input-color"
              onChange={onInputEmailChange}
              type="email"
            />
            <label>Email</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              className="input-color"
              onChange={onInputPasswordChange}
              type="password"
            />
            <label>Password</label>
          </div>
          <button className="btn" onClick={sendSignUpData}>
            Submit
          </button>
          <div className="error-message">{emailErrorMessage}</div>
          <div className="error-message">{passwordErrorMessage}</div>
        </form>
      </div>
      {/* <h1>Register</h1> */}
      {/* <input onChange={onInputNameChange} type="text" placeholder="Name" /> */}
      {/* <input onChange={onInputEmailChange} type="email" placeholder="Email" /> */}
      {/* <input
        onChange={onInputPasswordChange}
        type="password"
        placeholder="Password"
      /> */}
      {/* <button onClick={sendSignUpData}>Submit</button> */}
    </div>
  );
};

export default SignUp;
