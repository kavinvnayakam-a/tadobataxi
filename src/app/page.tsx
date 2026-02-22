"use client";

import { useState } from 'react';
import Image from 'next/image';
import { BookingForm } from '@/components/BookingForm';
import { Roadmap } from '@/components/Roadmap';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Clock, 
  Phone, 
  Star, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const CAB_TYPES = [
  {
    id: 'sedan',
    name: 'Sedan',
    headline: 'A Complete Business Class Ride',
    description: 'Perfect for families and business travelers seeking premium comfort and extra luggage space.',
  },
  {
    id: 'hatchback',
    name: 'Hatchback',
    headline: 'Economical & Swift Travel',
    description: 'The best choice for solo travelers or small groups looking for a budget-friendly city-to-jungle transit.',
  },
  {
    id: 'suv',
    name: 'SUV',
    headline: 'The Ultimate Expedition Class',
    description: 'High ground clearance and massive space. Ideal for large groups and rugged forest terrain.',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1); // Default to Sedan (index 1)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === CAB_TYPES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? CAB_TYPES.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[600px] lg:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=2000&auto=format&fit=crop"
            alt="Majestic Tadoba Tiger"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 lg:bg-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-transparent" />
        </div>

        <div className="container relative z-10 px-6">
          <div className="max-w-2xl text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
              24/7 Direct Safari <br />
              <span className="text-orange-500">Support & Maintained</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
              We ensure safe rides and great value for your money every time you travel from Nagpur to Tadoba.
            </p>
          </div>
        </div>
      </section>

      {/* --- FLOATING BOOKING FORM --- */}
      <section className="container mx-auto px-4 -mt-16 lg:-mt-32 relative z-30 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <BookingForm />
        </div>
      </section>

      {/* --- ROADMAP SECTION --- */}
      <section className="py-12 bg-white">
        <Roadmap />
      </section>

      {/* --- CAB TYPES SLIDE SHOW (ANIMATED) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              <span className="text-orange-600">Cab Types</span> for Every Traveler
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto pt-10">
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-40 p-4 bg-white rounded-full shadow-xl border border-slate-100 text-slate-400 hover:text-orange-600 transition-all hidden lg:block"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-40 p-4 bg-white rounded-full shadow-xl border border-slate-100 text-slate-400 hover:text-orange-600 transition-all hidden lg:block"
            >
              <ChevronRight size={32} />
            </button>

            {/* Slide Content */}
            <div className="relative bg-[#F8F9FA] rounded-[4rem] p-10 md:p-20 min-h-[500px] flex items-center shadow-sm border border-slate-100 transition-all duration-700">
              
              {/* Left Side: Info */}
              <div className="w-full lg:w-1/2 space-y-6 relative z-20">
                <h3 className="text-6xl font-black text-slate-900 tracking-tighter animate-in fade-in slide-in-from-left-4 duration-500">
                  {CAB_TYPES[currentSlide].name}
                </h3>
                <p className="text-2xl text-slate-700 font-bold max-w-md leading-tight italic">
                  {CAB_TYPES[currentSlide].headline}
                </p>
                <p className="text-slate-500 max-w-sm leading-relaxed">
                  {CAB_TYPES[currentSlide].description}
                </p>
                
                <div className="pt-8">
                   <button className="h-16 w-16 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all transform hover:scale-110">
                      <ArrowRight size={28} />
                   </button>
                </div>
              </div>

              {/* Right Side: Image Placement with Circle */}
              <div className="absolute inset-0 flex justify-end items-end pointer-events-none">
                
                {/* Dashed Circle (As seen in reference - positioned at bottom right) */}
                <div className="absolute right-[-20px] bottom-[-20px] lg:right-10 lg:bottom-10 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full border-[3px] border-dashed border-slate-200 z-0" />

                {/* CAB IMAGE CONTAINER (Positioned Bottom-Right overlapping circle) */}
                <div className="relative w-full lg:w-[700px] h-[300px] lg:h-[400px] z-10 mr-[-20px] mb-[-20px] lg:mr-[-50px] lg:mb-[-40px]">
                   {/* Placeholder for Cab Image - Blend achieved by bottom-right anchoring */}
                   <div className="w-full h-full flex items-end justify-end">
                      {/* You can add your <Image /> here. The image will now sit at the bottom-right corner */}
                      <div className="w-full h-[80%] bg-transparent flex items-center justify-center border-2 border-dashed border-slate-200 rounded-[3rem] bg-white/40">
                         <span className="text-slate-300 font-black uppercase tracking-widest text-sm italic">
                           {CAB_TYPES[currentSlide].name} Image Placeholder
                         </span>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-4 mt-12">
              {CAB_TYPES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    currentSlide === i ? 'w-12 bg-orange-600' : 'w-8 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center font-medium">
            <Feature icon={<ShieldCheck className="w-12 h-12 text-emerald-600" />} title="Safe Travels" desc="Sanitized cabs with verified professional drivers." />
            <Feature icon={<Clock className="w-12 h-12 text-orange-600" />} title="Punctual Pickup" desc="Airport and Railway station pickups with zero wait time." />
            <Feature icon={<Phone className="w-12 h-12 text-emerald-600" />} title="24/7 Support" desc="Direct customer assistance for all your safari gate timings." />
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center gap-5 group">
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 transition-all group-hover:shadow-xl group-hover:scale-110">{icon}</div>
      <h3 className="text-2xl font-black italic uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm max-w-xs leading-relaxed">{desc}</p>
    </div>
  );
}