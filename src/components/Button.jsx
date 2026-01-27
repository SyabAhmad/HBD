import { useState } from "react";

// Professional and cute button component with click effects
export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const [sparkles, setSparkles] = useState([]);

  const handleClick = (e) => {
    // Create sparkle effect
    const rect = e.currentTarget.getBoundingClientRect();
    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      angle: (i * 45),
    }));
    
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 1000);
    
    if (onClick) onClick(e);
  };

  const baseStyles =
    "min-h-[56px] px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 active:scale-95 hover:scale-105 shadow-xl hover:shadow-2xl tracking-wide border-3 relative overflow-visible";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 text-white border-pink-300 hover:from-pink-500 hover:to-rose-600 hover:shadow-pink-300/50",
    secondary:
      "bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 text-white border-purple-300 hover:from-purple-500 hover:to-indigo-600 hover:shadow-purple-300/50",
    outline:
      "border-pink-400 text-pink-600 hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-500 hover:text-white bg-white/80 backdrop-blur-sm",
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
      
      {/* Sparkles on click */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: `rotate(${sparkle.angle}deg)`,
          }}
        >
          <div className="text-2xl animate-sparkle">✨</div>
        </div>
      ))}
    </>
  );
}
