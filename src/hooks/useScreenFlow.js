import { useState } from "react";

export default function useScreenFlow() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [screenData, setScreenData] = useState({});

  const screens = [
    "envelope",
    "popup1",
    "popup2",
    "popup3",
    "cakeReveal",
    "candleBlow",
    "cakeCut",
    "celebration",
    "poetry",
    "prayer",
    "littleMinty",
    "closing",
  ];

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen((prev) => prev + 1);
    }
  };

  const goToScreen = (screenName) => {
    const index = screens.indexOf(screenName);
    if (index !== -1) {
      setCurrentScreen(index);
    }
  };

  const updateScreenData = (key, value) => {
    setScreenData((prev) => ({ ...prev, [key]: value }));
  };

  return {
    currentScreen: screens[currentScreen],
    currentIndex: currentScreen,
    nextScreen,
    goToScreen,
    screenData,
    updateScreenData,
    isScreen: (screenName) => screens[currentScreen] === screenName,
  };
}
