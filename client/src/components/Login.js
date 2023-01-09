import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate("/home");
            } else {
                r.json().then((err) => {
                    console.log(err);
                    setErrors(err.error);
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
                    <p>
                        Signup <NavLink to="/signup">here</NavLink>
                    </p>
                <p className="error">{errors}</p>
                </form>
            </div>
        </>
    );
};

export default Login;