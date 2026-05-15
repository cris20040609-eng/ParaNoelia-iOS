
import React, { useState, useEffect } from 'react';
import { AppScreen, SpecialDate } from './types';
import FloatingHearts from './components/FloatingHearts';
import LandingScreen from './components/LandingScreen';
import KeypadScreen from './components/KeypadScreen';
import SuccessScreen from './components/SuccessScreen';
import GiftScreen from './components/GiftScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.LANDING);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedSpecialDate, setSelectedSpecialDate] = useState<SpecialDate | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.LANDING:
        return <LandingScreen onNext={() => setCurrentScreen(AppScreen.KEYPAD)} />;
      case AppScreen.KEYPAD:
        return (
          <KeypadScreen 
            onBack={() => setCurrentScreen(AppScreen.LANDING)} 
            onSuccess={(specialDate) => {
              setSelectedSpecialDate(specialDate);
              setCurrentScreen(AppScreen.SUCCESS);
            }} 
          />
        );
      case AppScreen.SUCCESS:
        return (
          <SuccessScreen 
            specialDate={selectedSpecialDate!} 
            onNext={() => setCurrentScreen(AppScreen.GIFT)} 
          />
        );
      case AppScreen.GIFT:
        return (
          <GiftScreen 
            specialDate={selectedSpecialDate!} 
            onRestart={() => {
              setSelectedSpecialDate(null);
              setCurrentScreen(AppScreen.LANDING);
            }} 
          />
        );
      default:
        return <LandingScreen onNext={() => setCurrentScreen(AppScreen.KEYPAD)} />;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <FloatingHearts />
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full glass-panel shadow-lg hover:scale-110 active:scale-95 transition-all text-primary"
      >
        <span className="material-icons-outlined">
          {isDarkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>

      {/* Main Content Area */}
      <div className="w-full max-w-md z-10 transition-all duration-700 ease-in-out">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
