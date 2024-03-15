
import React from 'react';
import CardComponent from './cardComponent';

const cardWrapper = () => {
  return (
    <>
      <div className='cardWrapper'>
        <CardComponent
          imageUrl="images/card-img1.jpg"
          description="Explore large, destructible environments where no two games are ever the same."
        />
        <CardComponent
          imageUrl="images/card-img2.png"
          description="Description for card 2Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale"
        />
        <CardComponent
          imageUrl="images/card-img3.jpg"
          description="Discover even more ways to play across thousands of creator-made game genres"
        />
      </div>
    </>
  );
};

export default cardWrapper;
