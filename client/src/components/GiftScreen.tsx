
import React, { useState, useEffect } from 'react';
import { generateRomanticMessage } from '../services/gemini';
import { SpecialDate } from '../types';
import { SpecialDateWithVideo } from '../data/specialDates';

interface Props {
  specialDate: SpecialDate;
  onRestart: () => void;
}

const GiftScreen: React.FC<Props> = ({ specialDate, onRestart }) => {
  const [message, setMessage] = useState<string>("Generando un mensaje especial para ti...");
  const [loading, setLoading] = useState(true);
  const videoData = specialDate as SpecialDateWithVideo;

  useEffect(() => {
    const fetchMessage = async () => {
      if (specialDate.message && specialDate.message.trim() !== "") {
        setMessage(specialDate.message);
        setLoading(false);
      } else {
        const msg = await generateRomanticMessage("Noelia", specialDate.formatted);
        setMessage(msg);
        setLoading(false);
      }
    };
    fetchMessage();
  }, [specialDate]);

  return (
    <div className="flex flex-col items-center gap-8 animate-in slide-in-from-bottom duration-1000">
      {/* Music Player Mockup Header */}
      <header className="w-full">
        <div className="glass-panel rounded-full py-3 px-6 flex items-center justify-between shadow-xl animate-float">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary animate-spin-slow">
                <img 
                  alt="Album art" 
                  className="w-full h-full object-cover" 
                  src={`https://picsum.photos/seed/${specialDate.id}/100/100`} 
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">En bucle</span>
              <span className="text-sm font-medium text-rose-900 dark:text-rose-100 truncate w-32">
                {specialDate.title}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-rose-400 hover:text-primary transition-colors">
              <span className="material-icons-outlined text-lg">skip_previous</span>
            </button>
            <button className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <span className="material-icons-outlined text-base">pause</span>
            </button>
            <button className="text-rose-400 hover:text-primary transition-colors">
              <span className="material-icons-outlined text-lg">skip_next</span>
            </button>
          </div>
        </div>
        <div className="mt-2 px-4">
          <div className="w-full h-1 bg-rose-200 dark:bg-rose-900/40 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-2/3 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Video Player */}
      <div className="relative group w-full max-w-[320px]">
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative animate-float bg-black rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoData.videoId}?autoplay=1&controls=1&modestbranding=1`}
              title={`${videoData.songTitle} - ${videoData.artist}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl"
            />
          </div>
          <span className="absolute top-4 right-4 material-icons-outlined text-primary text-4xl animate-pulse-slow">favorite</span>
          <span className="absolute bottom-10 left-4 material-icons-outlined text-primary text-2xl animate-bounce">favorite</span>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm font-semibold text-rose-700 dark:text-rose-200">{videoData.songTitle}</p>
          <p className="text-xs text-rose-500 dark:text-rose-400">{videoData.artist}</p>
        </div>
      </div>

      {/* Romantic Message */}
      <div className="text-center px-4 max-w-sm">
        <h2 className="font-display text-5xl text-rose-800 dark:text-rose-100 mb-4">¡Para Ti!</h2>
        
        <div className="glass-panel p-6 rounded-3xl shadow-lg relative overflow-hidden min-h-[150px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-2 py-4">
              <div className="w-8 h-8 border-4 border-rose-200 border-t-primary rounded-full animate-spin"></div>
              <p className="text-rose-400 text-sm italic">Preparando algo especial...</p>
            </div>
          ) : (
            <div className="animate-in fade-in duration-1000">
              <p className="font-body text-lg text-rose-700 dark:text-rose-200 leading-relaxed italic">
                "{message}"
              </p>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-rose-400 opacity-60 italic">
          Noelia, {specialDate.formatted} siempre será parte de nosotros.
        </p>
      </div>

      <footer className="pb-8">
        <button 
          onClick={onRestart}
          className="group glass-panel px-8 py-3 rounded-full text-rose-700 dark:text-rose-200 font-medium flex items-center gap-2 hover:bg-white/60 transition-all shadow-md active:scale-95"
        >
          <span className="material-icons-outlined text-primary group-hover:rotate-180 transition-transform duration-700">restart_alt</span>
          Probar otra fecha
        </button>
      </footer>

      <style>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GiftScreen;
