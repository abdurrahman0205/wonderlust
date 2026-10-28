/**
 * Sign-up page (/signup) — static design clone of the "09_Sign Up" mock.
 * Centered card: Full Name / Email / Password / Confirm Password, teal
 * Create Account button, Google button, and the "Already have an
 * account? Sign In" link. No submit action, no validation — just design,
 * with input names matching the fields.
 */
"use client";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { GoogleIcon } from "@/components/google-icon";

/* Render on demand — no static prerender or caching site-wide per project requirement. */
// export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* Render on demand — no static prerender or caching site-wide per project requirement. */
export const dynamic = "force-dynamic";

export default function SignUpPage() {
  return (
    <section className="flex min-h-full w-full flex-col items-center bg-[#f7f7f7] px-4 pt-16 pb-24">
      {/* Heading */}
      <h1 className="text-4xl font-semibold tracking-tight">Create Account</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Start your adventure with Wanderlust
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
            htmlFor="signup-fullName"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Full Name
            <span className="relative block">
              <User className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="signup-fullName"
                name="fullName"
                type="text"
                placeholder="Enter your name"
                className="h-10 pl-9 font-normal"
              />
            </span>
          </label>

          <label
            htmlFor="signup-email"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Email Address
            <span className="relative block">
              <Mail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="signup-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="h-10 pl-9 font-normal"
              />
            </span>
          </label>

          <label
            htmlFor="signup-password"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Password
            <span className="relative block">
              <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="signup-password"
                name="password"
                type="password"
                placeholder="Create a password"
                className="h-10 pl-9 font-normal"
              />
            </span>
          </label>

          <label
            htmlFor="signup-confirmPassword"
            className="flex flex-col gap-1.5 text-sm font-medium"
          >
            Confirm Password
            <span className="relative block">
              <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="signup-confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="h-10 pl-9 font-normal"
              />
            </span>
          </label>

          {/* Primary submit — styled only, does nothing yet */}
          <Button
            type="submit"
            className="mt-2 h-11 w-full bg-[#3d9ab8] text-white hover:bg-[#3d9ab8]/90"
          >
            Create Account
          </Button>
        </form>

        {/* Divider + Google */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs text-muted-foreground">Or sign up with</span>
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#3d9ab8] hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
