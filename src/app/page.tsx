'use client'

import Image from "next/image";
import Header from "./components/Header/index";
import Feature from "./components/Feature/feature";
import First from "./components/First/index";
import Second from "./components/Second/index";
import Marquee from "react-fast-marquee";
import Parallax from "./components/Parallax/index";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <First />
      <div className="bg-black text-white font-extrabold text-3xl py-2">
        <Marquee pauseOnClick>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Feature />
      
      <Second />
      <Contact />
      <Parallax />
      
      
    </div>
  );
}
