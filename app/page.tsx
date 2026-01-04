'use client';

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to DenimForge Beta</h1>
          <p className="text-xl text-gray-300">Your dashboard is at /dashboard. Redirecting...</p>
        </div>
      </SignedIn>
    </>
  );
}