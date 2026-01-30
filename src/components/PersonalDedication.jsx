import { useState } from "react";

export default function PersonalDedication() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="new-dedication-card">
      <div
        className="dedication-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="dedication-icon">💌</div>
        <div className="dedication-title">✨💝 A Personal Message 💝✨</div>
        <div className={`dedication-toggle ${isExpanded ? "active" : ""}`}>
          +
        </div>
      </div>

      {isExpanded && (
        <div className="dedication-body">
          <p>
            Dear <span className="highlight">Sara 💝</span>,
          </p>
          <p>
            On your <strong>20th birthday 🎂</strong>, I want you to know that
            every moment of your journey has been a blessing 💫
          </p>
          <p>
            From the day you were born on <strong>February 1st, 2004 🌸</strong>
            , you brought infinite joy ✨ and light 💡 to everyone around you.
            You've grown into a remarkable young woman with a beautiful soul 💕
          </p>
          <p>
            And now, as you celebrate motherhood 👶💕 with your precious
            daughter born on <strong>January 10th, 2026 💝</strong>, a whole new
            chapter of love 💖 has begun. You're not just a year older—you're
            stronger 💪, wiser 🧠, and more beautiful 🌺 than ever.
          </p>
          <p className="dedication-closing">
            Here are <strong>101+ reasons 💯</strong> why you are so special ✨,
            so loved 💗, and so cherished 🌟. You deserve all the happiness in
            the world! 🎉
          </p>
        </div>
      )}
    </div>
  );
}
