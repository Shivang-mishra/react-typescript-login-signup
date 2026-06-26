import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
const Signup = () => {
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
          Sign Up
        </Typography>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
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