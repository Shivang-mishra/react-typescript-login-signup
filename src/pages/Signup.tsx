import {Box, Paper,Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { validateSignup } from "../utils/signupValidation";
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
  const result = validateSignup(
    name,
    email,
    password,
    confirmPassword
  );

  setNameError(result.errors.name);
  setEmailError(result.errors.email);
  setPasswordError(result.errors.password);
  setConfirmPasswordError(result.errors.confirmPassword);

  if (result.valid) {
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
  sx={{
    textAlign: "center",
    fontWeight: "bold",
    mb: 3,
  }}
>
          SIGN UP
        </Typography>

        <CustomInput
label="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
error={nameError}
/>

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

<CustomInput
label="Confirm Password"
type="password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
error={confirmPasswordError}
/>
 <CustomButton
text="Sign Up"
onClick={handleSignup}
/>
       <Typography
  sx={{
    textAlign: "center",
    mt: 2,
  }}
>
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