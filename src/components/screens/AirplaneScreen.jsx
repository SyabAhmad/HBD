import { useEffect } from "react";
import ScreenContainer from "../ScreenContainer";

export default function AirplaneScreen({ isVisible, onNext }) {
  useEffect(() => {
    if (isVisible) {
      // Auto-transition after animation completes
      const timer = setTimeout(() => {
        onNext();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onNext]);

  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Clouds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-30">☁️</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20">☁️</div>
          <div className="absolute bottom-40 left-20 text-7xl opacity-25">
            ☁️
          </div>
        </div>

        {/* Airplane with cake */}
        <div className="fly-away relative">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Airplane */}
            <path
              d="M 100 80 L 120 90 L 110 100 L 130 110 L 120 115 L 110 105 L 90 115 L 100 100 L 80 90 Z"
              fill="#C8A951"
              stroke="#2E2E2E"
              strokeWidth="2"
            />
            <circle cx="100" cy="95" r="8" fill="#FAF7F2" />

            {/* Cake slice attached */}
            <g transform="translate(110, 80)">
              <path d="M 0 10 L 0 -5 L 15 10 Z" fill="#F2C6C2" />
              <path d="M 0 -5 L 15 10 L 0 10 Z" fill="#C8A951" opacity="0.7" />
            </g>

            {/* Sparkle trail */}
            <circle cx="70" cy="105" r="2" fill="#FFD700" opacity="0.6" />
            <circle cx="60" cy="110" r="1.5" fill="#FFD700" opacity="0.4" />
            <circle cx="50" cy="115" r="1" fill="#FFD700" opacity="0.2" />
          </svg>
        </div>

        <p className="text-xl text-(--charcoal) opacity-70 mt-8">
          On its way... ✈️✨
        </p>
      </div>
    </ScreenContainer>
  );
}
