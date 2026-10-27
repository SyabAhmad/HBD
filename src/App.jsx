import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import "./App.css";
import ScreenContainer from "./components/ScreenContainer";
import wishes from "./data.json";
import { useSound } from "./hooks/useSound";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const BIRTH_YEAR = 2004;
const BIRTH_MONTH = 1; // February (0-indexed)

const ordinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
const ageTurning = () => {
  const now = new Date();
  let year = now.getFullYear();
  if (now.getMonth() < BIRTH_MONTH) year -= 1;
  return year - BIRTH_YEAR;
};
const AGE_ORD = ordinal(ageTurning());

/* Exact date this site was first created (first git commit). */
const FOUNDED = new Date("2026-01-27T00:00:00");

const typeToAccent = {
  gratitude: "#b8860b",
  prayer: "#5b8fa8",
  love: "#e0218a",
  hope: "#6b8e23",
  faith: "#7b68a6",
  wisdom: "#2e7d6b",
};
const letters = wishes.map((c) => ({ ...c, accent: typeToAccent[c.type] || "#e0218a" }));

const LETTER_PARAS = [
  `On your ${AGE_ORD} birthday, I want you to know that every moment of your journey has been a blessing.`,
  "From the day you were born on February 1st, 2004, you brought infinite joy and light to everyone around you — and you've grown into a remarkable young woman with a beautiful soul.",
  "Now, as you hold your own little daughter, a whole new chapter of love has begun. You are not just a year older. You are stronger, wiser, and more beautiful than ever.",
  "Here are a hundred and one little reasons why you are so special, so loved, and so cherished.",
];

const SCENES = ["hero", "letter", "cake", "book", "closing"];

/* One big word per section — the sentence you read as you travel through. */
const BIG_WORDS = ["SARA", "YOU", "ARE", "BELOVED", "You are always mine ;)"];

/* ------------------------------------------------------------------ */
/*  Cherry tree (side decoration)                                     */
/* ------------------------------------------------------------------ */
const BLOSSOMS = [
  [340, 292], [330, 240], [310, 172], [68, 322], [82, 256], [100, 196],
  [200, 108], [190, 152], [232, 342], [158, 372], [250, 268], [130, 300],
  [280, 318], [120, 180], [214, 202], [58, 268], [352, 214], [88, 142],
  [262, 150], [176, 242], [302, 118], [148, 112], [368, 262], [36, 200],
  [240, 196], [166, 128], [318, 300], [26, 258], [206, 262], [110, 236],
];
const PETAL_COLORS = ["#ffb7d5", "#ffc9de", "#f9a7ca", "#ffd5e6"];

