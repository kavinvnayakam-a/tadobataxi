
"use client";

import { MapPin, ArrowRight, Car, TreeDeciduous } from 'lucide-react';

const steps = [
  { name: 'Nagpur', distance: '0 km', description: 'Starting Point', icon: <MapPin className="h-6 w-6" /> },
  { name: 'Umred', distance: '45 km', description: 'Market Hub', icon: <Car className="h-6 w-6" /> },
  { name: 'Chimur', distance: '100 km', description: 'Gateway to Reserve', icon: <Car className="h-6 w-6" /> },
  { name: 'Tadoba (Moharli)', distance: '140 km', description: 'Final Destination', icon: <TreeDeciduous className="h-6 w-6" /> },
];

export function Roadmap() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center font-headline">Nagpur to Tadoba Route</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 hidden md:block" />
          
          {steps.map((step, index) => (
            <div key={step.name} className="relative z-10 flex flex-row md:flex-col items-center gap-4 bg-background p-4 rounded-lg md:bg-transparent">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border-4 border-white">
                {step.icon}
              </div>
              <div className="flex flex-col md:items-center">
                <h3 className="font-bold text-primary">{step.name}</h3>
                <p className="text-xs text-muted-foreground">{step.distance}</p>
                <p className="text-sm text-center hidden md:block text-muted-foreground mt-1">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-primary/30 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
