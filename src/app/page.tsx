'use client'

import About from "./components/About/about";
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
      <About />
      <Parallax />
      <Second />
      <Contact />
      <Techslider />
      <Flip />
    </div>
  );
}
