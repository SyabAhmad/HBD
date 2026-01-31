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
            On your <strong>20th birthday 🎂💝</strong>, I want you to know that
            every moment of your journey has been a blessing 🥹 🥹 💝💫
          </p>
          <p>
            From the day you were born on <strong>February 1st, 2004 🌸</strong>
            , you brought infinite joy ✨ and light 💡 to everyone around you.
            You've grown into a remarkable young woman with a beauuuuutifullll
            soullll 🥹 🥹 💝💕
          </p>
          <p>
            And now, as you celebrate motherhood 👶💕 with your precioussssssss
            daughter born on <strong>January 10th, 2026 💝</strong>, a whole new
            chapter of lovvvvvve 💖 has begun. You're not just a year
            older—you're strongerrrrrrr 💪, wiser 🧠, and more beautifffulllll
            💗 🌺 than everrrrrr.
          </p>
          <p className="dedication-closing">
            Here are <strong>101+ reasons 💯</strong> why you are so special ✨,
            so loveddddddd 💗, and so cherished 🌟. You deserve all the
            happinesssssss in the worldddddd! 🎉
          </p>
        </div>
      )}
    </div>
  );
}
