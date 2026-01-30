import { useMemo } from "react";

// Screen container component with transition
export default function ScreenContainer({
  children,
  isVisible,
  className = "",
}) {
  if (!isVisible) return null;

  const backgroundLines = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      top: i * 5,
      size: 16 + (i % 5) * 2,
      duration: 40 + (i % 7) * 6,
    }));
  }, []);

  const lineText = useMemo(() => {
    return Array.from({ length: 30 })
      .map(() => "Happy Birthday Sara 💝")
      .join(" • ");
  }, []);

  return (
    <div
      className={`screen-transition fade-in h-screen w-screen overflow-y-auto overflow-x-hidden ${className}`}
    >
      <div className="relative min-h-full w-full">
        {/* Scrolling background text */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {backgroundLines.map((line) => (
            <div
              key={line.id}
              className="absolute w-full bg-scroll-text bg-rainbow-text"
              style={{
                top: `${line.top}%`,
                opacity: 0.35,
                fontSize: `${line.size}px`,
                letterSpacing: "0.08em",
                "--duration": `${line.duration}s`,
                padding: "2px 8px",
                borderRadius: "999px",
              }}
            >
              <div className="bg-scroll-track">
                <span className="bg-scroll-item">{lineText}</span>
                <span className="bg-scroll-item">{lineText}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
