import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../../redux/loginsignupSlice";
import { validateEmail, validatePassword } from "../../helpers/helpersEmail";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Typography, Link } from "@mui/material";

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
      setPasswordErrors("Please enter a valid password");
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
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        direction: "column",
        alignItems: "center",
      }}
    >
      <form>
        <Stack
          spacing={2}
          width={300}
          sx={{
            display: "flex",
            flexDirection: "column",
            left: "50%",
            top: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 400 }}>
            {action}
          </Typography>
          {action === "Login" ? (
            <Typography></Typography>
          ) : (
            <TextField
              label="Username"
              color="secondary"
              type="text"
              focused
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <TextField
            label="Email"
            color="secondary"
            type="text"
            focused
            onChange={(e) => setEmail(e.target.value)}
          />
          {
            <Typography variant="subtitle2" color="red">
              {emailErrors}
            </Typography>
          }
          <TextField
            label="Password"
            color="secondary"
            type="text"
            focused
            onChange={(e) => setPassword(e.target.value)}
          />
          {
            <Typography variant="subtitle2" color="red">
              {passwordErrors}
            </Typography>
          }

          {action === "Sign Up" ? (
            <Typography></Typography>
          ) : (
            <Typography variant="subtitle2" className="forgot-password">
              Lost password? <Link underline="hover">Click here!</Link>
            </Typography>
          )}

          {action === "Sign Up" ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleSignup}
              disabled={isDisabled()}
            >
              Submit
            </Button>
          ) : (
            <Button variant="outlined" color="secondary" onClick={handleLogin}>
              Submit
            </Button>
          )}

          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <Button
              variant="text"
              sx={{ flex: 1 }}
              onClick={() => setAction("Sign Up")}
              color="secondary"
            >
              Sign Up
            </Button>
            <Button
              variant="text"
              sx={{ flex: 1 }}
              onClick={() => setAction("Login")}
              color="secondary"
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
