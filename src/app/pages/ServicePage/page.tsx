"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import Work from "@/app/components/Work";
import OurWork from "@/app/components/OurWork";
import Hovercard from "@/app/components/Hovercard";
import ServiceVideo from "@/app/components/ServiceVideo";
import ParallaBut from "@/app/components/ParallaBut";

function Index() {
  const [isVisible, setIsVisible] = useState(false);

  const aboutAnimationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 500 },
  });

  const rectangleAnimationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateY(-100%)",
    config: { duration: 500 },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);


  const data = [
    { description: "Aspire: Dare to dream big. With Mentarro, turn your career aspirations into reality through personalized guidance and support." },
    { description: "Achieve: Take charge of your future. Mentarro equips you with the tools and resources to set actionable goals and make tangible progress towards your professional ambitions." },
    { description: "Advance: Propel your career forward. Mentarro's expert mentors help you navigate obstacles and seize opportunities, ensuring continuous growth and advancement in your journey." }
  ];
  
  return (
    <div>
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 md:px-12 mt-[-90px]">
          <div className="flex flex-col md:flex-row items-center">
            <animated.div
              className="md:w-1/2 lg:w-2/3"
              style={aboutAnimationProps}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                Welcome to  <br className="hidden md:block" />
                <span className="text-red-600">Mentarro</span> 
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                We create beautiful and functional websites for businesses of
                all sizes.
              </p>
            </animated.div>
            <div className="md:w-1/2 lg:w-1/3">
              <Image
                src="https://www.svgrepo.com/show/164986/logo.svg"
                alt="Hero Image"
                className="rounded-lg shadow-lg mb-8"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt animate-top"></div>
            <Link href="#sectionId">
              <animated.h4
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                style={rectangleAnimationProps}
              >
                Learn more
              </animated.h4>
            </Link>
          </div>
        </div>
      </div>

      <OurWork />

      <div
        className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-14 mt-16 px-5 "
        id="sectionId"
      >
        {data.map((data, index) => (
      <Hovercard data={data} key={index}/>
    ))}
      </div>

      <ServiceVideo />
      <Work />
      {/* P */}
    </div>
  );
}

export default Index;
