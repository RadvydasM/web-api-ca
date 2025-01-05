import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (!userName || !password || !passwordAgain) {
      setError("All fields are required.");
    } else if (!validPassword) {
      setError("Password must be at least 8 characters long, include a letter, number, and special character.");
    } else if (password !== passwordAgain) {
      setError("Passwords do not match.");
    } else {
      context.register(userName, password);
      setRegistered(true);
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <Paper elevation={6} style={{ padding: "30px" }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Typography variant="body1" gutterBottom>
        Register a username and password to log in.
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        margin="normal"
        label="Username"
        variant="outlined"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Confirm Password"
        type="password"
        variant="outlined"
        value={passwordAgain}
        onChange={(e) => setPasswordAgain(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={register}
        style={{ marginTop: "20px" }}
      >
        Register
      </Button>
    </Paper>
  );
};

export default SignUpPage;

