import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
    const [newEmail, setNewEmail] = useState("");
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
                email: newEmail,
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
                            placeholder="Email"
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            required
                        />
                        <input
                            className="login-input"
                            placeholder="Username"
                            value={newUser}
                            onChange={(e) => setNewUser(e.target.value)}
                            required
                        />
                        <input
                            className="login-input"
                            placeholder="Password"
                            type="password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            required
                        />
                        <input
                            className="login-input"
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
