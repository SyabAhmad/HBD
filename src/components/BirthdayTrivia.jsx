import { useState, useMemo, useCallback } from "react";
import React from "react";
import { getBirthdayTrivia } from "../utils/birthdayTrivia";

// Memoized dot button component
const TriviaDot = React.memo(function TriviaDot({ isActive, onClick, index }) {
  return (
    <button
      onClick={onClick}
      className={`dot ${isActive ? "active" : ""}`}
      aria-label={`Go to fact ${index + 1}`}
      style={{ willChange: "transform, background-color" }}
    />
  );
});

// Memoized navigation button
const NavButton = React.memo(function NavButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`trivia-${direction}`}>
      {direction === "prev" ? "←" : "→"}
    </button>
  );
});

function BirthdayTrivia() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Memoize facts to prevent regeneration on each render
  const facts = useMemo(() => getBirthdayTrivia("01/02/2004"), []);
  const currentFact = facts[currentFactIndex];

  const nextFact = useCallback(() => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
  }, [facts.length]);

  const prevFact = useCallback(() => {
    setCurrentFactIndex((prev) => (prev - 1 + facts.length) % facts.length);
  }, [facts.length]);

  const goToFact = useCallback((index) => {
    setCurrentFactIndex(index);
  }, []);

  return (
    <div className="new-trivia-card">
      <div className="trivia-header">
        <div className="trivia-badge">✨ DID YOU KNOW? ✨</div>
      </div>

      <div className="trivia-body">
        <div className="trivia-fact-emoji" style={{ willChange: "transform" }}>
          {currentFact.emoji}
        </div>
        <div className="trivia-fact-title">{currentFact.title}</div>
        <div className="trivia-fact-text">{currentFact.fact}</div>

        <div className="trivia-nav">
          <NavButton direction="prev" onClick={prevFact} />
          <div className="trivia-dots">
            {facts.map((_, idx) => (
              <TriviaDot
                key={idx}
                index={idx}
                isActive={idx === currentFactIndex}
                onClick={() => goToFact(idx)}
              />
            ))}
          </div>
          <NavButton direction="next" onClick={nextFact} />
        </div>

        <div className="trivia-counter">
          {currentFactIndex + 1} of {facts.length}
        </div>
      </div>
    </div>
  );
}

export default React.memo(BirthdayTrivia);
