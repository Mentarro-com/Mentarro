'use client'
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const YourComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const content = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 800 },
  });

  const image = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateY(100%)",
    config: { duration: 800 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPosition = windowHeight * 0.45;

      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
<div>

<section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <animated.div style={content}>
            <div className="max-w-lg ml-14">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">Welcome to Mentarro, a digital space dedicated to fostering connections, promoting collaboration, and empowering individuals to thrive within a vibrant community ecosystem. 
At Mentarro, we believe in the power of unity, diversity, and shared experiences. Our platform serves as a dynamic hub where people from all walks of life can come together, exchange ideas, and embark on meaningful journeys of personal and collective growth.</p>
                <div className="mt-8">
                <Link href="#" className="text-blue-500 hover:text-blue-600 font-medium">
Learn more about us
        <span className="ml-2">&#8594;</span>

    </Link>
                </div>
            </div>
            </animated.div>
            <animated.div style={image}>
            <div className="mt-12 md:mt-0 shadow-2xl mr-16">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md">
                </img>
            </div>
            </animated.div>
        </div>
    </div>
</section>



    </div>
    </div>
  );
};

export default YourComponent;


