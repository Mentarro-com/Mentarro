'use client'
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const YourComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [aboutAnimationProps, setAboutAnimationProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-100%)',
    config: { duration: 500 },
  }));
  const [rectangleAnimationProps, setRectangleAnimationProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(100%)',
    config: { duration: 500 },
  }));
  const [aboutRef, aboutInView] = useInView();
  const [rectangleRef] = useInView();

  useEffect(() => {
    if (aboutInView) {
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, [aboutInView]);

  useEffect(() => {
    if (isVisible) {
      setAboutAnimationProps({
        opacity: 1,
        transform: 'translateY(0%)',
      });
      setRectangleAnimationProps({
        opacity: 1,
        transform: 'translateY(0%)',
      });
    }
  }, [isVisible, setAboutAnimationProps, setRectangleAnimationProps]);

  return (
    <div className="flex flex-col lg:flex-row px-4 gap-x-40 lg:px-24 p-4 lg:p-28 lg:py-20 bg-gray-400 mb-4 justify-center items-center">
      
      <animated.div
        ref={aboutRef}
        className="relative z-10 w-full lg:w-[50%] max-w-lg bg-opacity-75 p-4 md:p-8 rounded-lg lg:mb-0 text-center"
        style={aboutAnimationProps as any} // Add type assertion here
      >
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8 text-black">About Us</h1>
          <p className="text-base md:text-lg lg:text-xl mb-4 text-red-600">
            We specialize in creating websites that fit your budget perfectly. At Nexus Info, we offer tailored website solutions designed for your business. Coupled with business growth ideas and strategies, our goal is to foster the expansion of your business. We believe in making every business thrive in both digital and offline realms. “Join the future trend of business with the help of Nexus Info, and let’s grow together.
          </p>
        </div>
      </animated.div>
      <animated.div
        ref={rectangleRef}
        className="relative z-10 w-full lg:w-[50%] max-w-xl mx-auto lg:mx-0 mt-8 lg:mt-0 text-center"
        style={rectangleAnimationProps as any} // Add type assertion here
      >
        <div className="h-96 lg:h-96 rounded-xl shadow-xl bg-gray-300 border-black" style={{ backgroundImage: 'url(./about.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </animated.div>
    </div>
  );
};

export default YourComponent;


