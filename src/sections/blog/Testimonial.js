import Image from 'next/image';
import React, { useState } from 'react';
import { LeftIcon, RightIcon } from '../../shared/Icon';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Alex Carter",
      image: "https://picsum.photos/200/300",
      text:
        "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    },
    {
      name: "Sara Bennett",
      image: "https://picsum.photos/id/237/200/300",
      text:
        "With over a decade of experience in the fitnes by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    },
    {
      name: "Mike Johnson",
      image: "https://picsum.photos/seed/picsum/200/300",
      text:
        "With over a decade of experience in the fitness programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    },
    {
      name: "Emily Stone",
      image: "https://picsum.photos/200/600",
      text:
        "With over a decade of experience in the fitness industry, Alex specializes in strength programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, image, text } = testimonials[currentIndex];

  return (
    <div className="post-testimonial">
      <div className="post-testimonial__slider">
        <h4>About {name}</h4>
        <Image src={image} alt={name} width={100} height={100} />
        <p>{text}</p>
      </div>
      <div className="post-testimonial__btn">
        <div>
          <button onClick={goToPrevious}>
            <LeftIcon /> Previous
          </button>
          <p>5 Tips for Better Cardio Sessions</p>
        </div>
        <div>
          <button onClick={goToNext}>
            Next <RightIcon />
          </button>
          <p>Meal Prep Basics for Gym Enthusiasts</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
