import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import { generateStarPositions } from "../../utils/animations";

const starPositions = generateStarPositions(20);

export default function PrayerScreen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-linear-to-b from-(--night) to-[#2a2d3a]">
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {starPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                opacity: pos.opacity,
                animation: `float ${pos.duration}s ease-in-out infinite`,
                animationDelay: `${pos.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-3xl w-full space-y-8 text-center relative z-10 px-8">
          <div className="text-5xl mb-6">🤲</div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            A Prayer for You
          </h2>

          <div className="space-y-8 text-xl md:text-2xl font-light text-white leading-relaxed opacity-90 px-6">
            <p className="mb-4">May this year bring <span className="text-[var(--gold)] font-bold">peace</span> to your heart,</p>
            <p className="mb-4"><span className="text-blue-300 font-bold">strength</span> to your soul,</p>
            <p className="mb-4">and gentle <span className="text-pink-300 font-bold">joy</span> in every step.</p>
            <p className="text-(--gold) font-medium pt-6 text-3xl">آمین</p>
          </div>

          <div className="pt-12">
            <Button onClick={onNext}>Continue</Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
