import React, { useState, useEffect } from 'react';

const AnimatedCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const target1 = 5; // 5M
    const target2 = 500; // $500K
    const target3 = 10; // 10X
    let current1 = 0;
    let current2 = 0;
    let current3 = 0;

    const interval1 = setInterval(() => {
      if (current1 < target1) {
        current1 += Math.ceil(target1 / 50);
        setCount1(current1);
      } else {
        clearInterval(interval1);
      }
    }, 100);

    const interval2 = setInterval(() => {
      if (current2 < target2) {
        current2 += Math.ceil(target2 / 50);
        setCount2(current2);
      } else {
        clearInterval(interval2);
      }
    }, 100);

    const interval3 = setInterval(() => {
      if (current3 < target3) {
        current3++;
        setCount3(current3);
      } else {
        clearInterval(interval3);
      }
    }, 100);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className='counter'>
       <div>
       <h5>{count1.toLocaleString()}M</h5>
       <p>Daily User <br /> Engagements </p>
       </div>
       <div>
       <h5>${count2.toLocaleString()}K</h5>
      <p>Revenue Surge for an
        Platform
        </p>
       </div>
     <div>
            <h5>{count3}X</h5>
            <p>ROAS on all our 
        marketing campaigns</p>
     </div>
    </div>
  );
};

export default AnimatedCounter;
