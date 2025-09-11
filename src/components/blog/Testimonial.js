import Image from 'next/image';
import React, { useState } from 'react';
import { LeftIcon, RightIcon } from '../../shared/Icon';
import avatar from "../../../public/images/alex.jpg";
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

  const { name, img, text } = testimonials[currentIndex];
console.log({img: img}, name, text);

  return (
    <div className="post-testimonial">
      <div className="post-testimonial__slider">
        <h4>About {name}</h4>
        <Image src={img} alt={name} width={100} height={100} />
        <p>{text}</p>
      </div>
      <div className="post-testimonial__btn">
        <div>
          <button onClick={goToPrevious}>
            <ArrowLeft /> Previous
          </button>
          <p>5 Tips for Better Cardio Sessions</p>
        </div>
        <div>
          <button onClick={goToNext}>
            Next <ArrowRight />
          </button>
          <p>Meal Prep Basics for Gym Enthusiasts</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
