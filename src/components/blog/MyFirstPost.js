"use client";
import React from "react";
import HeadingLg from "@/shared/HeadingLg";
import Image from "next/image";
import Testimonial from "./Testimonial";
import Link from "next/link";
import TourGuideList from "./TourGuideList";
import PostCard from "./PostCard";

const MyFirstPost = ({ blog }) => {
  return (
    <section className="bg-white">
      <nav className="breadcrumb pt-64">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/blog" className="breadcrumb__active">Articles</a>
        <span>/</span>
        <span>{blog.title}</span>
      </nav>

      <HeadingLg>{blog.title}</HeadingLg>

      <div className="hero-banner">
        <Image
          src={blog.cover} 
          alt={blog.title}
          width={1200}
          height={600}
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
      </div>

      <div className="container">
        <div className="row">
          {/* Post Content */}
          <div className="col-9">
            <div className="post-header">
              <div className="post-header__author">
                <Image
                  src={blog.authorImg || "/images/default-avatar.png"}
                  alt={blog.author}
                  width={50}
                  height={50}
                />
                <span>{blog.author}</span>
              </div>
              <span className="post-header__date">{blog.date}</span>
            </div>

            <div className="post-content">
              {blog.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <Testimonial testimonials={blog.testimonials}/>
          </div>

          {/* Sidebar */}
          <div className="col-3">
            <Link href={"#0"} className="explore-more-link">
              Explore more
            </Link>
            <PostCard
              image="https://picsum.photos/512/300"
              category="Travel"
              date="20 July 2022"
              description="Two women in local stand are chatting during morning.."
            />
            <PostCard
              image="https://picsum.photos/512/300"
              category="Travel"
              date="21 July 2022"
              description="Enjoying the sunset on Padar island together"
            />
            <TourGuideList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFirstPost;
