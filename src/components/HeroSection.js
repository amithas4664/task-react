import { Button } from 'antd'
import React from 'react'

function HeroSection() {
  return (
    <div className='hero-section'>
         <h1>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>
        <div className='img-wrapper'>
            <img src='./images/banner-img.jpg' alt='bannerImg' />
        </div>
        <h2>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, 
            experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie
             survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your
              friends. Find it all in Fortnite ... Drop In.</h2>
        <Button type='primary' className='primary-btn'>Visit Website</Button>
    </div>
  )
}

export default HeroSection