"use client";
import { SignInButton } from "@clerk/nextjs";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, description, author, image, isLocked, isLoading, slug }) => {
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
  if (isLocked) {
    return (
      <SignInButton mode="redirect">
        <div className="articles-card">
          <Image src={image} alt={title} height={229} width={229} loading="lazy" fetchPriority="high"/>
          <div className="articles-card__content">
            <h3>{title}</h3>
            <p className="articles-card__description">{description}</p>
            <p className="articles-card__author">By {author}</p>
          </div>
          <div className="articles-card__overlay">
            <div className="articles-card__lock-content">
              <Lock size={32} />
              <p className="lock-message">Login to unlock this article</p>
            </div>
          </div>
        </div>
      </SignInButton>
    );
  }

  if (!slug) {
    console.error("Card is missing slug for:", title);
  }

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
      <div className="articles-card">
        <Image src={image} alt={title} height={229} width={229} />
        <div className="articles-card__content">
          <h3>{title}</h3>
          <p className="articles-card__description">{description}</p>
          <p className="articles-card__author">By {author}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;