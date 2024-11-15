"use client";

import { useAuthActions } from "@convex-dev/auth/react";

const AuthPage = () => {
  const { signOut } = useAuthActions();
  return (
    <div>
      <h1>Logged In!</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default AuthPage;
