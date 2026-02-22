"use client";

import { useEffect, useState } from 'react';
import { PawPrint, Zap } from 'lucide-react';

export function TigerCount() {
  const [count, setCount] = useState(0);
  const targetCount = 115; 

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(targetCount / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-emerald-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative flex items-center gap-6 px-8 py-6 bg-white border border-slate-100 rounded-[2rem] shadow-xl">
        
        {/* Animated Icon Section */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-orange-500 rounded-2xl animate-ping opacity-20"></div>
          <div className="relative h-16 w-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform">
            <PawPrint size={32} />
          </div>
          {/* Small "Live" Indicator */}
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </div>
        </div>

        {/* Counter Data */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">
              {count}
              <span className="text-orange-600">+</span>
            </span>
            <div className="flex flex-col">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 flex items-center gap-1">
                 <Zap size={10} className="fill-emerald-600" /> Live
               </span>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-none">
                 Census
               </span>
            </div>
          </div>
          
          <p className="mt-2 text-sm font-bold text-slate-500 uppercase tracking-wide">
            Tigers in Tadoba Reserve
          </p>
          
          {/* Progress Bar Detail */}
          <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 rounded-full transition-all duration-[2000ms] ease-out"
              style={{ width: `${(count / 150) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}