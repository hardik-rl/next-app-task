import React from 'react'
import Card from "@/shared/Card";
import HeadingLg from "@/shared/HeadingLg";
import blog1Img from "../../../public/images/blog1.png"

const Blog = () => {
    const blogData = [
        {
            "title": "The Ultimate Guide To Full-Body Workouts",
            "description": "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for all levels.",
            "author": "Alex Carter",
            "image": blog1Img
        },
        {
            "title": "HIIT Workout for Busy Schedules",
            "description": "A 15-minute high-intensity interval training session to boost metabolism and burn fat fast.",
            "author": "Samantha Reed",
            "image": blog1Img
        },
        {
            "title": "HIIT Workout for Busy Schedules",
            "description": "A 15-minute high-intensity interval training session to boost metabolism and burn fat fast.",
            "author": "Samantha Reed",
            "image": blog1Img
        },
        {
            "title": "HIIT Workout for Busy Schedules",
            "description": "A 15-minute high-intensity interval training session to boost metabolism and burn fat fast.",
            "author": "Samantha Reed",
            "image": blog1Img
        }
    ]
    return (
        <section className="bg-white">
            <div className="container py-60">
                <HeadingLg>Articles</HeadingLg>
                <div className="blog-grid">
                    {blogData.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog