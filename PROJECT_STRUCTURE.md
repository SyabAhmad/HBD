# 🎂 Project Structure Overview

## 📁 Complete File Tree

```
HBD/
├── 📄 START_HERE.md           ← READ THIS FIRST!
├── 📄 IMPLEMENTATION.md       ← Full technical docs
├── 📄 README.md               ← Project info
├── 📄 package.json
├── 📄 vite.config.js          ← Tailwind CSS v4 configured
├── 📄 index.html              ← Mobile meta tags added
│
├── 📂 public/                 ← Put your music file here
│
└── 📂 src/
    ├── 📄 main.jsx           ← Entry point
    ├── 📄 App.jsx            ← Main orchestrator (clean!)
    ├── 📄 App.css            ← Minimal styles
    ├── 📄 index.css          ← Tailwind + custom animations
    │
    ├── 📂 components/
    │   ├── 📄 Button.jsx              ← Reusable button
    │   ├── 📄 ScreenContainer.jsx     ← Screen wrapper
    │   │
    │   └── 📂 screens/                ← All 14 screens
    │       ├── 📄 EnvelopeScreen.jsx      → Screen 1
    │       ├── 📄 Popup1Screen.jsx        → Screen 2
    │       ├── 📄 Popup2Screen.jsx        → Screen 3
    │       ├── 📄 Popup3Screen.jsx        → Screen 4
    │       ├── 📄 CakeRevealScreen.jsx    → Screen 5
    │       ├── 📄 CandleBlowScreen.jsx    → Screen 6 (mic!)
    │       ├── 📄 CakeCutScreen.jsx       → Screen 7
    │       ├── 📄 SendCakeScreen.jsx      → Screen 8
    │       ├── 📄 AirplaneScreen.jsx      → Screen 9
    │       ├── 📄 CelebrationScreen.jsx   → Screen 10 (music)
    │       ├── 📄 PoetryScreen.jsx        → Screen 11 (Urdu)
    │       ├── 📄 PrayerScreen.jsx        → Screen 12
    │       ├── 📄 LittleMintyScreen.jsx   → Screen 13 (baby)
    │       └── 📄 ClosingScreen.jsx       → Screen 14 (end)
    │
    ├── 📂 hooks/                      ← Custom React hooks
    │   ├── 📄 useScreenFlow.js        → State management
    │   ├── 📄 useMicrophoneBlow.js    → Mic detection
    │   └── 📄 useMusicPlayer.js       → Audio control
    │
    └── 📂 utils/                      ← Helper functions
        └── 📄 animations.js           → Animation utilities
```

## 🎯 Key Files to Know

| File                     | Purpose              | Edit This To... |
| ------------------------ | -------------------- | --------------- |
| `App.jsx`                | Controls screen flow | Add music path  |
| `index.css`              | Global styles        | Change colors   |
| `screens/*.jsx`          | Individual screens   | Update content  |
| `hooks/useScreenFlow.js` | Screen order         | Reorder screens |

## 🎨 Component Hierarchy

```
App
 └── ScreenContainer (×14)
      └── Individual Screens
           └── Button (reusable)
```

## 🔄 Data Flow

```
App.jsx
  ↓ (state)
useScreenFlow hook
  ↓ (screen name)
Individual Screen Components
  ↓ (onNext callback)
useScreenFlow.nextScreen()
  ↓
Next Screen Shows
```

## 🎭 Screen States

Each screen is either:

- **visible**: `isVisible={true}` → Rendered & animated
- **hidden**: `isVisible={false}` → Not in DOM

Only ONE screen visible at a time!

## ✨ Special Components

### `CandleBlowScreen.jsx`

- Uses `useMicrophoneBlow` hook
- Requests microphone permission
- Fallback to tap button if denied

### `CelebrationScreen.jsx`

- Triggers music via `onMusicStart` prop
- Good place to start background audio

### `PoetryScreen.jsx`

- Line-by-line reveal animation
- Uses Urdu font (Noto Nastaliq)
- 1.5s delay between lines

### `AirplaneScreen.jsx`

- Auto-advances after 3.5s
- No button needed
- Flying animation with CSS

## 🎨 Styling Approach

1. **Tailwind CSS v4** for utility classes
2. **CSS Variables** for theme colors
3. **Custom animations** in index.css
4. **Inline styles** for dynamic values

## 🚀 Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

**Everything is organized, clean, and production-ready!** 🎉
