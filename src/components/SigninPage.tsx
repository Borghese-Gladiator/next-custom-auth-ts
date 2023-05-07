import { useState } from "react";
import useSignin from "../hooks/useSignin";

export default function SigninPage() {
  const { mutate: signinMutate } = useSignin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = async (e: any) => {
    e.preventDefault();
    signinMutate({ email, password });
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