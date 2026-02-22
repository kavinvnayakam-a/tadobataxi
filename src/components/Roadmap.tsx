"use client";

import { useEffect, useState, useRef } from 'react';
import { MapPin, Navigation, Home, TreeDeciduous, Car } from 'lucide-react';

const steps = [
  { name: 'Nagpur Hub', label: 'Pickup Point A', description: 'Airport , Station Pickup or Customer Pickup location', icon: <MapPin />, align: 'right' },
  { name: 'Green Corridor', label: 'The Drive', description: 'Scenic Winding Highways', icon: <Navigation />, align: 'left' },
  { name: 'Resort Check-in', label: 'Arrival', description: 'Relax at your Stay', icon: <Home />, align: 'right' },
  { name: 'Tadoba Gates', label: 'Final Drop', description: 'Safari Gate Entry', icon: <TreeDeciduous />, align: 'left' },
];

export function Roadmap() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start movement when top is near middle of screen
      // End movement when bottom is near middle of screen
      const startTrigger = windowHeight * 0.7;
      const endTrigger = windowHeight * 0.3;
      
      const currentScrollPos = startTrigger - rect.top;
      const totalDist = rect.height;
      
      const progress = currentScrollPos / totalDist;
      
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Winding Path - Adjusted to end exactly at the last card
  const windingPath = "M 150,0 Q 250,125 150,250 Q 50,375 150,500 Q 250,625 150,750 Q 50,875 150,1000";

  return (
    <div ref={containerRef} className="w-full pt-24 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase italic mb-24 text-center">
          THE <span className="text-orange-600">EXPEDITION</span> PATH
        </h2>

        {/* Height reduced to 1050px to fit the cards tightly */}
        <div className="relative max-w-5xl mx-auto h-[1050px]">
          {/* --- ANIMATED WINDING PATH & CAB --- */}
          <div className="absolute inset-0 w-full pointer-events-none flex justify-center">
            <svg width="300" height="1000" viewBox="0 0 300 1000" fill="none" className="overflow-visible">
              <path d={windingPath} stroke="#f1f5f9" strokeWidth="6" strokeDasharray="1, 20" strokeLinecap="round" />
              
              <path 
                d={windingPath} stroke="#ea580c" strokeWidth="6" strokeDasharray="1, 20" strokeLinecap="round" 
                style={{ 
                  strokeDasharray: '2000', 
                  strokeDashoffset: 2000 - (scrollProgress * 2000),
                  transition: 'stroke-dashoffset 0.6s ease-out' 
                }}
              />
              
              <g style={{ 
                offsetPath: `path("${windingPath}")`,
                offsetDistance: `${scrollProgress * 100}%`,
                transition: 'offset-distance 0.8s cubic-bezier(0.2, 0, 0.2, 1)' 
              }}>
                <circle r="22" fill="#ea580c" className="shadow-2xl" />
                <foreignObject x="-11" y="-11" width="22" height="22">
                  <Car className="text-white w-5 h-5 animate-car-vibrate" />
                </foreignObject>
              </g>
            </svg>
          </div>

          {/* --- CONTENT STEPS --- */}
          <div className="flex flex-col gap-[120px] relative z-10 pt-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex w-full items-center ${
                  step.align === 'right' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Info Card */}
                <div className={`w-[45%] md:w-[42%] transition-all duration-700
                  ${scrollProgress > (index / 3.5) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-10 scale-95'}
                  ${step.align === 'right' ? 'text-right' : 'text-left'}`}>
                  
                  <div className={`p-4 md:p-6 rounded-[2rem] border bg-white/90 backdrop-blur-sm transition-all duration-500
                    ${scrollProgress > (index / 3.5) ? 'border-orange-100 shadow-xl' : 'border-slate-100'}`}>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-600 leading-none">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-lg md:text-2xl font-black text-slate-900 mt-1 uppercase italic leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-[10px] md:text-sm text-slate-500 mt-2 font-medium leading-relaxed italic line-clamp-2 md:line-clamp-none">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Central Icon Node */}
                <div className="w-[10%] md:w-[16%] flex justify-center">
                   <div className={`relative h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white border-2 flex items-center justify-center transition-all duration-700 shadow-xl z-20
                    ${scrollProgress > (index / 3.5) ? 'border-orange-500 text-orange-600 scale-110' : 'border-slate-100 text-slate-200'}`}>
                    <div className="scale-75 md:scale-90">{step.icon}</div>
                  </div>
                </div>

                <div className="w-[45%] md:w-[42%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}