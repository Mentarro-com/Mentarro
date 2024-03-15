'use client'
import React, { useState, useEffect } from 'react';
import Card from '../Card/index'

import Card1 from '../Team/logith'
import Card2 from '../Team/lokesh'
import Card3 from '../Team/jayaprakash'
import Card4 from '../Team/jeevan'



const TestimonialSlider: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ligula euismod, ullamcorper mi nec, laoreet orci. Ut congue gravida felis, ut vestibulum ligula malesuada id.',
    },
    {
      name: 'Jane Smith',
      quote: 'Sed tincidunt libero non fermentum sollicitudin. Integer tincidunt tortor nec ex rhoncus auctor. In hac habitasse platea dictumst. Integer id tortor efficitur, dictum nunc vel, ultrices est.',
    },
    {
      name: 'Mark Johnson',
      quote: 'Vestibulum eu ante ac est ullamcorper vulputate. Integer iaculis nisi ac lectus consequat eleifend. Duis volutpat velit sed interdum iaculis.',
    },
    {
      name: 'Emily Brown',
      quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Integer id augue sed lorem consequat auctor.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative h-[400px] bg-fixed">
     <h1 className='text-center text-2xl'>Our Team</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
  <div className="flex justify-center">
    <Card1 />
  </div>
  <div className="flex justify-center">
    <Card2 />
  </div>
  <div className="flex justify-center">
    <Card3 />
  </div>
  <div className="flex justify-center">
    <Card4 />
  </div>
</div>


    </div>
  );
};

export default TestimonialSlider;



