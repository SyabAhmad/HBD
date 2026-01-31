import { useMemo } from "react";
import React from "react";
import { getSpecialAnimation } from "../utils/birthdayTrivia";

// Memoized particle component
const Particle = React.memo(function Particle({ left, delay, duration, type }) {
  return (
    <div
      className={`particle ${type}`}
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      {type === "confetti" ? "🎉" : "💖"}
    </div>
  );
});

// Pre-computed particles to avoid regeneration
const PARTICLE_COUNT = 30; // Reduced from 50 for performance

// Deterministic pseudo-random for stable renders
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function SpecialAnimation() {
  // Compute animation data once
  const special = useMemo(() => getSpecialAnimation("01/02/2004"), []);

  // Generate deterministic particles for stable renders
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: Math.floor(seededRandom(i * 1.5) * 100),
      delay: Number((seededRandom(i * 2.3) * 0.5).toFixed(2)),
      duration: Number((3 + seededRandom(i * 3.7) * 2).toFixed(2)),
    }));
  }, []);

  if (!special?.active) return null;

  return (
    <div className={`special-animation ${special.type}`}>
      {/* Celebration Banner */}
      <div className="celebration-banner">
        <span className="banner-text">{special.message}</span>
      </div>

      {/* Particles - limited count for performance */}
      <div className="particles-container">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            left={particle.left}
            delay={particle.delay}
            duration={particle.duration}
            type={special.particles}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="glow-effect"></div>
    </div>
  );
}

export default React.memo(SpecialAnimation);
