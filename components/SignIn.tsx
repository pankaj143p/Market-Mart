"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <>
      {/* Show UserButton when signed in */}
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8"
            }
          }}
          showName={false}
        />
      </SignedIn>
      
      {/* Show SignIn button when signed out */}
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect">
            Login
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default SignIn;
