import { useEffect, useState } from "react";
import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import CuteBackground from "../CuteBackground";
import Fireworks from "../Fireworks";
import Confetti from "../Confetti";
import { generateRandomPositions } from "../../utils/animations";

const sparklePositions = generateRandomPositions(12);

export default function CelebrationScreen({ isVisible, onNext, onMusicStart }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isVisible) {
      if (onMusicStart) onMusicStart();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 8000);
    }
  }, [isVisible, onMusicStart]);

  return (
    <ScreenContainer isVisible={isVisible}>
      <Fireworks active={isVisible} />
      <Confetti trigger={showConfetti} />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center">
        <CuteBackground variant="hearts" />

        {/* Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {sparklePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-70 float-animation"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        <div className="max-w-4xl w-full space-y-12 relative z-10 bg-white/30 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-4 border-blue-200">
          <div className="text-7xl mb-8 heartbeat">🎉💖🎂✨</div>

          <h1 className="text-5xl md:text-6xl font-bold text-(--charcoal)">
            <span className="text-pink-600">Happy</span> <span className="text-[var(--gold)]">Birthday!</span> ✨
          </h1>

          <p className="text-3xl md:text-4xl font-light leading-relaxed text-(--charcoal) opacity-80 px-6">
            May today feel as <span className="text-pink-500 font-semibold">beautiful</span> as your <span className="text-purple-600 font-semibold">heart</span>. 💝
          </p>

          <div className="pt-8">
            <Button onClick={onNext}>Continue ✨</Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
