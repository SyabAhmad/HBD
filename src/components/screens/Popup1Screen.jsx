import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import CuteBackground from "../CuteBackground";

export default function Popup1Screen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center">
        <CuteBackground variant="love" />

        <div className="max-w-4xl w-full space-y-10 relative z-10 bg-white/30 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-4 border-pink-200">
          <div className="text-7xl mb-6 heartbeat">💖💕💖</div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-relaxed text-[var(--charcoal)] px-6 mb-6">
            Today isn't just a <span className="text-[var(--gold)] font-bold animate-pulse">date</span>. 🌟
          </h2>
          <p className="text-3xl md:text-4xl font-light text-[var(--charcoal)] opacity-90 px-6 leading-relaxed">
            It's a quiet <span className="text-pink-600 font-semibold">celebration</span> of <span className="text-purple-600 font-bold underline decoration-wavy">you</span>. ✨🎂
          </p>

          <div className="pt-10">
            <Button onClick={onNext}>Continue</Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
