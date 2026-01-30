import { useState } from "react";
import "./App.css";
import ScreenContainer from "./components/ScreenContainer";
import PersonalDedication from "./components/PersonalDedication";
import BirthdayTrivia from "./components/BirthdayTrivia";
import SpecialAnimation from "./components/SpecialAnimation";
import CelebrationSection from "./components/CelebrationSection";
import BirthdayGifs from "./components/BirthdayGifs";
import Fireworks from "./components/Fireworks";
import FallingRoses from "./components/FallingRoses";
import wishes from "./data.json";
import { useSound } from "./hooks/useSound";

const cuteEmojis = [
  "🌸",
  "💖",
  "✨",
  "🦋",
  "🌷",
  "💕",
  "🎀",
  "🍰",
  "🌈",
  "⭐",
  "🌺",
  "💗",
];

const typeToBgClass = {
  gratitude: "bg-amber-50",
  prayer: "bg-sky-50",
  love: "bg-rose-50",
  hope: "bg-lime-50",
  faith: "bg-purple-50",
  wisdom: "bg-emerald-50",
};

const typeToEmoji = {
  gratitude: "🌻",
  prayer: "🤲",
  love: "💗",
  hope: "🌈",
  faith: "✨",
  wisdom: "📜",
};

const getRotate = (id) => {
  const options = [-3, -2, -1, 0, 1, 2, 3];
  return options[id % options.length];
};

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const { playSound, playBeep } = useSound();

  const openCard = (card) => {
    playBeep(800, 150); // Play a cute beep sound
    setSelectedCard(card);
  };

  const closeCard = () => {
    playBeep(600, 100); // Play a lower beep when closing
    setSelectedCard(null);
  };

  return (
    <ScreenContainer isVisible={true}>
      {/* Continuous Fireworks */}
      <Fireworks />

      {/* Falling Roses */}
      <FallingRoses />

      {/* Special Birthday Animation */}
      <SpecialAnimation />

      <div className="min-h-full w-full flex flex-col items-center justify-start p-4 md:p-6 gap-3 md:gap-4 relative z-10">
        <div className="w-full max-w-2xl flex flex-col items-center gap-3 md:gap-4">
          {/* Personal Dedication Message */}
          <PersonalDedication />

          {/* Cute Header */}
          <div className="cute-header text-center py-4 md:py-6 px-4 md:px-6 my-2 md:my-4 w-full">
            <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-800 to-pink-400 bg-clip-text text-transparent">
              Happy Birthday Sara 💝
            </h1>
            <p className="text-xs md:text-base text-pink-700/90 mt-2 md:mt-3 mb-1">
              Today is a happy day — not by chance, but by meaning.
            </p>
            <p className="text-xs md:text-base text-pink-700/90 mb-2">
              Here are 101/∞ reasons, written with love, prayers, and hope, just
              for you.
            </p>
            <p className="text-xs md:text-base text-pink-600/80 mt-1 md:mt-2 mb-2">
              ✿ Tap a mystery box to find a little wish waiting for you ✿
            </p>
          </div>

          {/* Birthday Trivia Section */}
          <BirthdayTrivia />

          {/* Mystery Cards Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 p-2 relative z-20 w-full justify-center">
            {wishes.map((card, index) => (
              <button
                key={card.id}
                onClick={() => openCard(card)}
                className={`mystery-box ${typeToBgClass[card.type] || "bg-rose-50"}`}
                style={{
                  "--rotate": `${getRotate(card.id)}deg`,
                  transform: `rotate(${getRotate(card.id)}deg)`,
                  animationDelay: `${index * 0.03}s`,
                }}
              >
                <span className="mystery-emoji">
                  {typeToEmoji[card.type] ||
                    cuteEmojis[index % cuteEmojis.length]}
                </span>
                <span className="mystery-number">{card.id}</span>
                <span className="mystery-qmark">?</span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <p className="text-pink-500 text-xs md:text-sm mb-4 text-center px-2">
            Made with 💖 for the sweetest person & her beautiful daughter
          </p>

          {/* Celebration Section */}
          <CelebrationSection />

          {/* Birthday GIFs Section */}
          <BirthdayGifs />
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={closeCard}>
          <div
            className={`modal-card ${typeToBgClass[selectedCard.type] || "bg-rose-50"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeCard}>
              ×
            </button>

            <div className="modal-decoration">
              <span className="modal-emoji">
                {typeToEmoji[selectedCard.type] ||
                  cuteEmojis[(selectedCard.id - 1) % cuteEmojis.length]}
              </span>
            </div>

            <div className="modal-number">#{selectedCard.id}</div>

            <p className="modal-wish">{selectedCard.reason}</p>

            <div className="modal-hearts">
              {["💕", "✨", "💖", "✨", "💕"].map((h, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </ScreenContainer>
  );
}

export default App;
