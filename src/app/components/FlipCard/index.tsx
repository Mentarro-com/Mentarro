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
        <p className="back-description text-zinc-950">{backDescription}</p>
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
          color: black;
          font-size: 16px;
          padding: 8px;
          font-family: 'Roboto', sans-serif; 
          font-weight: bold; 
          font-style: italic; 
          /* Add more styles as needed */
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

  <div className='mb-16'>
    <h1 className='text-black text-3xl font-bold ml-20 mb-8'><span className='text-red-600'>Mentarro &apos; </span> Mantras</h1>
    <div className="flex flex-col justify-center  lg:gap-28 md:flex-row md:flex-wrap md:justify-center">

      
      <FlippingCard
        frontImage="/web.webp"
        backDescription="We are a web development company specializing in crafting innovative and user-friendly websites for businesses of all sizes. Our team of experts merges creativity with cutting-edge technology to bring your online vision to life. From design to deployment, we are dedicated to delivering exceptional digital solutions tailored to your needs."
        title="Web Development"
      />
      <FlippingCard
        frontImage="/career.jpeg"
        backDescription="Guiding new students toward career success with personalized support and resources. We help you explore interests, develop skills, and achieve your goals."
        title="Career Guidance"
      />
      <FlippingCard
        frontImage="/ai.jpeg"
        backDescription="Empowering beginners with AI learning paths and teaching interaction techniques to get the answers they need. Dive into AI with structured guidance and learn to harness its potential for your goals."
        title="AI Learning Path"
      />
    </div>
  </div>
  );
};

export default HomePage;
