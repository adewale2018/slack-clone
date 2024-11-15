import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuEye, LuEyeOff } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn} = useAuthActions()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[pending, setPending] = useState(false);

  const handleProviderSignIn = (value: 'github' | 'google') => {
    setPending(true);
    signIn(value)
    .finally(() => {
      setPending(false)
    })
  }

  const handleSignIn = (value: 'github' | 'google') => {
    setPending(true);
    signIn(value)
    .finally(() => {
      setPending(false)
    })
  }

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription className="">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />

          <div className="relative">
            <Input
              disabled={pending}
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
          <Button size="lg" className="w-full" type="submit" disabled={pending}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            variant="outline"
            disabled={pending}
            onClick={() => handleSignIn('google')}
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            disabled={pending}
            onClick={() => handleProviderSignIn('github')}
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-3.5 left-2.5" />
            Continue with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setState("signUp")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
