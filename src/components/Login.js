import React, { useState } from "react";
import { NavLink } from "react-router-dom"

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://bookitapi-production.up.railway.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className="inputs-form" htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="inputs-form" htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button id="sign-up" type="submit">
                {"Login"}
            </button>
            <p>Or <NavLink className="" to='/signup'>create account</NavLink></p>

            {errors.map((err) => (
                <p style={{ color: "red" }} key={err}>{err}</p>
            ))}
        </form>
    );
}



export default LoginForm;


