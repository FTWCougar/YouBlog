import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
                if (!data.errors) {
                    navigate("/login");
                } else {
                    data.errors.forEach((error) => {
                        toast.error(error, {
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
            <h1 className="login-title">YouBlog</h1>
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
                    <br />
                    <NavLink to="/login" className="nav-link">
                        Back to login
                    </NavLink>
                </form>
            </div>
        </>
    );
}

export default Signup;
