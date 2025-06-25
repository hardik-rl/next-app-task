"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, description, author, image }) => {
  return (
    <Link className="articles-card" href={"/blog/my-first-post"}>
      <Image src={image} alt={title} height={229} width={"100%"}/>
      <div className="articles-card__content">
        <h3>{title}</h3>
        <p className="articles-card__description">{description}</p>
        <p className="articles-card__author">By {author}</p>
      </div>
    </Link>
  );
};

export default Card;
