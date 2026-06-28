import {Box,Paper,Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { validateLogin } from "../utils/loginValidation";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
const handleLogin = () => {
  const result = validateLogin(email, password);

  setEmailError(result.errors.email);
  setPasswordError(result.errors.password);

  if (result.valid) {
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
         width: {
  xs: "90%",
  sm: 400,
},
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

  <CustomInput
label="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
error={emailError}
/>

<CustomInput
label="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
error={passwordError}
/>
 <CustomButton
text="Login"
onClick={handleLogin}
/>
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