import { useEffect, useState } from "react";

export default function Fireworks({ active = false }) {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      const newBurst = {
        id: Date.now() + Math.random(),
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 60,
        color: ['#FF69B4', '#FFD700', '#FF1493', '#FFA500', '#00CED1', '#9370DB', '#FF6B6B', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 9)],
      };
      
      setBursts(prev => [...prev, newBurst]);
      
      setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id !== newBurst.id));
      }, 2000);
    }, 300);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{
            left: `${burst.x}%`,
            top: `${burst.y}%`,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-firework"
              style={{
                backgroundColor: burst.color,
                animationDelay: `${i * 0.03}s`,
                transform: `rotate(${i * 18}deg)`,
                boxShadow: `0 0 10px ${burst.color}`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
