import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import {  SiTailwindcss, SiTypescript, SiGraphql, SiKubernetes } from 'react-icons/si';

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
    <div className=" text-white font-extrabold text-3xl py-9">
        <Marquee pauseOnClick>
          
        <div className="overflow-hidden gap-9 ">
      <div ref={containerRef} className="flex space-x-28 text-6xl">
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
          <FaDatabase className='text-violet-500'/>
        </div>
        
      </div>
    </div>
        </Marquee>
    </div>
    
  );
};

export default TechStackMarquee;
