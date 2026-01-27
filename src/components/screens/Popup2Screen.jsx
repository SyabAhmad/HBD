import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import { generateRandomPositions } from "../../utils/animations";

const petalPositions = generateRandomPositions(8);

export default function Popup2Screen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Floating petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {petalPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 rounded-full bg-(--rose) opacity-30 float-animation"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-3xl w-full space-y-8 relative z-10 px-8">
          <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed text-(--charcoal) mb-4">
            Your presence brings <span className="text-[var(--gold)] font-bold">calm</span>, <span className="text-pink-500 font-bold">grace</span>,
          </h2>
          <p className="text-2xl md:text-3xl font-light text-(--charcoal) opacity-80 mt-4">
            and <span className="text-orange-500 font-semibold underline decoration-wavy">warmth</span> wherever you go.
          </p>

          <div className="pt-8">
            <Button onClick={onNext}>Continue</Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
