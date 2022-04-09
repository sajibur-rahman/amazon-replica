import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import "./Login.css";

const Login = () => {
   const  [signInWithGoogle] =  useSignInWithGoogle(auth)
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state?.from?.pathname || '/';
   const handleSignIn = () => {
       signInWithGoogle()
       .then(() => {
           navigate(from,{replace:true})
       })
   }
  return (
    <div className="form-container">
        <form>
            <input type="email" placeholder="enter your email" />
            <br /><br />
            <input type="password" placeholder="enter your password" />
            <br /><br />
            <input type="submit" value="login" />
        </form>
        <button className="login-button" onClick={handleSignIn}>sign in with google</button>
    </div>
  );
};

export default Login;
