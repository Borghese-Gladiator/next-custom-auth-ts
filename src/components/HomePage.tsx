import { useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function HomePage() {
  const { data: user } = useCurrentUser();
  console.log('user', user);

  return (
    <>
      <h1>HOME</h1>

      <p>Only authenticated users can access this page.</p>
    </>
  );
}