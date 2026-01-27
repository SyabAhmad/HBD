// Generate stable random positions for decorative elements
export function generateRandomPositions(count) {
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 37 + 17) % 100, // Pseudo-random but deterministic
    top: (i * 53 + 23) % 100,
    delay: (i * 0.3) % 3,
    duration: 3 + (i % 3),
  }));
}

export function generateStarPositions(count) {
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 41 + 13) % 100,
    top: (i * 47 + 19) % 100,
    opacity: 0.3 + (i % 5) * 0.1,
    delay: (i * 0.4) % 2,
    duration: 3 + (i % 4),
  }));
}

export function getRandomEmoji(index) {
  const emojis = ["⭐", "🌸", "✨", "🌙", "💫"];
  return emojis[index % emojis.length];
}
