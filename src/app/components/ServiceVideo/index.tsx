"use client"
import React from 'react';
const HeroVideo = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
          src="/intro.mp4"
          autoPlay muted loop></video>
      </div>
      <div className="video-content absolute top-10 left-0 right-0 text-center z-10">
        <h1 className="font-light text-6xl mr-16">Our Services</h1>
        <h3 className="font-light text-3xl mr-16">One Community Infinite Possibilities</h3>
      </div>
      <style jsx>{`
        .video-docker video {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
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
  );
};
export default HeroVideo;