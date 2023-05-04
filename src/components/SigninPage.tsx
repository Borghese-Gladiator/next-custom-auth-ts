import { useState } from "react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = async (e: any) => {
    e.preventDefault();
    // Signin logic
  };

  return (
    <>
      <h1>SignIn</h1>

      <p>Only unauthenticated users can access this page.</p>

      <form onSubmit={signinHandler}>
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
        <button>SignIn</button>
      </form>
    </>
  );
}