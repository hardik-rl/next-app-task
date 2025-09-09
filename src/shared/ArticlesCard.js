"use client";
import React, { useEffect, useState } from "react";
import Card from "@/shared/Card";
import { useUser } from "@clerk/nextjs";

const ArticlesCard = () => {
    const { isSignedIn, isLoaded } = useUser();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blogs");
                if (!res.ok) throw new Error("Failed to fetch blogs");
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="blog-grid">
            {blogs.map((item) => (
                <Card
                    key={item.slug}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    image={item.image}
                    slug={item.slug}
                    isLocked={item.isLocked && !isSignedIn}
                    isLoading={!isLoaded}
                />
            ))}
        </div>
    );
};

export default ArticlesCard;
