
import './App.css';
import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault(e);
    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      {
        isSubmitted ? (
          <div>
            <p>Welcome, {username}!</p>
          </div>
        ) : (
          <form onSubmit={submitHandler} >
            {error && <p className='error'>{error}</p>}
            <div className="form">
              <label htmlFor="username">
                Username: {" "}
                <input id="username" onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder='username' value={username} required/>
              </label>
              <label htmlFor="password">
                Password: {" "}
                <input id="password" onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder='password' value={password} required/>
              </label>
              <button type='submit'>Submit</button>
            </div>
          </form>
        )
      }
    </div>
  );
}

export default App;
