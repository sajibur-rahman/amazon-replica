import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase";
import "./Login.css";

const Login = () => {
   const  [signInWithGoogle] =  useSignInWithGoogle(auth)
  return (
    <div className="form-container">
        <form>
            <input type="email" placeholder="enter your email" />
            <br /><br />
            <input type="password" placeholder="enter your password" />
            <br /><br />
            <input type="submit" value="login" />
        </form>
        <button className="login-button" onClick={() => signInWithGoogle()}>sign in with google</button>
    </div>
  );
};

export default Login;
