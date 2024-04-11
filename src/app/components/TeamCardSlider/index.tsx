import React, { useState, useEffect } from "react";
import Card from "../Card/index";
import bgCard from "../../../../public/bg-pattern-card.svg";
import idCard from "../../../../public/logith.jpg";
import logith from "../../../../public/logith.jpg";
import lokesh from "../../../../public/lokesh.jpeg";
import jeevan from "../../../../public/jeevan.jpeg";
import haresh from "../../../../public/haresh.jpeg";
import jemila from "../../../../public/jem.jpeg";
import jp from "../../../../public/jp.jpeg";
import siva from "../../../../public/siva.png";

const TestimonialSlider: React.FC = () => {
  const cardData = [
    {
      bgCardSrc: bgCard,
      idCardSrc: logith,
      name: "Logith Ramesh",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/logith_ramesh",
      linkedinLink: "https://www.linkedin.com/in/logith-r-7a1293216",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: lokesh,
      name: "Lokesh Kumar",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/_mr_l_o_k_i_",
      linkedinLink: "https://www.linkedin.com/in/lokesh-kumar-v-b2330a21a",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: jp,
      name: "Jayaprakash",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/jaya_prakash_254",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: jeevan,
      name: "Jeevan",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/mr._user_777",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: jemila,
      name: "Jemila Sharlet",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/jimmy_scary",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: haresh,
      name: "Haresh",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/harxsh.03",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: siva,
      name: "Siva",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/ngc1889_siva?igsh=YWsxOWJ6ZzZqdGEx",
      linkedinLink: "https://www.linkedin.com/in/siva-sangaran-b26b95202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change the delay to 2 seconds

    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div className="relative h-[400px] bg-fixed">
      <h1 className="text-center text-2xl mt-4">Our Team</h1>

      <div className="overflow-hidden">
        <div className="flex transition-transform ease-in-out duration-1000" style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}>
          {[...cardData, ...cardData, ...cardData].map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/3">
              <Card
                bgCardSrc={card.bgCardSrc}
                idCardSrc={card.idCardSrc}
                name={card.name}
                age={card.age}
                location={card.location}
                instagramLink={card.instagramLink}
                linkedInLink={card.linkedinLink}
                isActive={index === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
