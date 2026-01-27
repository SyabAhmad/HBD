import useScreenFlow from "./hooks/useScreenFlow";
import useMusicPlayer from "./hooks/useMusicPlayer";
import FloatingHearts from "./components/FloatingHearts";

// Import all screens
import EnvelopeScreen from "./components/screens/EnvelopeScreen";
import Popup1Screen from "./components/screens/Popup1Screen";
import Popup2Screen from "./components/screens/Popup2Screen";
import Popup3Screen from "./components/screens/Popup3Screen";
import CakeRevealScreen from "./components/screens/CakeRevealScreen";
import CandleBlowScreen from "./components/screens/CandleBlowScreen";
import CakeCutScreen from "./components/screens/CakeCutScreen";

import CelebrationScreen from "./components/screens/CelebrationScreen";
import PoetryScreen from "./components/screens/PoetryScreen";
import PrayerScreen from "./components/screens/PrayerScreen";
import LittleMintyScreen from "./components/screens/LittleMintyScreen";
import ClosingScreen from "./components/screens/ClosingScreen";

function App() {
  const { currentScreen, nextScreen, isScreen } = useScreenFlow();
  const { play } = useMusicPlayer();

  const handleMusicStart = () => {
    // You can replace this with your actual music file path
    // play('/path/to/your/music.mp3');
    console.log("Music would start here");
  };

  return (
    <div className="w-full min-h-screen">
      <FloatingHearts />
      
      <EnvelopeScreen isVisible={isScreen("envelope")} onNext={nextScreen} />

      <Popup1Screen isVisible={isScreen("popup1")} onNext={nextScreen} />

      <Popup2Screen isVisible={isScreen("popup2")} onNext={nextScreen} />

      <Popup3Screen isVisible={isScreen("popup3")} onNext={nextScreen} />

      <CakeRevealScreen
        isVisible={isScreen("cakeReveal")}
        onNext={nextScreen}
      />

      <CandleBlowScreen
        isVisible={isScreen("candleBlow")}
        onNext={nextScreen}
      />

      <CakeCutScreen isVisible={isScreen("cakeCut")} onNext={nextScreen} />

      <CelebrationScreen
        isVisible={isScreen("celebration")}
        onNext={nextScreen}
        onMusicStart={handleMusicStart}
      />

      <PoetryScreen isVisible={isScreen("poetry")} onNext={nextScreen} />

      <PrayerScreen isVisible={isScreen("prayer")} onNext={nextScreen} />

      <LittleMintyScreen
        isVisible={isScreen("littleMinty")}
        onNext={nextScreen}
      />

      <ClosingScreen isVisible={isScreen("closing")} />
    </div>
  );
}

export default App;
