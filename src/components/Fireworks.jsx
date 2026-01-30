import { useState, useEffect } from "react";

export default function Fireworks() {
  const [explosions, setExplosions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const explosionId = Date.now();
      const leftPos = Math.random() * 100;
      const topPos = 20 + Math.random() * 40; // Explode between 20-60% from top

      // Create explosion with multiple particles
      const particles = Array.from({ length: 40 }, (_, i) => ({
        id: `${explosionId}-${i}`,
        angle: (i / 40) * Math.PI * 2, // Spread 360 degrees
        speed: 3 + Math.random() * 5,
        emoji: ["🎆", "✨", "💥", "🌟", "🎉", "💫", "⭐", "🎊"][
          Math.floor(Math.random() * 8)
        ],
      }));

      setExplosions((prev) => [
        ...prev,
        { id: explosionId, left: leftPos, top: topPos, particles },
      ]);

      // Remove explosion after animation ends
      setTimeout(() => {
        setExplosions((prev) => prev.filter((exp) => exp.id !== explosionId));
      }, 2500);
    }, 800); // Launch new firework every 800ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fireworks-container">
      {explosions.map((explosion) => (
        <div
          key={explosion.id}
          className="explosion"
          style={{
            left: `${explosion.left}%`,
            top: `${explosion.top}%`,
          }}
        >
          {explosion.particles.map((particle) => {
            const xDist = Math.cos(particle.angle) * particle.speed * 100;
            const yDist = Math.sin(particle.angle) * particle.speed * 100;

            return (
              <div
                key={particle.id}
                className="particle"
                style={{
                  "--x": `${xDist}px`,
                  "--y": `${-yDist}px`,
                }}
              >
                {particle.emoji}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
