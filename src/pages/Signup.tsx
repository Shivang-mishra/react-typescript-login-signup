import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");
const handleSignup = () => {

  setNameError("");
  setEmailError("");
  setPasswordError("");
  setConfirmPasswordError("");

  let valid = true;

  if (name === "") {
    setNameError("Name is required");
    valid = false;
  }

  if (email === "") {
    setEmailError("Email is required");
    valid = false;
  }
if (email !== "" && !email.includes("@")) {
  setEmailError("Enter a valid email");
  valid = false;
}
  if (password === "") {
    setPasswordError("Password is required");
    valid = false;
  }else if (password.length < 6) {
  setPasswordError("Password must be at least 6 characters");
  valid = false;
}

  if (confirmPassword === "") {
    setConfirmPasswordError("Confirm Password is required");
    valid = false;
  }

  if (password !== confirmPassword) {
    setConfirmPasswordError("Passwords do not match");
    valid = false;
  }

  if (valid) {
    alert("Signup Successful");
  }
};
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={3}
        >
          SIGN UP
        </Typography>

        <TextField
  label="Full Name"
  fullWidth
  margin="normal"
  value={name}
  onChange={(e) => setName(e.target.value)}
  error={nameError !== ""}
  helperText={nameError}
/>

        <TextField
  label="Email"
  type="email"
  fullWidth
  margin="normal"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError !== ""}
  helperText={emailError}
/>

        <TextField
  label="Password"
  type="password"
  fullWidth
  margin="normal"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  error={passwordError !== ""}
  helperText={passwordError}
/>

      <TextField
  label="Confirm Password"
  type="password"
  fullWidth
  margin="normal"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  error={confirmPasswordError !== ""}
  helperText={confirmPasswordError}
/>
 <Button
  variant="contained"
  fullWidth
  onClick={handleSignup}
  sx={{
    mt: 3,
    py: 1.5,
    borderRadius: 2,
  }}
>
  Sign Up
</Button>
        <Typography textAlign="center" mt={2}>
  Already have an account?{" "}
  <Link to="/login" style={{ textDecoration: "none" }}>
    Login
  </Link>
</Typography>
    
      </Paper>
    </Box>
  );
};

export default Signup;