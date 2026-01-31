import { useState, useEffect, useMemo, useCallback } from "react";
import React from "react";

// Memoized particle component to prevent re-renders
const Particle = React.memo(function Particle({ x, y, emoji }) {
  return (
    <div
      className="particle"
      style={{
        "--x": `${x}px`,
        "--y": `${-y}px`,
      }}
    >
      {emoji}
    </div>
  );
});

// Memoized explosion component
const Explosion = React.memo(function Explosion({ explosion }) {
  const particles = useMemo(() => {
    return explosion.particles.map((particle) => ({
      ...particle,
      xDist: Math.cos(particle.angle) * particle.speed * 80,
      yDist: Math.sin(particle.angle) * particle.speed * 80,
    }));
  }, [explosion.particles]);

  return (
    <div
      className="explosion"
      style={{
        left: `${explosion.left}%`,
        top: `${explosion.top}%`,
      }}
    >
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.xDist}
          y={particle.yDist}
          emoji={particle.emoji}
        />
      ))}
    </div>
  );
});

function Fireworks() {
  const [explosions, setExplosions] = useState([]);

  // Generate a single explosion - memoized callback
  const createExplosion = useCallback(() => {
    const explosionId = Date.now();
    const leftPos = Math.random() * 100;
    const topPos = 20 + Math.random() * 40;

    // Reduced from 20 to 12 particles for performance
    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: `${explosionId}-${i}`,
      angle: (i / 24) * Math.PI * 2,
      speed: 2.5 + Math.random() * 4,
      emoji: ["🎆", "🌹", "💥", "🌟", "🌹", "🌹"][
        Math.floor(Math.random() * 6)
      ],
    }));

    const newExplosion = {
      id: explosionId,
      left: leftPos,
      top: topPos,
      particles,
    };

    setExplosions((prev) => {
      // Keep max 4 explosions at a time for performance
      const filtered = prev.length > 3 ? prev.slice(-3) : prev;
      return [...filtered, newExplosion];
    });

    // Remove after animation
    setTimeout(() => {
      setExplosions((prev) => prev.filter((exp) => exp.id !== explosionId));
    }, 2000);
  }, []);

  useEffect(() => {
    // Increased interval from 800ms to 1200ms for better performance
    const interval = setInterval(createExplosion, 1200);
    return () => clearInterval(interval);
  }, [createExplosion]);

  return (
    <div className="fireworks-container">
      {explosions.map((explosion) => (
        <Explosion key={explosion.id} explosion={explosion} />
      ))}
    </div>
  );
}

export default React.memo(Fireworks);
