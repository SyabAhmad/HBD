import React from "react";

// Pre-defined emoji arrays to prevent recreation
const TOP_EMOJIS = ["😸", "🎉", "🐱", "✨", "😻", "🎂", "🐈"];
const BOTTOM_EMOJIS = ["🎈", "🌸", "😻", "💫", "🎁", "👑", "🐱"];
const HEARTS = ["💕", "💖", "💗", "💝", "💓"];

function CelebrationSection() {
  return (
    <div className="celebration-section">
      <div className="celebration-content">
        <div className="celebration-emoji-row">
          {TOP_EMOJIS.map((emoji, i) => (
            <span key={`top-${i}`} className="celebrate-emoji">
              {emoji}
            </span>
          ))}
        </div>

        <h2 className="celebration-title">You're Amazing! 🌟</h2>

        <p className="celebration-text">
          Whether you've read 1 wish or all 101, know that{" "}
          <strong>every single message carries love, hope, and prayers</strong>{" "}
          for you. 💖
        </p>

        <div className="celebration-hearts">
          {HEARTS.map((heart, i) => (
            <span key={`heart-${i}`}>{heart}</span>
          ))}
        </div>

        <p className="celebration-message">
          <strong>From the bottom of our hearts:</strong> We are so proud of
          you, so grateful for you, and so in love with the incredible person
          you are. 👑
        </p>

        <p className="celebration-footer">
          May your 20th year be filled with endless blessings, beautiful
          moments, and dreams coming true. 🌈✨
        </p>

        <div className="celebration-emoji-row bottom">
          {BOTTOM_EMOJIS.map((emoji, i) => (
            <span key={`bottom-${i}`} className="celebrate-emoji">
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(CelebrationSection);
