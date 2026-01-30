import { useEffect, useState } from "react";
import { getSpecialAnimation } from "../utils/birthdayTrivia";

export default function SpecialAnimation() {
  const [special, setSpecial] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const animation = getSpecialAnimation("01/02/2004");
    setSpecial(animation);

    if (animation.active) {
      // Generate confetti or hearts
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 3 + Math.random() * 2,
      }));
      setParticles(newParticles);
    }
  }, []);

  if (!special?.active) return null;

  return (
    <div className={`special-animation ${special.type}`}>
      {/* Celebration Banner */}
      <div className="celebration-banner">
        <span className="banner-text">{special.message}</span>
      </div>

      {/* Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle ${special.particles}`}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          >
            {special.particles === "confetti" ? "🎉" : "💖"}
          </div>
        ))}
      </div>

      {/* Glow Effect */}
      <div className="glow-effect"></div>
    </div>
  );
}
