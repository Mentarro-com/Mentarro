// "use client";
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

//   const testimonials = [
//     {
//       name: "John Doe",
//       quote:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ligula euismod, ullamcorper mi nec, laoreet orci. Ut congue gravida felis, ut vestibulum ligula malesuada id.",
//     },
//     {
//       name: "Jane Smith",
//       quote:
//         "Sed tincidunt libero non fermentum sollicitudin. Integer tincidunt tortor nec ex rhoncus auctor. In hac habitasse platea dictumst. Integer id tortor efficitur, dictum nunc vel, ultrices est.",
//     },
//     {
//       name: "Mark Johnson",
//       quote:
//         "Vestibulum eu ante ac est ullamcorper vulputate. Integer iaculis nisi ac lectus consequat eleifend. Duis volutpat velit sed interdum iaculis.",
//     },
//     {
//       name: "Emily Brown",
//       quote:
//         "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Integer id augue sed lorem consequat auctor.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="relative h-[400px] bg-fixed">
//       <h1 className="text-center text-2xl">Our Team</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
//         {cardData.map((card, index) => (
//           <div key={index} className="flex justify-center"
//           >
//             <Card
//               bgCardSrc={card.bgCardSrc}
//               idCardSrc={card.idCardSrc}
//               name={card.name}
//               age={card.age}
//               location={card.location}
//               instagramLink={card.instagramLink}
//               linkedInLink={card.linkedinLink} isActive={false}            />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

'use client'

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

  // Create a circular array to ensure continuous looping
  const circularCardData = [...cardData.slice(activeIndex), ...cardData.slice(0, activeIndex)];

  return (
    <div className="relative h-[400px] bg-fixed">
      <h1 className="text-center text-2xl mb-4">Our Team</h1>

      <div className="overflow-hidden">
        <div className="flex transform transition-transform ease-in-out duration-1000">
          {circularCardData.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/3">
              <Card
                bgCardSrc={card.bgCardSrc}
                idCardSrc={card.idCardSrc}
                name={card.name}
                age={card.age}
                location={card.location}
                instagramLink={card.instagramLink}
                linkedInLink={card.linkedinLink} isActive={false}              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;


