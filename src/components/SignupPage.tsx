// pages/signup.js

import Layout from "../components/Layout";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();
    // signup logic
  };

  return (
    <>
      <h1>SignUp</h1>

      <p>Only unauthenticated users can access this page.</p>

      <form onSubmit={signupHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>SignUp</button>
      </form>
    </>
  );
}