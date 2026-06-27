import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,

} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Email } from "@mui/icons-material";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleLogin = () => {

    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    }

    if (password === "") {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      alert("Login Successful");
    }

  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
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
          mb={4}
        >
          Login
        </Typography>

        <TextField
          label="Email"
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

        <Button
  variant="contained"
  fullWidth
  onClick={handleLogin}
  sx={{
    mt: 3,
    py: 1.4,
    borderRadius: 2,
  }}
>
  Login
</Button>
        <Typography textAlign="center" mt={2}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;