import { useState } from 'react';

interface FlippingCardProps {
  frontImage: string;
  backDescription: string;
  title: string;
}

const FlippingCard: React.FC<FlippingCardProps> = ({ frontImage, backDescription, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTouchFlip = () => {
    if (window.innerWidth <= 768) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="card" onClick={handleFlip} onTouchStart={handleTouchFlip}>
      <div className={`front ${isFlipped ? 'hidden' : 'block'}`} style={{ backgroundImage: `url(${frontImage})`}}>
        <div className="front-content">
          <div className="title">{title}</div>
        </div>
      </div>
      <div className={`back ${isFlipped ? 'block' : 'hidden'}`}>
        <p className="back-description">{backDescription}</p>
      </div>
      <style jsx>{`
        .card {
          width: 350px;
          height: 300px;
          margin: 10px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.5s, box-shadow 0.5s;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card:hover {
          transform: rotateY(180deg);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
        }

        .front-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          height: 100%;
        }

        .title {
          color: black;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: auto;
          text-align: center;
          width: 117%;
          margin-top: -20px;
          font-weight: bold; /* Set text weight to bold */
          font-size: 18px; /* Increase text size */
          background-color: white; /* Add white background */
          font-family: 'Roboto', Papyrus; /* Use Roboto font with fallback to sans-serif */
        }
        

        .back {
          background-color: #c0c0c0;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-description {
          color: #fff;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .card {
            width: 90%;
            max-width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .card {
            width: 90%;
            max-width: 280px;
            height: 380px;
          }
        }
      `}</style>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (

  <div>
    <div className="flex flex-col justify-center items-center h-screen lg:gap-28 md:flex-row md:flex-wrap md:justify-center">
      <FlippingCard
        frontImage="/web.webp"
        backDescription="Description for card 1."
        title="Web Development"
      />
      <FlippingCard
        frontImage="/career.jpeg"
        backDescription="Description for card 1."
        title="Career Guidance"
      />
      <FlippingCard
        frontImage="/ai.jpeg"
        backDescription="Description for card 1."
        title="AI Learning Path"
      />
    </div>
  </div>
  );
};

export default HomePage;
