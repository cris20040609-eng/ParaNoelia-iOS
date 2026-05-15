
import React, { useState } from 'react';
import { SpecialDate } from '../types';
import { SPECIAL_DATES } from '../data/specialDates';

interface Props {
  onBack: () => void;
  onSuccess: (date: SpecialDate) => void;
}

const KeypadScreen: React.FC<Props> = ({ onBack, onSuccess }) => {
  const [digits, setDigits] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const placeholders = ['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A'];

  const addDigit = (digit: string) => {
    if (digits.length < 8) {
      setDigits([...digits, digit]);
      setIsError(false);
    }
  };

  const deleteDigit = () => {
    setDigits(digits.slice(0, -1));
  };

  const clear = () => setDigits([]);

  const handleSubmit = () => {
    const input = digits.join('');
    if (input.length < 8) {
      triggerError();
      return;
    }
    
    const matchedDate = SPECIAL_DATES[input];

    if (matchedDate) {
      onSuccess(matchedDate);
    } else {
      setShowModal(true);
      triggerError();
    }
  };

  const triggerError = () => {
    setIsError(true);
    setTimeout(() => setIsError(false), 500);
  };

  return (
    <div className="animate-in slide-in-from-bottom duration-500 relative">
      <div className={`glass-panel rounded-[2.5rem] p-8 shadow-2xl border transition-all ${isError ? 'border-red-500 shake' : 'border-white/20'}`}>
        <style>{`
          .shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
          @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
          }
        `}</style>
        
        <div className="text-center mb-8">
          <span className="material-icons-outlined text-primary text-4xl mb-2 animate-pulse">favorite</span>
          <h2 className="font-display text-primary text-3xl dark:text-rose-400">Fecha Especial</h2>
          <p className="text-xs text-rose-300 mt-1 tracking-widest uppercase italic">Esa que solo tú y yo sabemos...</p>
        </div>

        {/* Visor de Fecha mejorado */}
        <div className="bg-rose-50/50 dark:bg-rose-950/40 rounded-2xl py-6 mb-10 flex justify-center items-center gap-1.5 md:gap-2 text-2xl font-bold text-primary">
          {placeholders.map((char, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <span className={`transition-colors duration-300 ${digits[i] ? 'text-rose-600' : 'text-rose-200 dark:text-rose-800'}`}>
                  {digits[i] || char}
                </span>
                <div className={`h-1 w-4 md:w-5 rounded-full mt-1 transition-all duration-300 ${digits[i] ? 'bg-rose-500 scale-x-110' : 'bg-rose-100 dark:bg-rose-900'}`} />
              </div>
              
              {/* Separadores con espacio real */}
              {(i === 1 || i === 3) && (
                <span className="text-rose-200 dark:text-rose-800 mx-1 md:mx-2 self-start mt-[-2px]">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => addDigit(num.toString())}
              className="h-16 w-16 mx-auto rounded-full glass-panel flex items-center justify-center text-xl font-semibold text-rose-700 dark:text-rose-100 hover:bg-rose-50 dark:hover:bg-rose-900/50 transition-all active:scale-90 shadow-sm"
            >
              {num}
            </button>
          ))}
          <button onClick={deleteDigit} className="text-rose-300 hover:text-primary transition-colors text-xs font-bold uppercase">Borrar</button>
          <button
            onClick={() => addDigit('0')}
            className="h-16 w-16 mx-auto rounded-full glass-panel flex items-center justify-center text-xl font-semibold text-rose-700 dark:text-rose-100 hover:bg-rose-50 dark:hover:bg-rose-900/50 transition-all active:scale-90 shadow-sm"
          >
            0
          </button>
          <button
            onClick={handleSubmit}
            className="h-16 w-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 active:scale-95 transition-all"
          >
            <span className="material-icons-outlined">favorite</span>
          </button>
        </div>

        <button 
          onClick={onBack}
          className="mt-8 w-full text-rose-300 dark:text-rose-600 hover:text-primary transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <span className="material-icons-outlined text-base">arrow_back</span> Regresar
        </button>
      </div>

      {/* Pop-up Suave para fechas incorrectas */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-background-dark/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="glass-panel relative rounded-[2rem] p-8 max-w-xs w-full shadow-2xl border-2 border-rose-300 dark:border-rose-800 animate-in zoom-in duration-300 text-center">
            <span className="material-icons-outlined text-primary text-5xl mb-4">sentiment_very_dissatisfied</span>
            <h3 className="font-display text-2xl text-rose-600 dark:text-rose-300 mb-4">¡Ups!</h3>
            <p className="text-rose-800 dark:text-rose-100 text-lg leading-relaxed mb-6">
              Esa fecha es linda, pero no es de las que guardo en mi baúl de tesoros. ¡Pon una fecha que sea realmente especial para nosotros! ❤️
            </p>
            <button 
              onClick={() => {
                setShowModal(false);
                clear();
              }}
              className="w-full py-3 px-6 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all active:scale-95"
            >
              Vale, Cris... ¡reintento!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeypadScreen;
