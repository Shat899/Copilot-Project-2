"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-black">
      <Link href="/" className="text-lg font-semibold">
        Link Shortener
      </Link>
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <>
            <SignInButton mode="modal">
              <button className="text-sm font-medium hover:underline">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-sm font-medium hover:underline">
                Sign up
              </button>
            </SignUpButton>
          </>
        )}
      </div>
    </nav>
  );
}
