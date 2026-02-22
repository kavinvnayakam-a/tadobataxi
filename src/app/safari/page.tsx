"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  Compass, 
  Clock, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Sun, 
  Snowflake, 
  CloudRain,
  PawPrint,
  Target,
  Info,
  Star,
  ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

export default function SafariPage() {
  const timings = [
    { season: 'Winter (Oct - Feb)', morning: '6:30 AM - 11:00 AM', evening: '1:30 PM - 5:30 PM', icon: <Snowflake className="text-blue-500" /> },
    { season: 'Summer (Mar - Jun)', morning: '5:30 AM - 10:00 AM', evening: '2:30 PM - 6:30 PM', icon: <Sun className="text-orange-500" /> },
    { season: 'Monsoon (Jul - Sep)', morning: 'Restricted (Buffer)', evening: 'Restricted (Buffer)', icon: <CloudRain className="text-slate-400" /> },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* --- HERO HEADER --- */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/30 px-4 py-2 rounded-full mb-6">
            <Compass className="h-4 w-4 text-emerald-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-500">Official Expedition Guide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            SAFARI <span className="text-orange-600">INSIGHTS</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium italic">
            "The Real Jungle Book Experience." Home to 115+ Tigers and 18 entry points into the wild.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 relative z-20 space-y-24">
        
        {/* --- EXPERIENCE SUMMARY & BOOKING WARNING --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
          <div className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1581012733671-910477043b0d?q=80&w=2000&auto=format&fit=crop" 
              alt="Tadoba Tiger Safari" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">The Ultimate <span className="text-orange-600">Expedition</span></h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                Tadoba is not just a park; it's a thriving ecosystem. With a high tiger-to-land ratio, sightings are frequent, but the experience depends entirely on your preparation.
              </p>
            </div>

            {/* CRITICAL BOOKING NOTE */}
            <div className="bg-orange-50 border-2 border-dashed border-orange-200 p-6 rounded-[2rem] space-y-3">
              <div className="flex items-center gap-2 text-orange-700">
                <ShieldAlert className="h-5 w-5" />
                <span className="font-black uppercase italic tracking-tighter text-sm">Official Booking Warning</span>
              </div>
              <p className="text-xs font-bold text-orange-900 leading-relaxed">
                Safari permits are strictly regulated. <span className="underline decoration-2">Do not book through unauthorized third-party agents.</span> 
                Ensure you book your safari <span className="text-orange-600 underline">ONLY</span> via the official Maharashtra Government portal to avoid scams or invalid permits.
              </p>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black italic uppercase text-[10px]" asChild>
                <Link href="https://mytadoba.org" target="_blank">Go to Mytadoba.org <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Open Gypsy Safari", "Core Zone Entry", "Buffer Night Trails", "Expert Naturalists"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- DYNAMIC GATE GUIDE SECTION --- */}
        <GateGuideSection />

        {/* --- TIMINGS & SEASONS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-8 flex items-center gap-3">
               <Clock className="text-orange-600 h-8 w-8" /> Expedition <span className="text-orange-600">Slots</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {timings.map((time, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                     <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                        {time.icon}
                     </div>
                     <h4 className="font-black text-sm uppercase text-orange-500 mb-2">{time.season}</h4>
                     <p className="text-xs font-bold text-slate-400">AM: {time.morning}</p>
                     <p className="text-xs font-bold text-slate-400">PM: {time.evening}</p>
                  </div>
               ))}
            </div>
          </div>
          <div className="bg-orange-600 rounded-[3rem] p-10 text-white flex flex-col justify-center items-center text-center">
             <Star className="h-12 w-12 mb-6 fill-white" />
             <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">Prime Sightings</h4>
             <p className="font-bold text-orange-100 text-sm italic">"March to June is when the tigers rule the water bodies."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GateGuideSection() {
  const coreGates = [
    { 
      name: 'Moharli Gate', 
      tiger: 'Chhoti Tara & Matkasur', 
      vibe: 'THE PREMIUM HUB', 
      desc: 'The legendary capital of Tadoba. Famous for consistent sightings and lake-side territories.', 
      bestFor: 'High-Probability Tiger Tracking.',
      highlight: true 
    },
    { name: 'Kolara Gate', tiger: 'Matkasur Lineage', vibe: 'Quick Access', desc: 'Direct access from Nagpur. Pristine grasslands.', bestFor: 'Corporate travelers.' },
    { name: 'Navegaon Gate', tiger: 'Navegaon Female', vibe: 'Serene', desc: 'Beautiful lakes and dense birdlife.', bestFor: 'Peace seekers.' },
    { name: 'Khutwanda', tiger: 'Maya Heirs', vibe: 'Dense Forest', desc: 'Thick canopy with high leopard activity.', bestFor: 'Adventurers.' },
    { name: 'Pangdi', tiger: 'Wild Males', vibe: 'Remote', desc: 'Untouched terrain far from the crowd.', bestFor: 'Photographers.' },
    { name: 'Zari', tiger: 'Zari Queen', vibe: 'Offbeat', desc: 'Hilly terrain with unique flora.', bestFor: 'Quiet explorations.' },
  ];

  const bufferGates = [
    { name: 'Agwarzari', tiger: 'Scarface', vibe: 'Leopard Den', desc: 'Great for night safaris and leopard spotting.' },
    { name: 'Junona', tiger: 'Junona Male', vibe: 'Tiger Territory', desc: 'Very active zone with frequent sightings.' },
    { name: 'Devada', tiger: 'Matkasur Line', vibe: 'Reliable', desc: 'Consistent tiger movement near core borders.' },
    { name: 'Madnapur', tiger: 'Chhoti Tara Cub', vibe: 'Scenic', desc: 'Vibrant birdlife and landscape.' },
    { name: 'Kolara Buffer', tiger: 'T6 Heirs', vibe: 'Popular', desc: 'The most preferred buffer zone.' },
    { name: 'Mamla', tiger: 'Local Pride', vibe: 'New Favorite', desc: 'Quiet gate with increasing tiger activity.' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">The <span className="text-orange-600">Gate</span> Guide</h2>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">6 Core Zones • 12 Buffer Zones</p>
      </div>

      <Tabs defaultValue="core" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-slate-100 p-1.5 rounded-full border-2 border-slate-200 h-auto">
            <TabsTrigger value="core" className="rounded-full px-8 py-3 font-black uppercase text-xs data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all">6 Core Zones</TabsTrigger>
            <TabsTrigger value="buffer" className="rounded-full px-8 py-3 font-black uppercase text-xs data-[state=active]:bg-emerald-700 data-[state=active]:text-white transition-all">12 Buffer Zones</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="core" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreGates.map((gate, i) => (
            <GateCard key={i} gate={gate} isCore={true} />
          ))}
        </TabsContent>

        <TabsContent value="buffer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bufferGates.map((gate, i) => (
            <GateCard key={i} gate={gate} isCore={false} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function GateCard({ gate, isCore }: { gate: any; isCore: boolean }) {
  return (
    <div className={`group rounded-[2.5rem] p-8 border-2 transition-all duration-500 relative overflow-hidden
      ${gate.highlight ? 'bg-slate-900 border-orange-600 shadow-2xl scale-105 z-10' : 'bg-white border-slate-50 shadow-sm hover:border-orange-600 hover:shadow-2xl'}
    `}>
      <div className={`absolute -bottom-6 -right-6 transition-colors
        ${gate.highlight ? 'text-white/5' : 'text-slate-100/50 group-hover:text-orange-50'}
      `}>
        <PawPrint size={100} />
      </div>
      
      <div className="relative z-10">
        <div className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4 
          ${gate.highlight ? 'bg-orange-600 text-white' : isCore ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'}
        `}>
          {gate.vibe}
        </div>
        
        <h3 className={`text-2xl font-black italic uppercase mb-2 ${gate.highlight ? 'text-white' : 'text-slate-900'}`}>
          {gate.name}
        </h3>
        
        <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-wider mb-4 
          ${gate.highlight ? 'text-orange-500' : 'text-slate-400'}
        `}>
          <Target size={12} className="text-orange-600" /> Famous: {gate.tiger}
        </div>
        
        <p className={`text-xs font-medium leading-relaxed italic mb-4 
          ${gate.highlight ? 'text-slate-400' : 'text-slate-500'}
        `}>
          "{gate.desc}"
        </p>
        
        {gate.bestFor && (
          <div className={`p-3 rounded-xl flex items-start gap-2 border 
            ${gate.highlight ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}
          `}>
            <Info size={14} className="text-orange-600 shrink-0 mt-0.5" />
            <span className={`text-[10px] font-bold ${gate.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
              Best for: {gate.bestFor}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}