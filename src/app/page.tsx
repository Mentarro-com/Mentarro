'use client'

import Feature from "./components/Feature/feature";
import First from "./components/First/index";
import Second from "./components/Second/index";
import Marquee from "react-fast-marquee";
import Parallax from "./components/Parallax/index";
import Contact from "./components/Contact";
import Flip from "./components/Flip/index"
import Techslider from "./components/Techslider/index";


export default function Home() {
  return (
    <div className="bg-white">
      <First />
      <div className="bg-black text-white font-extrabold text-3xl py-2">
        <Marquee pauseOnClick>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      
      <Feature />
      <Parallax />
      <Second />
      <Contact />
      <Techslider />
      
<Flip />
      
    </div>
  );
}
