
"use client";

import { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';

export function TigerCount() {
  const [count, setCount] = useState(0);
  const targetCount = 115; // Estimated tiger count in Tadoba region

  useEffect(() => {
    let start = 0;
    const end = targetCount;
    if (start === end) return;

    const duration = 2000;
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetCount]);

  return (
    <div className="flex flex-col items-center justify-center py-6 bg-primary/10 rounded-xl border border-primary/20 shadow-inner">
      <div className="flex items-center gap-4 animate-count-up">
        <PawPrint className="h-10 w-10 text-primary" />
        <div className="text-center">
          <span className="text-4xl font-bold text-primary block">{count}+</span>
          <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Tigers in Tadoba Reserve</span>
        </div>
      </div>
    </div>
  );
}
