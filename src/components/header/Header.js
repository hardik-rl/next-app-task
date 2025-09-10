"use client";
import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

const Header = () => {
    return (
        <header className="flex justify-end p-4 bg-gray-100">
            <SignedOut>
                <SignInButton mode="redirect">
                    <button className="login-btn">
                        Login <LogIn size={20} />
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
