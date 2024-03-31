'use client'

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { animated, useSpring } from "react-spring";

const MyComponent: React.FC = () => {

    const [hasShownAnimation, setHasShownAnimation] = useState<boolean>(false);
  
  useEffect(() => {
    // Check local storage to see if the animation has been shown before
    const hasShownBefore = localStorage.getItem('hasShownAnimation');
    if (hasShownBefore) {
      setHasShownAnimation(true);
    } else {
      // If not, set local storage to indicate that the animation has been shown
      localStorage.setItem('hasShownAnimation', 'true');
    }
  }, []);

  const animationProps = useSpring({
    opacity: hasShownAnimation ? 1 : 0,
    transform: hasShownAnimation ? 'translateY(0)' : 'translateY(-80px)',
    config: { duration: 500 }
  });
      
  return (
    <div>
    <div className="h-screen flex items-center justify-center">
      <video
        className=" absolute inset-0 object-cover w-full h-[89%] mt-20 "
        autoPlay
        loop
        muted
      >
        <source src="./video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

<animated.div
      className="relative z-10 max-w-md mx-auto bg-white bg-opacity-75 p-8 rounded-lg shadow-lg"
      style={animationProps}
    >
      <div className="text-lg lg:text-3xl font-bold text-black mb-4 relative">
        <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 lg:-translate-x-4 lg:-translate-y-4 text-3xl lg:text-5xl">
          &ldquo;
        </div>
        ONE <span className="text-red-600">COMMUNITY</span> <br /><span ></span> INFINITE{" "}
        <span className="text-red-600">POSSIBILITIES</span>..
        <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4 text-3xl lg:text-5xl">
          &rdquo;
        </div>
      </div>
    </animated.div>
    </div>
    {/* <div className="bg-black text-white font-extrabold text-3xl py-2">
    <Marquee pauseOnClick>
    Welcome to Mentarro – where connections are made, collaborations flourish, and communities thrive.
    </Marquee>
  </div>  */}
  </div> 
    
  );
};

export default MyComponent;
