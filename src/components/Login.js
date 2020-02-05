import React from "react";
import auth from "./auth";

export const Login = props => {
  return(
    <div>
      <h1>Enter your Details</h1>
      <label> UserName</label>
        <input type="text" data-test="username"  />
      <label>Password</label>
      <input type="password" data-test="password"  />

      <button
        onClick={() =>{
          auth.login(() => {
            props.history.push("/app");
          });
        }}



      >
        Signin

      </button>
        
    </div>
  )
}

export default Login;
