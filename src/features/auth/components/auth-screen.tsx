"use client";

import SignInCard from "./sign-in-card";
import { SignInFlow } from "../types";
import SignUpCard from "./sign-up-card";
import { useState } from "react";
export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="h-screen flex items-center justify-center bg-[#5C3B58]">
      <div className="md:height-auto md:width-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
