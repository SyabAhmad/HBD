import { useEffect, useState } from "react";
import ScreenContainer from "../ScreenContainer";
import CuteBackground from "../CuteBackground";
import Fireworks from "../Fireworks";
import Confetti from "../Confetti";

export default function ClosingScreen({ isVisible }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 8000);
    }
  }, [isVisible]);
  return (
    <ScreenContainer isVisible={isVisible}>
      <Fireworks active={isVisible} />
      <Confetti trigger={showConfetti} />
      
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center">
        <CuteBackground variant="love" />

        <div className="max-w-4xl w-full space-y-12 relative z-10 bg-white/30 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-4 border-purple-200">
          <div className="text-8xl mb-8 float-animation">🌙💕✨🎁</div>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--charcoal)] px-6 mb-6">
            Once <span className="text-purple-600 underline decoration-wavy">again</span>... 🎉✨
          </h1>

          <h2 className="text-4xl md:text-5xl font-light text-[var(--charcoal)] opacity-90 px-6 mb-6">
            <span className="text-pink-600 font-bold">Happy</span> <span className="text-[var(--gold)] font-bold">Birthday</span>! 🎂🎈🎊
          </h2>

          <div className="text-6xl space-x-4 py-8">
            <span className="twinkle inline-block">✨</span>
            <span className="heartbeat inline-block">🎂</span>
            <span className="twinkle inline-block">💫</span>
            <span className="heartbeat inline-block">💖</span>
            <span className="twinkle inline-block">🎀</span>
          </div>

          <p className="text-2xl text-[var(--charcoal)] opacity-70 pt-8 italic">
            Made with love 💝✨🌟🌸
          </p>
        </div>
      </div>
    </ScreenContainer>
  );
}
