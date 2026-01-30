import { useState, useEffect } from "react";

export default function FallingRoses() {
  const [roses, setRoses] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRose = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 4 + Math.random() * 2, // 4-6 seconds fall time
        swayAmount: Math.random() * 30, // Sway left/right
      };

      setRoses((prev) => [...prev, newRose]);

      // Remove rose after animation ends
      setTimeout(
        () => {
          setRoses((prev) => prev.filter((rose) => rose.id !== newRose.id));
        },
        (newRose.duration + 0.5) * 1000,
      );
    }, 200); // Spawn new rose every 200ms (a lot of them!)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-roses-container">
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="falling-rose"
          style={{
            left: `${rose.left}%`,
            animationDelay: `${rose.delay}s`,
            animationDuration: `${rose.duration}s`,
            "--sway": `${rose.swayAmount}px`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
}
