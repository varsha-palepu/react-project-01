import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
const LoginOptions=({setShowForm})=>{
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleSignUpClick=()=>{
      setShowSignUpForm(true);
      //setShowForm(false);
    }
    const handleLoginClick=()=>{
      setShowLoginForm(true);
      //setShowForm(false);
    }
    return (
      <>
        {!showSignUpForm && !showLoginForm && (
          <div className="absolute right-[27px]  w-35 bg-gray-100 border border-gray-200 rounded shadow-lg">
            <ul>
              <li className="px-4 py-2  hover:text-cyan-700 cursor-pointer border-gray-200 border-b-2 text-[14px] font-semibold" onClick={handleLoginClick}>
                Login
              </li>
              <li className="px-4 py-2  hover:text-cyan-700 cursor-pointer text-[14px] font-semibold" onClick={handleSignUpClick}>
                Sign up
              </li>
            </ul>
          </div>
        )}
        {showSignUpForm && <SignUpForm  />}
        {showLoginForm && <LoginForm  />}
      </>
    );
}
 
export default LoginOptions;