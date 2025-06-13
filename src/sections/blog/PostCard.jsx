import Image from 'next/image';
import React from 'react';

const PostCard = ({ image, category, date, description }) => {
    return (
        <div className="post-card">
            <Image src={image} alt={description} layout="responsive" width={301} height={165} />
            <div className="post-card__content">
                <span>{category}</span>
                <span>|</span>
                <span>{date}</span>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default PostCard;
