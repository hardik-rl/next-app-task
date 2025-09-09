"use client";
import { SignInButton } from "@clerk/nextjs";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, description, author, image, isLocked, isLoading }) => {
  if (isLoading) {
    return (
      <div className="articles-card skeleton">
        <div className="skeleton-img" />
        <div className="articles-card__content">
          <div className="skeleton-title" />
          <div className="skeleton-text" />
          <div className="skeleton-text short" />
        </div>
      </div>
    );
  }

  const cardContent = (
    <div className="articles-card">
      <Image src={image} alt={title} height={229} width={"100%"} />
      <div className="articles-card__content">
        <h3>{title}</h3>
        <p className="articles-card__description">{description}</p>
        <p className="articles-card__author">By {author}</p>
      </div>

      {isLocked && (
        <div className="articles-card__overlay">
          <div className="articles-card__lock-content">
            <div className="lock-icon">
              <Lock size={32} />
            </div>
            <p className="lock-message">Sign in to read this exclusive content</p>
          </div>
        </div>
      )}
    </div>
  );

   if (isLocked) {
    return (
      <SignInButton mode="redirect">
        {cardContent}
      </SignInButton>
    );
  }

  return <Link className="articles-card" href={"/blog/my-first-post"}>{cardContent}</Link>;
};

export default Card;
