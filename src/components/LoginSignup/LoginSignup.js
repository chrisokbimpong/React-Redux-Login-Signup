import React from "react";
import "./loginsignup.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../../redux/loginsignupSlice";
import { validateEmail, validatePassword } from "../../helpers/helpersEmail";

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  const loginsignup = useSelector((state) => state.loginsignup);
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();

    let isValidEmail = validateEmail(email);
    let isValidPassword = validatePassword(password);
    if (isValidEmail && isValidPassword) {
      dispatch(signup({ username, email, password }));
    }
    if (!isValidEmail) {
      console.log("Invalid email");
      setEmailErrors("Please enter a valid email");
    } else {
      console.log("valid email");
      setEmailErrors("");
    }
    if (!isValidPassword) {
      console.log("Invalid password");
      setPasswordErrors("Your password is incorrect");
    } else {
      setPasswordErrors("");
    }

    console.log("isValidEmail:", isValidEmail, emailErrors);
    console.log("isValidPassword:", isValidPassword, passwordErrors);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const isDisabled = () => {
    return password === "" || email === "" || username === "" ? true : false;
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <FaUser className="icons username" />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <MdEmail className="icons email" />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {<small color="red">{emailErrors}</small>}
        </div>
        <div className="input">
          <RiLockPasswordLine className="icons password" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {<small color="red">{passwordErrors}</small>}
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost password? <span>Click here!</span>
        </div>
      )}
      <div>
        {action === "Sign Up" ? (
          <div className="new-user">
            <button
              className="button-18"
              onClick={handleSignup}
              disabled={isDisabled()}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="new-user">
            <button className="button-18" onClick={handleLogin}>
              Submit
            </button>
          </div>
        )}
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};
