"use client";

import Image from 'next/image';
import { ShieldCheck, Heart, Zap, History, Globe, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* --- HERO HEADER --- */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 px-4 py-2 rounded-full mb-6">
            <History className="h-4 w-4 text-orange-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-orange-500">10+ Years of Legacy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            OUR <span className="text-orange-600">STORY</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            From a single forest cab in 2015 to Nagpur's most trusted digital expedition partner. 
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 relative z-20 space-y-24">
        
        {/* --- LEGACY TO DIGITAL SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                A DECADE IN THE <br /> <span className="text-orange-600">WILDERNESS</span>
              </h2>
              <p className="text-slate-500 leading-relaxed font-bold italic">
                "We spent 10 years mastering the forest roads. Now, we're making it easier for you to find us."
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                Tadoba Taxi started as a local fleet service for wildlife enthusiasts. For over a decade, we operated through word-of-mouth, building a reputation for reaching the safari gates before the first light.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                Today, we have stepped into the <strong>Digital World</strong>. While our booking process is now high-tech, our soul remains in the jungle. We combine 10 years of on-ground expertise with modern technology to give you a seamless expedition experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-[2rem] border border-slate-100">
                <Globe className="h-8 w-8 text-orange-600 shrink-0" />
                <div>
                  <h4 className="font-black uppercase text-xs text-slate-900 italic">Digital First</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Real-time Booking</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-[2rem] border border-slate-100">
                <Trophy className="h-8 w-8 text-orange-600 shrink-0" />
                <div>
                  <h4 className="font-black uppercase text-xs text-slate-900 italic">Expert Fleet</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">10yr Master Drivers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] lg:h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1549333321-12f8d5677f3e?q=80&w=2000&auto=format&fit=crop" 
              alt="Tadoba Jungle Road" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
               <div className="bg-orange-600 text-white p-6 rounded-[2rem]">
                  <p className="font-black italic uppercase text-xl leading-none tracking-tighter">Est. 2015</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 opacity-80">Serving the Nagpur-Tadoba Corridor</p>
               </div>
            </div>
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            <div>
              <div className="text-6xl md:text-8xl font-black text-orange-600 tracking-tighter italic">10<span className="text-white">Y</span></div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Operational Excellence</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black text-orange-600 tracking-tighter italic">15K<span className="text-white">+</span></div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Expeditions Completed</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black text-orange-600 tracking-tighter italic">4.9<span className="text-white">/5</span></div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mt-2">User Trust Score</p>
            </div>
          </div>
        </div>

        {/* --- FOUNDER QUOTE --- */}
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 py-12">
          <div className="relative">
             <div className="absolute inset-0 bg-orange-600 rounded-[3rem] rotate-6 opacity-10 group-hover:rotate-12 transition-transform" />
             <div className="relative h-40 w-40 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200/200" alt="Founder" fill className="object-cover" />
             </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl font-black text-slate-900 italic tracking-tighter leading-tight">
              &quot;Transportation should be the <span className="text-orange-600 underline decoration-4 underline-offset-8">last thing</span> on your mind when you head into the wild. We handle the roads, you handle the sightings.&quot;
            </p>
            <div className="space-y-1">
               <h4 className="text-xl font-black uppercase italic text-slate-900 tracking-tighter">Prashanth</h4>
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">Chief Expedition Officer</p>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className="text-center bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-200">
           <h3 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter mb-8">Ready to start your journey?</h3>
           <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-12 py-8 text-xl font-black italic uppercase shadow-2xl shadow-orange-200" asChild>
              <Link href="/#book-now">Book Your Cab <ArrowRight className="ml-2" /></Link>
           </Button>
        </div>

      </div>
    </div>
  );
}
