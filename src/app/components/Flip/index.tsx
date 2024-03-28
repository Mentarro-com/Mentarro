// import { useState } from 'react';

// const FlippingCard = () => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className="card" onClick={handleFlip}>
//       <div className={`front ${isFlipped ? 'hidden' : 'block'}`}>Front of the Card</div>
//       <div className={`back ${isFlipped ? 'block' : 'hidden'}`}>Back of the Card</div>
//       <style jsx>{`
//         .card {
//           width: 320px;
//           height: 400px;
//           margin: 10px;
//           position: relative;
//           transform-style: preserve-3d;
//           transition: transform 0.5s, box-shadow 0.5s;
//           border-radius: 10px;
//           background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
//           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Glass-like box shadow */
//         }

//         .card:hover {
//           transform: rotateY(180deg);
//           box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
//         }

//         .front,
//         .back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//         }

//         .front {
//           background-color: #f0f0f0;
//         }

//         .back {
//           background-color: #c0c0c0;
//           transform: rotateY(180deg);
//         }

//         @media (max-width: 640px) {
//           .card {
//             width: 280px;
//             height: 350px;
//           }
//         }

//         @media (max-width: 480px) {
//           .card {
//             width: 240px;
//             height: 300px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const HomePage = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen gap-6 md:flex-row md:flex-wrap md:justify-center">
//       <FlippingCard />
//       <FlippingCard />
//       <FlippingCard />
//     </div>
//   );
// };

// export default HomePage;


import { useState } from 'react';

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleFlip}>
      <div className={`front ${isFlipped ? 'hidden' : 'block'}`}>Front of the Card</div>
      <div className={`back ${isFlipped ? 'block' : 'hidden'}`}>Back of the Card</div>
      <style jsx>{`
        .card {
          width: 300px;
          height: 300px;
          margin: 10px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.5s, box-shadow 0.5s;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Glass-like box shadow */
        }

        .card:hover {
          transform: rotateY(180deg); /* Flip from right to left on hover */
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .front {
          background-color: #f0f0f0;
        }

        .back {
          background-color: #c0c0c0;
          transform: rotateY(180deg); /* Always rotate from right to left */
        }

        @media (max-width: 640px) {
          .card {
            width: 280px;
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .card {
            width: 240px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-36 md:flex-row md:flex-wrap md:justify-center">
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
    </div>
  );
};

export default HomePage;
