// 'use client'

// import React, { useState, useEffect } from "react";
// import Card from "../Card/index";
// import bgCard from "../../../../public/bg-pattern-card.svg";
// import idCard from "../../../../public/logith.jpg";

// const TestimonialSlider: React.FC = () => {
//   const cardData = [
//     {
//       bgCardSrc: bgCard,
//       idCardSrc: idCard,
//       name: "Logith Ramesh",
//       age: "21",
//       location: "Chennai",
//       instagramLink: "https://www.instagram.com/logith_ramesh",
//       linkedinLink: "https://www.linkedin.com/in/logith-r-7a1293216",
//     },
//     {
//       bgCardSrc: bgCard,
//       idCardSrc: idCard,
//       name: "Lokesh Kumar",
//       age: "21",
//       location: "Chennai",
//       instagramLink: "https://www.instagram.com/_mr_l_o_k_i_",
//       linkedinLink: "https://www.linkedin.com/in/lokesh-kumar-v-b2330a21a",
//     },
//     {
//       bgCardSrc: bgCard,
//       idCardSrc: idCard,
//       name: "Jayaprakash",
//       age: "21",
//       location: "Chennai",
//       instagramLink: "https://www.instagram.com/jaya_prakash_254",
//       linkedinLink: "https://www.linkedin.com/in/victor_crest",
//     },
//     {
//       bgCardSrc: bgCard,
//       idCardSrc: idCard,
//       name: "Jeevan",
//       age: "21",
//       location: "Chennai",
//       instagramLink: "https://www.instagram.com/mr._user_777",
//       linkedinLink: "https://www.linkedin.com/in/victor_crest",
//     },
//     {
//       bgCardSrc: bgCard,
//       idCardSrc: idCard,
//       name: "Jemila Sharlet",
//       age: "21",
//       location: "Chennai",
//       instagramLink: "https://www.instagram.com/jimmy_scary",
//       linkedinLink: "https://www.linkedin.com/in/victor_crest",
//     },
//     {
//       bgCardSrc: bgCard,
//       idCardSrc: idCard,
//       name: "Haresh",
//       age: "21",
//       location: "Chennai",
//       instagramLink: "https://www.instagram.com/harxsh.03",
//       linkedinLink: "https://www.linkedin.com/in/victor_crest",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000); // Change the delay to 2 seconds

//     return () => clearInterval(interval);
//   }, [cardData.length]);

//   // Create a circular array to ensure continuous looping
//   const circularCardData = [...cardData.slice(activeIndex), ...cardData.slice(0, activeIndex)];

//   return (
//     <div className="relative h-[400px] bg-fixed">
//       <h1 className="text-center text-2xl mb-4">Our Team</h1>

//       <div className="overflow-hidden">
//         <div className="flex transform transition-transform ease-in-out duration-1000">
//           {circularCardData.map((card, index) => (
//             <div key={index} className="flex-shrink-0 w-full sm:w-1/3">
//               <Card
//                 bgCardSrc={card.bgCardSrc}
//                 idCardSrc={card.idCardSrc}
//                 name={card.name}
//                 age={card.age}
//                 location={card.location}
//                 instagramLink={card.instagramLink}
//                 linkedInLink={card.linkedinLink} isActive={false} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;


import React, { useState, useEffect } from "react";
import Card from "../Card/index";
import bgCard from "../../../../public/bg-pattern-card.svg";
import idCard from "../../../../public/logith.jpg";

const TestimonialSlider: React.FC = () => {
  const cardData = [
    {
      bgCardSrc: bgCard,
      idCardSrc: idCard,
      name: "Logith Ramesh",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/logith_ramesh",
      linkedinLink: "https://www.linkedin.com/in/logith-r-7a1293216",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: idCard,
      name: "Lokesh Kumar",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/_mr_l_o_k_i_",
      linkedinLink: "https://www.linkedin.com/in/lokesh-kumar-v-b2330a21a",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: idCard,
      name: "Jayaprakash",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/jaya_prakash_254",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: idCard,
      name: "Jeevan",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/mr._user_777",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: idCard,
      name: "Jemila Sharlet",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/jimmy_scary",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
    },
    {
      bgCardSrc: bgCard,
      idCardSrc: idCard,
      name: "Haresh",
      age: "21",
      location: "Chennai",
      instagramLink: "https://www.instagram.com/harxsh.03",
      linkedinLink: "https://www.linkedin.com/in/victor_crest",
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
      <h1 className="text-center text-2xl mb-4">Our Team</h1>

      <div className="overflow-hidden">
        <div className="flex transition-transform ease-in-out duration-1000" style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}>
          {cardData.map((card, index) => (
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
