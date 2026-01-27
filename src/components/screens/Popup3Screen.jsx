import ScreenContainer from "../ScreenContainer";
import Button from "../Button";
import CuteBackground from "../CuteBackground";

export default function Popup3Screen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center">
        <CuteBackground variant="stars" />

        <div className="max-w-4xl w-full space-y-10 relative z-10 bg-white/30 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-4 border-yellow-200">
          <div className="text-7xl mb-6 rotate-in">🌙✨💛🌸</div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-relaxed text-[var(--charcoal)] px-6 mb-6">
            Some people don't just grow <span className="text-purple-600 font-bold">older</span>… 🌺
          </h2>
          <p className="text-3xl md:text-4xl font-light text-[var(--charcoal)] opacity-90 px-6 leading-relaxed">
            They grow <span className="text-blue-600 font-semibold">deeper</span>, <span className="text-green-600 font-semibold">kinder</span>, more <span className="text-pink-600 font-bold underline decoration-wavy">beautiful</span>. 💝✨
          </p>

          <div className="pt-10">
            <Button onClick={onNext}>Continue</Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