function CherryTree() {
  return (
    <svg className="cherry-tree" viewBox="0 0 400 600" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* ground shadow */}
      <ellipse cx="196" cy="596" rx="86" ry="12" fill="#e7c9a6" opacity="0.5" />

      <g stroke="#8d6350" fill="none" strokeLinecap="round">
        {/* trunk, tapering upward */}
        <path d="M190 600 C186 500 196 424 200 350" strokeWidth="24" />
        <path d="M200 350 C204 300 197 250 194 196" strokeWidth="15" />
        <path d="M194 196 C191 168 189 142 188 112" strokeWidth="9" />
        {/* right limbs */}
        <path d="M198 384 C252 352 302 332 342 292" strokeWidth="11" />
        <path d="M200 320 C254 302 298 282 332 242" strokeWidth="8" />
        <path d="M196 252 C242 232 282 212 312 172" strokeWidth="7" />
        <path d="M196 196 C232 178 268 160 292 132" strokeWidth="5" />
        {/* left limbs */}
        <path d="M196 404 C150 382 110 352 68 322" strokeWidth="11" />
        <path d="M198 332 C156 316 118 294 82 256" strokeWidth="8" />
        <path d="M194 264 C160 248 128 230 100 196" strokeWidth="7" />
        <path d="M194 208 C166 192 140 176 118 152" strokeWidth="5" />
        {/* twigs */}
        <path d="M342 292 C356 282 366 272 372 258" strokeWidth="4" />
        <path d="M68 322 C56 310 48 300 44 288" strokeWidth="4" />
        <path d="M188 112 C186 96 186 84 188 72" strokeWidth="5" />
        <path d="M200 350 C208 330 216 316 226 304" strokeWidth="4" />
        <path d="M198 384 C190 366 184 354 176 342" strokeWidth="4" />
      </g>

      {BLOSSOMS.map(([cx, cy], i) => {
        const r = 13 + (i % 4) * 3;
        return (
          <g key={i} className="blossom" style={{ animationDelay: `${(i % 7) * 0.6}s` }}>
            <circle cx={cx} cy={cy} r={r} fill={PETAL_COLORS[i % 4]} opacity="0.72" />
            <circle cx={cx - r * 0.6} cy={cy + r * 0.45} r={r * 0.72} fill={PETAL_COLORS[(i + 1) % 4]} opacity="0.68" />
            <circle cx={cx + r * 0.65} cy={cy + r * 0.3} r={r * 0.6} fill="#fff2f7" opacity="0.9" />
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Cake — tap to blow                                                */
/* ------------------------------------------------------------------ */
function CakeScene() {
  const [lit, setLit] = useState(true);
  const [burst, setBurst] = useState(false);
  const { playBeep } = useSound();

  useEffect(() => {
    if (burst) {
      const t = setTimeout(() => setBurst(false), 1800);
      return () => clearTimeout(t);
    }
  }, [burst]);

  const blow = () => {
    if (!lit) return;
    playBeep(720, 90);
    setLit(false);
    setBurst(true);
  };

  return (
    <div className="cake-wrap">
      <p className="scene-sub">{lit ? "tap the cake to blow them out" : "it is done ✦"}</p>

      <button className="cake" onClick={blow} aria-label="Blow out candles">
        <span className="candles">
          {[0, 1, 2].map((i) => (
            <span key={i} className="candle">
              {lit && <span className="flame" />}
            </span>
          ))}
        </span>

        <span className="tier tier-top">
          <span className="frosting" />
          <span className="cherry c1" />
          <span className="cherry c2" />
          <span className="cherry c3" />
        </span>

        <span className="tier tier-mid">
          <span className="hearts-row">♥ ♥ ♥</span>
        </span>

        <span className="stand" />
      </button>

      {burst && (
        <div className="burst" aria-hidden="true">
          {["💗", "💕", "💖", "💞", "💓", "💗"].map((h, i) => (
            <span key={i} className="burst-heart" style={{ animationDelay: `${i * 0.12}s` }}>
              {h}
            </span>
          ))}
        </div>
      )}

      <p className={lit ? "cake-hint" : "cake-wish"}>
        {lit
          ? "three little flames, waiting for you"
          : "✦ the wish is kept between you and the stars ✦"}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Letter book                                                       */
/* ------------------------------------------------------------------ */
function BookScene() {
  const [index, setIndex] = useState(0);
  const { playBeep } = useSound();
  const current = letters[index];
  const next = () => { playBeep(640, 80); setIndex((i) => (i + 1) % letters.length); };
  const prev = () => { playBeep(540, 80); setIndex((i) => (i - 1 + letters.length) % letters.length); };
  const shuffle = () => { playBeep(700, 100); setIndex(Math.floor(Math.random() * letters.length)); };

  return (
    <div className="book-wrap">
      <p className="scene-sub">turn them slowly — they were folded just for you</p>
      <div className="book">
        <button className="book-nav" onClick={prev} aria-label="Previous letter">‹</button>
        <article className="page" style={{ "--accent": current.accent }}>
          <span className="wax page-wax">{current.id}</span>
          <p className="page-text">{current.reason}</p>
        </article>
        <button className="book-nav" onClick={next} aria-label="Next letter">›</button>
      </div>
      <div className="book-foot">
        <span className="page-count">
          {current.id} <span className="sep">/</span> {letters.length}
        </span>
        <button className="link-btn" onClick={shuffle}>another one ✦</button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                               */
/* ------------------------------------------------------------------ */
function App() {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  const { playBeep } = useSound();
  const lockRef = useRef(false);
  const touchRef = useRef(0);

  const goto = useCallback((i) => {
    setActive((a) => {
      const n = Math.max(0, Math.min(SCENES.length - 1, i));
      if (n !== a) playBeep(600, 70);
      return n;
    });
  }, [playBeep]);

  // Wheel navigation (one scene per gesture, throttled)
  useEffect(() => {
    if (!opened) return;
    const onWheel = (e) => {
      e.preventDefault();
      if (lockRef.current) return;
      if (Math.abs(e.deltaY) < 12) return;
      lockRef.current = true;
      setTimeout(() => (lockRef.current = false), 700);
      setActive((a) => {
        const n = e.deltaY > 0 ? a + 1 : a - 1;
        return Math.max(0, Math.min(SCENES.length - 1, n));
      });
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [opened]);

  // Keyboard navigation
  useEffect(() => {
    if (!opened) return;
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goto(active + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goto(active - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [opened, active, goto]);

  const onTouchStart = (e) => (touchRef.current = e.touches[0].clientY);
  const onTouchEnd = (e) => {
    const diff = touchRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) goto(active + (diff > 0 ? 1 : -1));
  };

  const founded = useMemo(
    () => FOUNDED.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }),
    [],
  );

  const renderScene = (name) => {
    switch (name) {
      case "hero":
        return (
          <>
            <p className="scene-eyebrow">sealed with love</p>
            <h1 className="hero-title">
              Happy Birthday,<br />
              <span className="hero-name">Sara</span>
            </h1>
            <div className="rule">✦ ❧ ✦</div>
            <p className="scene-sub">
              {AGE_ORD} years of being somebody&rsquo;s favourite miracle
            </p>
          </>
        );
      case "letter":
        return (
          <>
            <p className="scene-eyebrow">a note</p>
            <h2 className="scene-title">For you, Sara</h2>
            <div className="sheet">
              <span className="wax">♥</span>
              <div className="sheet-frame">
                <p className="sheet-to">Dear Sara,</p>
                <div className="sheet-body">
                  {LETTER_PARAS.map((p, i) => (
                    <p key={i} className="para" style={{ animationDelay: `${0.25 + i * 0.4}s` }}>
                      {p}
                    </p>
                  ))}
                </div>
                <div className="sheet-sign">
                  <span className="sign-label">Yours, always</span>
                  <span className="sign-name">MenteE&rsquo;s Leader</span>
                </div>
              </div>
            </div>
          </>
        );
      case "cake":
        return (
          <>
            <p className="scene-eyebrow">make a wish</p>
            <h2 className="scene-title">Blow out the candles</h2>
            <CakeScene />
          </>
        );
      case "book":
        return (
          <>
            <p className="scene-eyebrow">the bundle</p>
            <h2 className="scene-title">One hundred &amp; one little letters</h2>
            <BookScene />
          </>
        );
      case "closing":
        return (
          <>
            <div className="rule">✦ ❧ ✦</div>
            <p className="closing-text">
              May your {AGE_ORD} year be gentle with you, and full of the kind of
              joy you give everyone else.
            </p>
            <p className="closing-sign">— MenteE&rsquo;s Leader</p>
            <p className="closing-meta">folded &amp; waiting since {founded}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScreenContainer isVisible={true}>
      {/* ---------- Cover envelope ---------- */}
      {!opened && (
        <div className="cover">
          <div className="cover-inner">
            <p className="cover-eyebrow">a letter for</p>
            <h1 className="cover-name">Sara</h1>
            <button
              className="envelope-open"
              onClick={() => { playBeep(660, 140); setOpened(true); }}
            >
              <span className="envelope">
                <span className="env-back" />
                <span className="env-letter">
                  <span className="env-heart">♥</span>
                </span>
                <span className="env-front" />
                <span className="env-flap" />
              </span>
              <span className="envelope-hint">tap to open</span>
            </button>
            <p className="cover-from">from MenteE&rsquo;s Leader</p>
          </div>
        </div>
      )}

      {/* ---------- One scene at a time ---------- */}
      <div
        className="stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ pointerEvents: opened ? "auto" : "none" }}
      >
        <div className="grain" aria-hidden="true" />
        <CherryTree />
        {SCENES.map((name, i) => (
          <section
            key={name}
            className={`scene ${i === active ? "is-active" : ""}`}
            aria-hidden={i !== active}
          >
            <div className="scene-inner">
              <p className={`bigword ${BIG_WORDS[i].length > 8 ? "long" : ""}`}>
                {BIG_WORDS[i]}
              </p>
              {renderScene(name)}
            </div>
          </section>
        ))}

        {/* progress line */}
        <div className="progress" aria-hidden="true">
          <span
            className="progress-fill"
            style={{ width: `${((active + 1) / SCENES.length) * 100}%` }}
          />
        </div>

        {/* ambient petals */}
        <div className="petals" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="petal" style={{ "--d": `${9 + i * 2}s`, "--x": `${8 + i * 16}%`, "--delay": `${i * 2.5}s` }} />
          ))}
        </div>

        {/* progress dots */}
        <nav className="dots" aria-label="Scenes">
          {SCENES.map((name, i) => (
            <button
              key={name}
              className={`dot ${i === active ? "on" : ""}`}
              onClick={() => goto(i)}
              aria-label={`Go to ${name}`}
            />
          ))}
        </nav>

        {active < SCENES.length - 1 && (
          <button className="scroll-hint" onClick={() => goto(active + 1)}>
            scroll ↓
          </button>
        )}
      </div>
    </ScreenContainer>
  );
}

export default App;
