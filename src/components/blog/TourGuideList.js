import HeadingMd from '@/shared/HeadingMd';
import { LocationIcon, StarFillIcon, StarOutlineIcon } from '@/shared/Icon';
import React from 'react';
import guide1 from "../../../public/images/guide1.png";
import guide2 from "../../../public/images/guide2.png";
import guide3 from "../../../public/images/guide3.png";
import Image from 'next/image';

const guides = [
  {
    name: 'Miranda Rachel',
    location: 'Jombang, Jawa timur',
    rating: 4,
    image: guide1,
  },
  {
    name: 'Danielle Marsh',
    location: 'Wonosobo, Jawa tengah',
    rating: 4,
    image: guide2,
  },
  {
    name: 'Kang Haerin',
    location: 'Bandung, Jawa barat',
    rating: 5,
    image: guide3,
  },
];

const TourGuideList = () => {
  return (
    <div className="tour-guide">
      <HeadingMd>Tour Guides</HeadingMd>
      {guides.map((guide, index) => (
        <div className="tour-guide__card" key={index}>
          <div>
            <Image src={guide.image} alt={guide.name} height={48} width={48} />
            <div className="flex-1">
              <h4>{guide.name}</h4>
              <p>
                <LocationIcon /> {guide.location}
              </p>
            </div>
          </div>
          <div className="tour-guide__card-rating">
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarOutlineIcon />
            <span>({guide.rating.toFixed(1)})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourGuideList;
