import React, { useState } from "react";
import "./SignIn.css";

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

  return (
    <div>
      <h1>Sign In</h1>
      <input onChange={onInputEmailChange} type="text" placeholder="Email" />
      <input
        onChange={onInputPasswordChange}
        type="text"
        placeholder="Password"
      />
      <button onClick={sendSignInData}>Submit</button>
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default SignIn;
