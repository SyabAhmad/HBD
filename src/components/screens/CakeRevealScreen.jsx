import ScreenContainer from "../ScreenContainer";
import Button from "../Button";

export default function CakeRevealScreen({ isVisible, onNext }) {
  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <div className="text-center space-y-12 max-w-4xl w-full">
          {/* Cake SVG - More Realistic with 5 candles */}
          <div className="float-animation">
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              {/* Cake plate */}
              <ellipse
                cx="160"
                cy="230"
                rx="100"
                ry="10"
                fill="#E8E8E8"
                opacity="0.8"
              />

              {/* Bottom layer - chocolate */}
              <rect
                x="75"
                y="185"
                width="170"
                height="50"
                rx="10"
                fill="#8B4513"
              />
              <rect
                x="75"
                y="185"
                width="170"
                height="12"
                rx="10"
                fill="#A0522D"
              />

              {/* Middle layer - vanilla */}
              <rect
                x="85"
                y="145"
                width="150"
                height="45"
                rx="10"
                fill="#FFE4B5"
              />
              <rect
                x="85"
                y="145"
                width="150"
                height="10"
                rx="10"
                fill="#FFEFD5"
              />

              {/* Top layer - strawberry */}
              <rect
                x="95"
                y="110"
                width="130"
                height="40"
                rx="10"
                fill="#FFB6C1"
              />
              <rect
                x="95"
                y="110"
                width="130"
                height="10"
                rx="10"
                fill="#FFC0CB"
              />

              {/* Frosting drips */}
              <path
                d="M 100 150 Q 100 160 107 160 Q 114 160 114 150"
                fill="#FFF"
                opacity="0.8"
              />
              <path
                d="M 150 150 Q 150 160 157 160 Q 164 160 164 150"
                fill="#FFF"
                opacity="0.8"
              />
              <path
                d="M 200 150 Q 200 160 207 160 Q 214 160 214 150"
                fill="#FFF"
                opacity="0.8"
              />

              {/* Candle sticks - 5 candles (unlit) */}
              <defs>
                <linearGradient
                  id="candleGrad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#FFE4E1", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#FFB6C1", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect x="110" y="75" width="12" height="35" rx="3" fill="url(#candleGrad)" />
              <rect x="135" y="75" width="12" height="35" rx="3" fill="url(#candleGrad)" />
              <rect x="160" y="70" width="12" height="40" rx="3" fill="url(#candleGrad)" />
              <rect x="185" y="75" width="12" height="35" rx="3" fill="url(#candleGrad)" />
              <rect x="210" y="75" width="12" height="35" rx="3" fill="url(#candleGrad)" />

              {/* Decorative elements */}
              <ellipse cx="160" cy="102" rx="10" ry="9" fill="#FF6B6B" />
              <path d="M 156 98 L 160 95 L 164 98" stroke="#228B22" strokeWidth="2" fill="none" />

              {/* Cherries */}
              <circle cx="125" cy="108" r="6" fill="#DC143C" />
              <circle cx="195" cy="108" r="6" fill="#DC143C" />
              <path d="M 125 108 Q 125 100 130 96" stroke="#8B4513" strokeWidth="2" fill="none" />
              <path d="M 195 108 Q 195 100 190 96" stroke="#8B4513" strokeWidth="2" fill="none" />

              {/* Chocolate decorations */}
              <circle cx="90" cy="210" r="5" fill="#654321" />
              <circle cx="130" cy="205" r="5" fill="#654321" />
              <circle cx="160" cy="203" r="5" fill="#654321" />
              <circle cx="190" cy="205" r="5" fill="#654321" />
              <circle cx="230" cy="210" r="5" fill="#654321" />

              {/* Frosting swirls */}
              <circle cx="110" cy="165" r="7" fill="#FFF" opacity="0.9" />
              <circle cx="160" cy="163" r="7" fill="#FFF" opacity="0.9" />
              <circle cx="210" cy="165" r="7" fill="#FFF" opacity="0.9" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--charcoal)] px-6">
            Time to celebrate! 🎂✨🎈
          </h2>

          <Button onClick={onNext}>Light the Candles 🕯️</Button>
        </div>
      </div>
    </ScreenContainer>
  );
}
