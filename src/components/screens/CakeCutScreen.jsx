import { useState } from "react";
import ScreenContainer from "../ScreenContainer";
import Button from "../Button";

export default function CakeCutScreen({ isVisible, onNext }) {
  const [isCutting, setIsCutting] = useState(false);
  const [isCut, setIsCut] = useState(false);

  const handleCut = () => {
    setIsCutting(true);
    setTimeout(() => {
      setIsCut(true);
      setTimeout(() => {
        onNext();
      }, 1500);
    }, 1000);
  };

  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <div className="text-center space-y-12 max-w-4xl w-full">
          {/* Cake with knife - More Realistic */}
          <div className="relative">
            <svg
              width="320"
              height="340"
              viewBox="0 0 320 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              {/* Cake plate */}
              <ellipse
                cx="140"
                cy="235"
                rx="85"
                ry="8"
                fill="#E8E8E8"
                opacity="0.8"
              />

              {/* Left half of cake */}
              <g
                className={isCut ? "transition-all duration-500" : ""}
                style={isCut ? { transform: "translateX(-15px)" } : {}}
              >
                {/* Bottom layer - chocolate */}
                <rect
                  x="70"
                  y="200"
                  width="70"
                  height="45"
                  rx="8"
                  fill="#8B4513"
                />
                <rect
                  x="70"
                  y="200"
                  width="70"
                  height="10"
                  rx="8"
                  fill="#A0522D"
                />

                {/* Middle layer - vanilla */}
                <rect
                  x="80"
                  y="165"
                  width="60"
                  height="40"
                  rx="8"
                  fill="#FFE4B5"
                />
                <rect
                  x="80"
                  y="165"
                  width="60"
                  height="8"
                  rx="8"
                  fill="#FFEFD5"
                />

                {/* Top layer - strawberry */}
                <rect
                  x="90"
                  y="135"
                  width="50"
                  height="35"
                  rx="8"
                  fill="#FFB6C1"
                />
                <rect
                  x="90"
                  y="135"
                  width="50"
                  height="8"
                  rx="8"
                  fill="#FFC0CB"
                />

                {/* Show cake layers when cut */}
                {isCut && (
                  <>
                    <rect
                      x="138"
                      y="200"
                      width="2"
                      height="45"
                      fill="#4A2511"
                    />
                    <rect
                      x="138"
                      y="165"
                      width="2"
                      height="40"
                      fill="#D4A574"
                    />
                    <rect
                      x="138"
                      y="135"
                      width="2"
                      height="35"
                      fill="#FF91A4"
                    />
                  </>
                )}
              </g>

              {/* Right half of cake */}
              <g
                className={isCut ? "transition-all duration-500" : ""}
                style={isCut ? { transform: "translateX(15px)" } : {}}
              >
                {/* Bottom layer - chocolate */}
                <rect
                  x="140"
                  y="200"
                  width="70"
                  height="45"
                  rx="8"
                  fill="#8B4513"
                />
                <rect
                  x="140"
                  y="200"
                  width="70"
                  height="10"
                  rx="8"
                  fill="#A0522D"
                />

                {/* Middle layer - vanilla */}
                <rect
                  x="140"
                  y="165"
                  width="60"
                  height="40"
                  rx="8"
                  fill="#FFE4B5"
                />
                <rect
                  x="140"
                  y="165"
                  width="60"
                  height="8"
                  rx="8"
                  fill="#FFEFD5"
                />

                {/* Top layer - strawberry */}
                <rect
                  x="140"
                  y="135"
                  width="50"
                  height="35"
                  rx="8"
                  fill="#FFB6C1"
                />
                <rect
                  x="140"
                  y="135"
                  width="50"
                  height="8"
                  rx="8"
                  fill="#FFC0CB"
                />

                {/* Show cake layers when cut */}
                {isCut && (
                  <>
                    <rect
                      x="140"
                      y="200"
                      width="2"
                      height="45"
                      fill="#4A2511"
                    />
                    <rect
                      x="140"
                      y="165"
                      width="2"
                      height="40"
                      fill="#D4A574"
                    />
                    <rect
                      x="140"
                      y="135"
                      width="2"
                      height="35"
                      fill="#FF91A4"
                    />
                  </>
                )}
              </g>

              {/* Cut line */}
              {isCut && (
                <line
                  x1="140"
                  y1="130"
                  x2="140"
                  y2="245"
                  stroke="#2E2E2E"
                  strokeWidth="3"
                  opacity="0.4"
                  strokeDasharray="5,3"
                />
              )}

              {/* Decorations */}
              <g
                className={isCut ? "transition-all duration-500" : ""}
                style={isCut ? { transform: "translateX(-15px)" } : {}}
              >
                <ellipse cx="115" cy="128" rx="6" ry="5" fill="#FF6B6B" />
                <circle cx="100" cy="220" r="4" fill="#654321" />
                <circle cx="120" cy="215" r="4" fill="#654321" />
              </g>

              <g
                className={isCut ? "transition-all duration-500" : ""}
                style={isCut ? { transform: "translateX(15px)" } : {}}
              >
                <ellipse cx="165" cy="128" rx="6" ry="5" fill="#FF6B6B" />
                <circle cx="160" cy="220" r="4" fill="#654321" />
                <circle cx="180" cy="215" r="4" fill="#654321" />
              </g>

              {/* Realistic Knife with handle */}
              <g
                className={
                  isCutting ? "transition-transform duration-1000" : ""
                }
                style={isCutting ? { transform: "translateY(100px)" } : {}}
              >
                {/* Handle */}
                <rect
                  x="125"
                  y="20"
                  width="10"
                  height="50"
                  rx="3"
                  fill="#8B4513"
                />
                <rect x="125" y="22" width="10" height="3" fill="#654321" />
                <rect x="125" y="40" width="10" height="3" fill="#654321" />
                <rect x="125" y="58" width="10" height="3" fill="#654321" />

                {/* Blade */}
                <defs>
                  <linearGradient
                    id="bladeGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#E8E8E8", stopOpacity: 1 }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#D3D3D3", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M 125 70 L 125 120 L 130 122 L 135 120 L 135 70 Z"
                  fill="url(#bladeGrad)"
                  stroke="#C0C0C0"
                  strokeWidth="0.5"
                />
                <path
                  d="M 128 72 L 128 118 L 130 119 L 132 118 L 132 72 Z"
                  fill="#FFFFFF"
                  opacity="0.6"
                />
                <rect
                  x="116"
                  y="10"
                  width="8"
                  height="15"
                  rx="4"
                  fill="#8B4513"
                />
              </g>
            </svg>
          </div>

          {!isCut ? (
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-semibold text-(--charcoal)">
                Time to cut the cake! 🎂✨
              </h2>
              <p className="text-xl md:text-2xl text-(--charcoal) opacity-70">
                Make it special 💖
              </p>
              <Button onClick={handleCut}>
                {isCutting ? "Cutting... 🔪" : "Cut the Cake 🍰"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl font-semibold text-(--charcoal)">
                Perfect! ✨🎉
              </p>
              <p className="text-2xl text-(--charcoal) opacity-70">
                Time to celebrate! 🎊
              </p>
            </div>
          )}
        </div>
      </div>
    </ScreenContainer>
  );
}
