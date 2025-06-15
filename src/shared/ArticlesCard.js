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
            "title": "5 Tips for Better Cardio Sessions",
            "description": "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
            "author": "Maya Lee",
            "image": blog2Img
        },
        {
            "title": "Meal Prep Basics for Gym Enthusiasts",
            "description": "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
            "author": "Jordan Smith",
            "image": blog3Img
        },
        {
            "title": "Building Core Strength: Exercises and Benefits",
            "description": "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
            "author": "Emma Rodriguez",
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