import ScreenContainer from "../ScreenContainer";
import Button from "../Button";

export default function SendCakeScreen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-md">
          {/* Cake slice */}
          <div className="float-animation">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 60 90 L 60 40 L 95 90 Z" fill="#F2C6C2" />
              <path
                d="M 60 40 L 95 90 L 60 90 Z"
                fill="#C8A951"
                opacity="0.7"
              />
              <circle cx="70" cy="70" r="3" fill="#B7E4C7" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-(--charcoal)">
            Send this cake to someone special?
          </h2>

          <p className="text-lg text-(--charcoal) opacity-70">
            Share the joy...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onNext}>Yes ✨</Button>
            <Button onClick={onNext} variant="outline">
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
