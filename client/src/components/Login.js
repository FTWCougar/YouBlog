import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user);
                    navigate("/");
                });
            } else {
                r.json().then((err) => {
                    toast.error(err.errors[0], {
                        position: "top-center",
                        autoClose: 4500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                });
            }
        });
    };

    return (
        <>
            <h1 className="login-title">Phase 5 Project</h1>
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="login-fields">
                        <input
                            className="login-input"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            className="login-input"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="login-buttons">Login</button>
                    </div>
                    <br />
                    <NavLink to="/signup" className="nav-link">
                        Signup here
                    </NavLink>
                </form>
            </div>
        </>
    );
};

export default Login;
