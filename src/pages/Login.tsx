import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
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
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{mt: 3,py: 1.4,borderRadius: 2,
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