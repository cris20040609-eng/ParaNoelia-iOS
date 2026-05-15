
import React from 'react';
import { SpecialDate } from '../types';

interface Props {
  specialDate: SpecialDate;
  onNext: () => void;
}

const SuccessScreen: React.FC<Props> = ({ specialDate, onNext }) => {
  const isMom = specialDate.id === "19081975";
  const isDad = specialDate.id === "05081977";

  return (
    <div className="animate-in fade-in zoom-in duration-1000 text-center">
      <div className="glass-panel rounded-[3rem] p-10 shadow-2xl border-4 border-rose-100 dark:border-rose-900/50">
        <div className="mb-8 relative flex justify-center">
          <div className="bg-rose-50 dark:bg-rose-900/40 p-6 rounded-full inline-flex animate-bounce">
            <span className="material-icons-outlined text-primary text-7xl">
              {isMom ? 'auto_awesome' : (specialDate.title.toLowerCase().includes('cumple') ? 'cake' : 'favorite')}
            </span>
          </div>
          <span className="material-icons-outlined absolute -top-4 -right-4 text-primary text-4xl animate-pulse">
            {isMom ? 'auto_fix_high' : 'favorite'}
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-rose-600 dark:text-rose-300 mb-6 leading-tight">
          {isMom ? 'Un momento especial...' : isDad ? 'Ese señor...' : '¡Adivinaste, Noelia!'}
        </h1>

        <div className="mb-10">
          <p className="text-gray-700 dark:text-rose-100 text-xl leading-relaxed italic">
            {isMom 
              ? 'Tengo algo muy tierno que decirte sobre esto...' 
              : 'Prepárate para lo que he escrito (no me mates).'}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="material-icons-outlined text-primary text-sm">favorite</span>
            <span className="material-icons-outlined text-primary text-sm">favorite</span>
            <span className="material-icons-outlined text-primary text-sm">favorite</span>
          </div>
        </div>

        <button 
          onClick={onNext}
          className="bg-primary hover:bg-rose-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full group"
        >
          <span>Ver mi mensaje</span>
          <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">card_giftcard</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
