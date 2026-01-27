import { useState } from "react";
import "./App.css";
import ScreenContainer from "./components/ScreenContainer";
import wishes from "./data.json";

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

  const openCard = (card) => {
    setSelectedCard(card);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  return (
    <ScreenContainer isVisible={true}>
      <div className="min-h-full w-full flex flex-col items-center justify-start p-6 gap-4 relative z-10">
        {/* Cute Header */}
        <div className="cute-header text-center py-6 px-6 my-4">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-800 to-pink-400 bg-clip-text text-transparent">
            Happy Birthday MenteE
          </h1>
          <p className="text-sm md:text-base text-pink-700/90 mt-3 mb-1">
            Today is a happy day — not by chance, but by meaning.
          </p>
          <p className="text-sm md:text-base text-pink-700/90 mb-2">
            Here are 101/∞ reasons, written with love, prayers, and hope, just
            for you.
          </p>
          <p className="text-sm md:text-base text-pink-600/80 mt-2 mb-2">
            ✿ Tap a mystery box to find a little wish waiting for you ✿
          </p>
        </div>

        {/* Mystery Cards Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-5 max-w-5xl p-2 relative z-20">
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
        <p className="text-pink-500 text-sm mb-4">
          Made with 💖 for the sweetest person
        </p>
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
