import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCard = ({ setState }: SignInCardProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription className="">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />

          <div className="relative">
            <Input
              disabled={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />
            {showPassword ? (
              <LuEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 cursor-pointer"
              />
            ) : (
              <LuEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 cursor-pointer"
              />
            )}
          </div>
          <div className="relative">
            <Input
              disabled={false}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              required
            />
            {showConfirmPassword ? (
              <LuEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-3 right-3 cursor-pointer"
              />
            ) : (
              <LuEyeOff
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-3 right-3 cursor-pointer"
              />
            )}
          </div>
          <Button size="lg" className="w-full" type="submit" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            variant="outline"
            disabled={false}
            onClick={() => {}}
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            disabled={false}
            onClick={() => {}}
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-3.5 left-2.5" />
            Continue with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          You already have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
