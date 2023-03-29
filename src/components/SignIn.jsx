import React, { useState } from "react";

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onInputPasswordChange = (e) => {
    setPassword(e.target.value);
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
      .then((data) => {
        if (data === "success") {
          setIsLoggedIn(true);
        } else {
          alert("incorrect email or password");
        }
      });
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
    </div>
  );
};

export default SignIn;
