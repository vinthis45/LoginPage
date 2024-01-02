import React, { useState } from "react";
import styles from "./Login.module.css"

function XLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            setMessage("Please fill both username and password fields.");
            return;
        }
        if (username === "user" && password === "password") {
            setMessage("Welcome, " + username + "!");
        } else {
            setMessage("Invalid username or password");
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.formEle} onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <label className={styles.label} htmlFor="username">Username</label>
                <input
                    className={styles.input}
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label className={styles.label} htmlFor="password">Password</label>
                <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className={styles.button} type="submit">Submit</button>
            </form>

            {message && <div style={{ marginTop: 10, color: "red"}}>{message}</div>}
        </div>
    );
}

export default XLogin;
