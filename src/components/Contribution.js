import React from 'react';
import AnimatedCounter from './AnimatedCounter';


function Contribution() {
    
  return (
    <div className='contributionWrapper'>
        <h2>Our Contribution</h2>
        <p>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. 
            Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital 
            interactions guarantees unparalleled benefits for our clientele.</p>
        <div className='customCount'>
            <AnimatedCounter />
        </div>
    </div>
  )
}

export default Contribution