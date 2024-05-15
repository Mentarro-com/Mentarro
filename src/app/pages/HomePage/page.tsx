'use client'

import HomePageVideo from "@/app/components/HomePageVideo/index";
import HomeAboutUs from "@/app/components/HomeAboutUs/index";
import TeamCardSlider from "@/app/components/TeamCardSlider/index";
import HomeSecondVideo from "@/app/components/HomeSecondVideo/index";
import ContactForm from "@/app/components/ContactForm";
import Techslider from "@/app/components/Techslider/index";
import FlipCard from "@/app/components/FlipCard/index";
import Marquee from "react-fast-marquee";

export default function Home() {
    return (
      <div className="bg-white">
        <HomePageVideo  />
        <HomeAboutUs />
        {/* <TeamCardSlider/> */}
        <HomeSecondVideo/>
        <ContactForm />
        <Techslider />
        <FlipCard />
      </div>
    );
  }