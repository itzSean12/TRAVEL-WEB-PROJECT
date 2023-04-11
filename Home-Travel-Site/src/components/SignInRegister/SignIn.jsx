import React, { useState } from "react";
import "./SignIn.css";
import backgroundImg from "../../images/background.jpg";
import SignUp from "./SignUp";

const SignIn = ({ setIsLoggedIn, loadUser, setGetId }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const onInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const resetErrorMessage = () => {
    setErrorMessage("");
  };

  const sendSignInData = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          setGetId(user._id);
          loadUser(user);
          setIsLoggedIn(true);
        } else {
          setErrorMessage("Incorrect Email or Password. Please Try Again");
          setTimeout(resetErrorMessage, 3300);
        }
      })
      .catch((error) => console.log(error));
  };

  const preventRefresh = (e) => {
    e.preventDefault();
  };

  return (
    <div className="body" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div class="wrapper">
        <span class="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>

        <div class="form-box login">
          <h2>Login</h2>
          <form onSubmit={preventRefresh}>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                className="input-color"
                onChange={onInputEmailChange}
                type="text"
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
                type="text"
              />
              <label>Password</label>
            </div>
            <button class="btn" onClick={sendSignInData}>
              Login
            </button>
            <div className="error-message">{errorMessage}</div>
          </form>
        </div>
        <SignUp
          setGetId={setGetId}
          loadUser={loadUser}
          setIsLoggedIn={setIsLoggedIn}
          preventRefresh={preventRefresh}
        />
      </div>
      {/* <h1>Sign In</h1> */}
      {/* <input onChange={onInputEmailChange} type="text" placeholder="Email" /> */}
      {/* <input
        onChange={onInputPasswordChange}
        type="text"
        placeholder="Password"
      /> */}
      {/* <button onClick={sendSignInData}>Submit</button> */}
      {/* <div className="error-message">{errorMessage}</div> */}
    </div>
  );
};

export default SignIn;
