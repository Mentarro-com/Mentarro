import React from 'react'
import Image from 'next/image'
import bgCard from "../../../../public/bg-pattern-card.svg";
import idCard from "../../../../public/image-victor.jpg";
import bgPatternBottom from "../../../../public/bg-pattern-bottom.svg";
import bgPatternTop from "../../../../public/bg-pattern-top.svg";

const index = () => {
  return (
    <div>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <main className="h-full font-Kumbh px-[25px] py-[66px] relative overflow-hidden flex items-center justify-center">
        <div className="relative z-10 max-w-[350px] max-h-[375px] ">
          <div className="">
            <Image
              src={bgCard}
              alt="bgCardPatern"
              className="rounded-t-2xl w-full"
            ></Image>
          </div>
          <div className="bg-[#FFFFFF] flex flex-col items-center pb-[28px] pt-[56px]">
            <h1 className="font-bold text-[18px] mt-[10px]">
              Victor Crest <span className="ml-1  text-[#6A6F81]/50 ">26</span>
            </h1>
            <p className="text-[#6A6F81] ">London</p>
          </div>
          <div className="bg-[#FFFFFF] flex border-t-2 border-[#969696]/20 justify-evenly rounded-b-2xl p-[18px]">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[18px]">80K</h1>
              <p className="text-[#6A6F81]">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[18px]">803K</h1>
              <p className="text-[#6A6F81]">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[18px]">1.4K</h1>
              <p className="text-[#6A6F81]">Photos</p>
            </div>
          </div>
          <div className="absolute top-[23.5%] left-[36%] xl:top-[24.5%]  xl:left-[36%]">
            <Image
              src={idCard}
              alt="id card"
              className="rounded-full border-[4px] border-[#FFFFFF]"
            ></Image>
          </div>
        </div>
        <Image
          src={bgPatternTop}
          alt="bgTop"
          className="absolute  top-[-175px] xl:top-[-475px] left-[-175px] xl:left-[-300px] z-0 "
        ></Image>
        <Image
          src={bgPatternBottom}
          alt="bgPatternBottom"
          className="absolute bottom-[-150px] xl:bottom-[-550px] right-[-260px] xl:right-[-325px]  scale-150 xl:scale-100 z-0"
          width="978"
          height="978"
        ></Image>
      </main>
      </div>
    </div>
  )
}

export default index


