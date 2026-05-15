
import React, { useEffect, useState } from 'react';
import { HeartParticle } from '../types';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * (30 - 15) + 15,
      duration: Math.random() * (15 - 10) + 10,
      delay: Math.random() * 5,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes rise {
          0% { transform: translateY(110vh) scale(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-10vh) scale(1.5) rotate(360deg); opacity: 0; }
        }
      `}</style>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="material-icons-outlined absolute text-primary opacity-0"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `rise ${heart.duration}s linear ${heart.delay}s infinite`,
          }}
        >
          favorite
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
