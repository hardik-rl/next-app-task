import HeadingLg from '@/shared/HeadingLg';
import HeadingMd from '@/shared/HeadingMd';
import { LocationIcon, StarFillIcon, StarOutlineIcon } from '@/shared/Icon';
import React from 'react';

const guides = [
  {
    name: 'Miranda Rachel',
    location: 'Jombang, Jawa timur',
    rating: 4,
    image: 'https://picsum.photos/512/300',
  },
  {
    name: 'Danielle Marsh',
    location: 'Wonosobo, Jawa tengah',
    rating: 4,
    image: 'https://picsum.photos/512/300',
  },
  {
    name: 'Kang Haerin',
    location: 'Bandung, Jawa barat',
    rating: 5,
    image: 'https://picsum.photos/512/300',
  },
];

const TourGuideList = () => {
  return (
    <div className="tour-guide">
      <HeadingMd>Tour Guides</HeadingMd>
      {guides.map((guide, index) => (
        <div className="tour-guide__card" key={index}>
          <div>
            <img src={guide.image} alt={guide.name} />
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
            <StarOutlineIcon />
            <span>({guide.rating.toFixed(1)})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourGuideList;
