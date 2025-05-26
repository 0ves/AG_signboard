"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup_page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        action=""
        className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div>
            <Link href="/" aria-label="go home">
              <Logo />
            </Link>
            <h1 className="text-title mb-1 mt-4 text-xl font-semibold">
              Create a AG Production Account
            </h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                User email
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pwd" className="text-title text-sm">
                Password
              </Label>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/user",
                  {
                    email,
                    password,
                  }
                );
                router.push("/");
              }}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 focus:ring-4
                        *:focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Sign in
            </button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="#">Sign In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
