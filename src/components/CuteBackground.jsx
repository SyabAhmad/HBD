// Floating hearts and love elements component
export default function CuteBackground({ variant = "hearts" }) {
  const elements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: (i * 23 + 7) % 100,
    top: (i * 41 + 13) % 100,
    delay: (i * 0.5) % 4,
    duration: 4 + (i % 3),
    size: 30 + (i % 4) * 15,
  }));

  if (variant === "hearts") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((el) => (
          <div
            key={el.id}
            className="absolute opacity-25 float-animation"
            style={{
              left: `${el.left}%`,
              top: `${el.top}%`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
              fontSize: `${el.size}px`,
            }}
          >
            {el.id % 5 === 0
              ? "💕"
              : el.id % 5 === 1
                ? "💖"
                : el.id % 5 === 2
                  ? "💗"
                  : el.id % 5 === 3
                    ? "💝"
                    : "💓"}
          </div>
        ))}
      </div>
    );
  }

  if (variant === "stars") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((el) => (
          <div
            key={el.id}
            className="absolute twinkle"
            style={{
              left: `${el.left}%`,
              top: `${el.top}%`,
              animationDelay: `${el.delay}s`,
              fontSize: `${el.size}px`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>
    );
  }

  if (variant === "love") {
    const loveWords = ["L", "O", "V", "E"];
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {loveWords.map((letter, i) => (
          <div
            key={i}
            className="absolute text-6xl font-bold opacity-10 rotate-in"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.2}s`,
              color: "var(--rose)",
              transform: `rotate(${-15 + i * 10}deg)`,
            }}
          >
            {letter}
          </div>
        ))}
        {elements.slice(0, 8).map((el) => (
          <div
            key={`heart-${el.id}`}
            className="absolute heartbeat"
            style={{
              left: `${el.left}%`,
              top: `${el.top}%`,
              animationDelay: `${el.delay}s`,
              fontSize: "24px",
              opacity: 0.15,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    );
  }

  return null;
}
