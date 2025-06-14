import React from 'react'
import blog1Img from "../../public/images/blog1.png";
import blog2Img from "../../public/images/blog2.png";
import blog3Img from "../../public/images/blog3.png";
import blog4Img from "../../public/images/blog4.png";
import Card from "@/shared/Card";

const ArticlesCard = () => {
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
            "image": blog2Img
        },
        {
            "title": "HIIT Workout for Busy Schedules",
            "description": "A 15-minute high-intensity interval training session to boost metabolism and burn fat fast.",
            "author": "Samantha Reed",
            "image": blog3Img
        },
        {
            "title": "HIIT Workout for Busy Schedules",
            "description": "A 15-minute high-intensity interval training session to boost metabolism and burn fat fast.",
            "author": "Samantha Reed",
            "image": blog4Img
        }
    ]
    return (
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
    )
}

export default ArticlesCard