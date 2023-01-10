import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
    const [newUser, setNewUser] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newConfirm, setNewConfirm] = useState("");

    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: newUser,
                password: newPass,
                password_confirmation: newConfirm,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                navigate("/login");
            });
    };
    return (
        <>
            <h1 className="login-title">Phase 5 Project</h1>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSignup}>
                    <h2>Signup</h2>
                    <div className="login-fields">
                        <input
                            className="login-input"
                            id="login1"
                            placeholder="Username"
                            value={newUser}
                            onChange={(e) => setNewUser(e.target.value)}
                            required
                        />
                        <input
                            className="login-input"
                            id="login2"
                            placeholder="Password"
                            type="password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            required
                        />
                        <input
                            className="login-input"
                            id="login3"
                            placeholder="Confirm Password"
                            type="password"
                            value={newConfirm}
                            onChange={(e) => setNewConfirm(e.target.value)}
                            required
                        />
                        <button className="login-buttons">Signup</button>
                    </div>
                    <p>
                        Back to <NavLink to="/login">login</NavLink>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Signup;
