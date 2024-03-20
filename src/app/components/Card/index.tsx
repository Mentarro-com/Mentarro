import React from "react";
import Image, { StaticImageData } from "next/image";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

interface CardProps {
  bgCardSrc: StaticImageData;
  idCardSrc: StaticImageData;
  name: string;
  age: string;
  location: string;
  instagramLink: string;
  linkedInLink: string;
  isActive: boolean; 
}

const Index: React.FC<CardProps> = ({
  bgCardSrc,
  idCardSrc,
  name,
  age,
  location,
  instagramLink,
  linkedInLink,
  
}) => {
  return (
    <div >
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <main className="h-full  px-[25px] py-[66px] relative overflow-hidden flex items-center justify-center border-black transform transition-transform duration-300 hover:scale-110">
          <div className="relative z-10 max-w-[350px] max-h-[375px] ">
            <div>
              <Image
                src={bgCardSrc}
                alt="bgCardPatern"
                className="rounded-t-2xl w-full"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="bg-[#FFFFFF] flex flex-col items-center pb-[28px] pt-[56px] ">
              <h1 className="font-bold items-center text-[18px] mt-[20px]">{name}</h1>
              <span className="text-[#6A6F81]/50 ">{age}</span>
              <p className="text-[#6A6F81] ">{location}</p>
            </div>
            <div className="bg-[#FFFFFF] flex border-t-2 border-[#969696]/20 justify-evenly rounded-b-2xl p-[18px]">

              <div className="flex flex-col items-center">
                <h1 className="font-bold text-[18px]">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </h1>
                <p className="text-[#6A6F81]">Instagram</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-[18px]">
                  <a
                    href={linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </h1>
                <p className="text-[#6A6F81]">LinkedIn</p>
              </div>
            </div>
            <div className="absolute top-[23.5%] left-[36%] xl:top-[24.5%]  xl:left-[36%]">
              <Image
                src={idCardSrc}
                alt="id card"
                className="rounded-full border-[4px] border-[#FFFFFF]"
                width={100}
                height={100}
              ></Image>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;


