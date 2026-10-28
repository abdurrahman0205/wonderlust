/**
 * Sign-in page (/login) — static design clone of the "Welcome Back" mock.
 * Email / Password, "Remember me" checkbox + Forgot password link, teal
 * Sign In button, Google button, "Don't have an account? Sign Up" link.
 * No submit action, no validation — just design, with input names
 * matching the fields.
 */
"use client";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { GoogleIcon } from "@/components/google-icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <section className="flex min-h-full w-full flex-col items-center bg-[#f7f7f7] px-4 pt-16 pb-24">
      {/* Heading */}
      <h1 className="text-4xl font-semibold tracking-tight">Welcome Back</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Resume your adventure with Wanderlust
      </p>

      {/* Card */}
      <div className="mt-10 w-full max-w-md border border-neutral-200 bg-white p-8 shadow-sm">
        {/* No submit action — kept empty per requirements. input names
            describe the form object shape. No hard validation. */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label
            htmlFor="login-email"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Email Address
            <span className="relative block">
              <Mail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="login-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="h-10 pl-9 font-normal"
              />
            </span>
          </label>

          <label
            htmlFor="login-password"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Password
            <span className="relative block">
              <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="h-10 pl-9 font-normal"
              />
            </span>
          </label>

          {/* Remember me + Forgot password row */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="login-rememberMe"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Checkbox name="rememberMe" id="login-rememberMe" />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm font-medium text-[#3d9ab8] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Primary submit — styled only, does nothing yet */}
          <Button
            type="submit"
            className="mt-2 h-11 w-full bg-[#3d9ab8] text-white hover:bg-[#3d9ab8]/90"
          >
            Sign In
          </Button>
        </form>

        {/* Divider + Google */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs text-muted-foreground">
            Or continue with
          </span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <Button
          type="button"
          variant="outline"
          className="mt-5 h-11 w-full font-normal"
        >
          <GoogleIcon className="size-4.5" />
          Sign Up With Google
        </Button>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#3d9ab8] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
