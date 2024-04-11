"use client"
import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiGraphql, SiKubernetes } from 'react-icons/si';
import { TbBrandVercel } from "react-icons/tb";

const TechStackMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.tech-item');

    let totalWidth = 0;
    items.forEach(item => {
      totalWidth += item.clientWidth;
    });

    const clonedItems = Array.from(items).map(item => item.cloneNode(true) as HTMLElement);
    clonedItems.forEach(clonedItem => {
      container.appendChild(clonedItem);
    });

    let animationFrame: number;
    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      container.scrollTo(scrollAmount, 0);
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    scroll();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="text-white font-extrabold text-3xl py-9 mb-12">
      <h1 className='text-black ml-20 mb-12 py-3'><span className='text-red-600'>Tech</span> Stacks </h1>
      <Marquee pauseOnClick>
        <div className="overflow-hidden px-4 md:px-0">
          <div ref={containerRef} className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 xl:space-x-28 text-6xl">
            <div className="tech-item flex items-center">
              <FaReact className='text-blue-500'/>
            </div>
            <div className="tech-item flex items-center">
              <FaNodeJs className='text-green-400' />
            </div>
            <div className="tech-item flex items-center">
              <SiTailwindcss className='text-blue-500'/>
            </div>
            <div className="tech-item flex items-center">
              <SiGraphql  className='text-pink-600'/>
            </div>
            <div className="tech-item flex items-center">
              <SiTypescript className='text-blue-700' />
            </div>
            <div className="tech-item flex items-center">
              <FaDocker className='text-blue-500' />
            </div>
            <div className="tech-item flex items-center">
              <FaAws className='text-orange-500'/>
            </div>
            <div className="tech-item flex items-center">
              <SiKubernetes className='text-blue-700'/>
            </div>
            <div className="tech-item flex items-center">
              <TbBrandVercel className='text-black'/>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TechStackMarquee;
