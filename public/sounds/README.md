# Sound Effects Guide 🎵

## Optional: Add Your Own Sound Files

The app is set up to use Web Audio API beeps by default (no files needed), but you can add custom MP3 files here for a more personalized experience.

### To use custom sounds:

1. **Add MP3 files** to this folder:
   - `card-flip.mp3` - plays when opening a card
   - `reveal.mp3` - plays when a wish is revealed
   - `click.mp3` - plays on button clicks

2. **Update App.jsx** to use them:
   ```javascript
   const openCard = (card) => {
     playSound("card-flip.mp3"); // Use this instead of playBeep()
     setSelectedCard(card);
   };
   ```

### Free Sound Resources:

- [Freesound.org](https://freesound.org) - Free sound effects
- [Pixabay Sounds](https://pixabay.com/sounds/) - Royalty-free sounds
- [Zapsplat](https://www.zapsplat.com) - Free sound effects

### Current Setup:

- ✅ Web Audio API beeps enabled (works without files)
- ✅ playBeep() function ready to use
- 📁 Sounds folder created and ready for MP3 files

**The app works great with or without custom sound files!** 🎉
