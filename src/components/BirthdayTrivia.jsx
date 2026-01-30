import { useState } from "react";
import { getBirthdayTrivia } from "../utils/birthdayTrivia";

export default function BirthdayTrivia() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const facts = getBirthdayTrivia("01/02/2004");
  const currentFact = facts[currentFactIndex];

  const nextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
  };

  const prevFact = () => {
    setCurrentFactIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  return (
    <div className="new-trivia-card">
      <div className="trivia-header">
        <div className="trivia-badge">✨ DID YOU KNOW? ✨</div>
      </div>

      <div className="trivia-body">
        <div className="trivia-fact-emoji">{currentFact.emoji}</div>
        <div className="trivia-fact-title">{currentFact.title}</div>
        <div className="trivia-fact-text">{currentFact.fact}</div>

        <div className="trivia-nav">
          <button onClick={prevFact} className="trivia-prev">
            ←
          </button>
          <div className="trivia-dots">
            {facts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFactIndex(idx)}
                className={`dot ${idx === currentFactIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <button onClick={nextFact} className="trivia-next">
            →
          </button>
        </div>

        <div className="trivia-counter">
          {currentFactIndex + 1} of {facts.length}
        </div>
      </div>
    </div>
  );
}
