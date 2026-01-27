import { useEffect, useState } from "react";

export default function Confetti({ trigger = false }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1,
        duration: 3 + Math.random() * 3,
        color: ['#FF69B4', '#FFD700', '#FF1493', '#FFA500', '#00CED1', '#9370DB', '#FF6B6B', '#32CD32', '#FFB6C1', '#87CEEB'][Math.floor(Math.random() * 10)],
        size: 10 + Math.random() * 12,
        rotation: Math.random() * 360,
      }));
      setParticles(newParticles);

      setTimeout(() => setParticles([]), 6000);
    }
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: `${particle.left}%`,
            top: '-10%',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            boxShadow: `0 0 8px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
}
