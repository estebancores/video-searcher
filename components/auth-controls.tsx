"use client";

import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function AuthControls() {
  return (
    <>
      <Show when="signed-out">
        <SignInButton>
          <Button variant="tertiary" size="md">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button variant="primary" size="md">
            Sign Up
          </Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  );
}
