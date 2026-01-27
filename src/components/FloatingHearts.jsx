export default function FloatingHearts() {
  const hearts = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 6,
    size: 25 + Math.random() * 30,
    emoji: ['💖', '💕', '💗', '💓', '💝', '✨', '🌟', '⭐', '🌸', '🌺', '🌼', '🌻', '🌷', '🌹', '💐', '🎀', '🦋', '🌈'][Math.floor(Math.random() * 18)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute opacity-40"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
            filter: 'drop-shadow(0 0 5px rgba(255, 105, 180, 0.5))',
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
