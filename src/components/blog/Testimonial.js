import Image from 'next/image';
import React, { useState } from 'react';
import { LeftIcon, RightIcon } from '../../shared/Icon';
import avatar from "../../../public/images/alex.jpg";

const Testimonial = ({testimonials}) => {

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
