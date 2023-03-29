import React, { useState } from "react";

const SignUp = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onInputEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const onInputPasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const sendSignUpData = () => {
  //   fetch("htpp://localhost:3000/signin", {
  //     method: "post",
  //     header: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   });
  // };

  return (
    <div>
      <h1>Sign Up!</h1>
      {/* <input onChange={onInputEmailChange} type="text" placeholder="Email" />
      <input
        onChange={onInputPasswordChange}
        type="text"
        placeholder="Password"
      />
      <button onClick={sendSignUpData}>Submit</button> */}
    </div>
  );
};

export default SignUp;
