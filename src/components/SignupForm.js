import React, { useState } from "react";
import { NavLink } from "react-router-dom"

function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, password_confirmation: confirmation }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="passc">Confirm Password</label>
            <input
                type="password"
                id="passc"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
            />
            <button type="submit">
                Signup
            </button>
            <p>Or <NavLink className="" to='/login'>Already have an account</NavLink></p>

            {errors.map((err) => (
                <p style={{ color: "red" }} key={err}>{err}</p>
            ))}
        </form>
    );
}

export default SignupForm;
