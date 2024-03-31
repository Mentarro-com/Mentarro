'use client'
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const [ref, inView] = useInView();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const buttonAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : -100, // Adjust this value for initial position
    from: { opacity: 0, marginTop: -100 }, // Adjust this value for initial position
    config: { duration: 1000 },
    delay: 1000 // 1 second delay
  });
  

  const headingAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(100px)',
    from: { opacity: 0, transform: 'translateX(100px)' },
    config: { duration: 1000 },
    delay: 1000 // 1 second delay
  });

  return (
    <div className='py-8 mt-36' ref={ref}>
      <div className="ml-9 mr-9 h-[620px] border border-neutral-600 rounded-xl mb-4 relative overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full filter backdrop-blur-0">
          <source src="./second.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 mb-4 ml-4 text-left text-white">
          <h1 className="text-slate-300"></h1>
          <div className="mt-24 ml-5">
      <animated.button
        ref={buttonRef}
        style={buttonAnimationProps}
        className="bg-blue-500 w-36 hover:bg-blue-700 text-white border-[3px] border-gray-300 font-bold py-2 px-4 rounded-2xl shadow-md transition duration-300 ease-in-out"
      >
        App Crafting
      </animated.button>
      <animated.h1
        ref={headingRef}
        style={headingAnimationProps}
        className="mt-2 p-2 text-3xl w-70 text-white font-bold serif"
      >
        As pioneers in the field of digital community development, Mentarro is renowned for its unwavering dedication to crafting unparalleled online experiences.
      </animated.h1>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
