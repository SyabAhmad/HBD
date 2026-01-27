import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import {
  generateRandomPositions,
  getRandomEmoji,
} from "../../utils/animations";

const floatingPositions = generateRandomPositions(10);

export default function LittleMintyScreen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-linear-to-b from-(--mint) to-[#d4f1e3]">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute float-animation"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration + 1}s`,
                fontSize: `${20 + (i % 3) * 10}px`,
                opacity: 0.6,
              }}
            >
              {getRandomEmoji(i)}
            </div>
          ))}
        </div>

        <div className="max-w-3xl w-full space-y-8 text-center relative z-10 px-8">
          <div className="text-6xl mb-4 heartbeat">🌱💕✨</div>

          <h2 className="text-3xl md:text-4xl font-bold text-(--charcoal)">
            For Little MenteE 🌟
          </h2>

          <div className="space-y-8 text-lg md:text-xl font-light text-(--charcoal) leading-relaxed px-6">
            <p
              className="text-2xl font-medium mb-4"
              style={{ color: "var(--charcoal)" }}
            >
              Born this <span className="text-purple-600 font-bold">January</span>, 🎉
            </p>
            <p className="mb-4">a tiny <span className="text-pink-500 font-bold">miracle</span> with endless <span className="text-[var(--gold)] font-semibold">blessings</span>. 💞</p>
            <p className="mb-4">May her life be <span className="text-blue-500 font-semibold">soft</span>, <span className="text-yellow-500 font-semibold">bright</span>, ✨</p>
            <p className="mb-4">and forever <span className="text-green-600 font-bold underline decoration-wavy">protected</span>. 🧘‍♀️💕</p>
            <div className="pt-6 text-4xl">💚🌸✨</div>
          </div>

          <div className="pt-12">
            <Button onClick={onNext} variant="secondary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
