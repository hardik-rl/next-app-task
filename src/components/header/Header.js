"use client";
import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Header = () => {
    return (
        <header className="flex justify-end p-4 bg-gray-100">
            <SignedOut>
                <SignInButton mode="redirect">
                    <button className="px-4 py-2 btn">
                        Login
                    </button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </header>
    );
};

export default Header;
