import { useState } from "react";
import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import CuteBackground from "../CuteBackground";
import Confetti from "../Confetti";

export default function EnvelopeScreen({ isVisible, onNext }) {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setShowConfetti(true);
    setTimeout(() => {
      onNext();
    }, 500);
  };
  return (
    <ScreenContainer isVisible={isVisible}>
      <Confetti trigger={showConfetti} />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <CuteBackground variant="hearts" />

        <div className="float-animation mb-12 relative z-10">
          <svg
            width="280"
            height="280"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Envelope body */}
            <rect
              x="25"
              y="55"
              width="150"
              height="110"
              rx="10"
              fill="#FFE4E1"
              stroke="#FFD700"
              strokeWidth="2"
            />
            
            {/* Envelope flap back */}
            <path
              d="M 25 55 L 100 120 L 175 55"
              fill="#FFC0CB"
              stroke="#FFD700"
              strokeWidth="2"
            />
            
            {/* Envelope flap front */}
            <path
              d="M 25 55 L 100 110 L 175 55"
              fill="#FFD1DC"
              stroke="#FFD700"
              strokeWidth="2"
            />
            
            {/* Decorative hearts on envelope */}
            <text x="60" y="100" fontSize="20" fill="#FF69B4">💕</text>
            <text x="120" y="95" fontSize="20" fill="#FF69B4">💕</text>
            <text x="90" y="130" fontSize="18" fill="#FFD700">✨</text>
            
            {/* Wax seal */}
            <circle cx="100" cy="120" r="22" fill="#FFD700" opacity="0.95" />
            <circle cx="100" cy="120" r="18" fill="#FFA500" opacity="0.8" />
            <text
              x="100"
              y="130"
              fontSize="20"
              fill="white"
              textAnchor="middle"
              className="heartbeat"
            >
              🎂
            </text>
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-[var(--charcoal)] relative z-10 px-4 leading-tight">
          🎉 <span className="text-pink-600">Happy</span> <span className="text-[var(--gold)]">Birthday</span> 🎂
        </h1>

        <p className="text-2xl md:text-3xl text-center mb-16 text-[var(--charcoal)] opacity-80 relative z-10 px-6 leading-relaxed font-light">
          A special message awaits you... 💌✨
        </p>

        <div className="relative z-10">
          <Button onClick={handleOpen}>Open the Letter 💌</Button>
        </div>
      </div>
    </ScreenContainer>
  );
}
