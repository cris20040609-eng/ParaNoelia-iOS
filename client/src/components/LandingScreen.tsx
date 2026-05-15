
import React from 'react';

interface Props {
  onNext: () => void;
}

const LandingScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700">
      <button 
        onClick={onNext}
        className="group relative flex flex-col items-center focus:outline-none"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center animate-pulse-slow group-hover:scale-105 transition-transform duration-300">
          <div className="absolute top-[10%] w-24 h-24 md:w-32 md:h-32 border-[10px] md:border-[12px] border-rose-200 dark:border-rose-900 rounded-t-full -z-10"></div>
          <span className="material-icons-outlined text-primary" style={{ fontSize: '160px', filter: 'drop-shadow(0 10px 15px rgba(255, 77, 109, 0.4))' }}>
            favorite
          </span>
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 flex flex-col items-center">
             <span className="material-icons-outlined text-white text-3xl">lock</span>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <h1 className="text-primary font-handwritten text-4xl md:text-5xl mb-2">
            Hola, Noelia
          </h1>
          <p className="text-rose-400 dark:text-rose-300 font-display text-2xl animate-bounce-subtle">
            Toca mi corazón para desbloquearlo
          </p>
          <p className="mt-4 text-[10px] text-rose-300 dark:text-rose-700 uppercase tracking-[0.2em] font-bold">
            Hecho con amor (y mucha paciencia) por Cris
          </p>
        </div>
      </button>
    </div>
  );
};

export default LandingScreen;
