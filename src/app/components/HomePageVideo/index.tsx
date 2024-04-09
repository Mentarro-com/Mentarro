'use client'

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { animated, useSpring } from "react-spring";
import Image from "next/image";

const MyComponent: React.FC = () => {

    const [hasShownAnimtion, setHasShownAnimation] = useState<boolean>(false);
  
  useEffect(() => {
   
    const hasShownBefore = localStorage.getItem('hasShownAnimation');
    if (hasShownBefore) {
      setHasShownAnimation(true);
    } else {
      localStorage.setItem('hasShownAnimation', 'true');
    }
  }, []);

  const animationProps = useSpring({
    opacity: hasShownAnimtion ? 1 : 0,
    transform: hasShownAnimtion ? 'translateY(0)' : 'translateY(-80px)',
    config: { duration: 500 }
  });
      
  return (
    <div>
    <div className="h-screen flex items-center justify-center">
      
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

    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover "
          src="/intro.mp4"
          autoPlay muted loop></video>
      </div>
      <style jsx>{`
        .video-docker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
      `}</style>
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
