import React from 'react'
import HeadingLg from "@/shared/HeadingLg";
import ArticlesCard from '@/shared/ArticlesCard';

const Blog = () => {
    return (
        <section className="bg-white min-h-100">
          
            <div className="container py-60">
                <HeadingLg>Articles</HeadingLg>
                <ArticlesCard />
            </div>
        </section>
    )
}

export default Blog