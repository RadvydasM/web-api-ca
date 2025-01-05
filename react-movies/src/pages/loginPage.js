import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const LoginPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const login = () => {
        if (userName && password) {
            context.authenticate(userName, password);
        } else {
            setError("Please enter both username and password.");
        }
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Paper elevation={6} style={{ padding: "30px" }}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <Typography variant="body1" gutterBottom>
                You must log in to view the protected pages.
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}

            <TextField
                fullWidth
                margin="normal"
                label="Username"
                variant="outlined"
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={login}
                style={{ marginTop: "20px" }}
            >
                Log in
            </Button>

            <Typography variant="body2" style={{ marginTop: "15px" }}>
                Not registered? <Link to="/signup">Sign Up!</Link>
            </Typography>
        </Paper>
    );
};

export default LoginPage;
