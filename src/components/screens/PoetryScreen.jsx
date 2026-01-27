import { useState, useEffect } from "react";
import ScreenContainer from "../ScreenContainer";
import Button from "../Button";

export default function PoetryScreen({ isVisible, onNext }) {
  const [visibleLines, setVisibleLines] = useState(0);

  const poetryLines = [
    "تیری آنکھوں کی وہ خاموش روشنی",
    "جو دل تک اتر جائے",
    "تیری باتوں میں وہ سکون",
    "جو وقت کو ٹھہرا دے",
    "تم جہاں ہو، وہاں سکون ہے",
    "تم جو مسکراؤ، دنیا روشن ہو جائے",
  ];

  useEffect(() => {
    if (!isVisible) {
      setVisibleLines(0);
      return;
    }

    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < poetryLines.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [isVisible, poetryLines.length]);

  return (
    <ScreenContainer isVisible={isVisible}>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-[var(--night)] text-white">
        <div className="max-w-4xl w-full space-y-10 text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-16 shadow-2xl border-4 border-yellow-600/30">
          <div className="text-6xl mb-8">🌙✨📜</div>
          {poetryLines.map((line, index) => (
            <p
              key={index}
              className={`urdu-text text-3xl md:text-4xl font-normal leading-loose transition-all duration-1000 ${
                index < visibleLines
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ color: "var(--gold)" }}
            >
              {line}
            </p>
          ))}

          {visibleLines >= poetryLines.length && (
            <div className="pt-12 fade-in">
              <Button onClick={onNext} variant="outline">
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    </ScreenContainer>
  );
}
