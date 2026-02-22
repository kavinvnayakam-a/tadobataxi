"use client";

import { Car, CheckCircle2, Info, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TariffPage() {
  const pricing = [
    { vehicle: 'Hatchback', models: 'Swift / WagonR', seats: '3+1', price: '3,500', roundTrip: '5,500', tag: 'Economy' },
    { vehicle: 'Sedan', models: 'Dzire / Etios', seats: '4+1', price: '4,000', roundTrip: '6,500', tag: 'Business Class' },
    { vehicle: 'SUV', models: 'Ertiga / Marazzo', seats: '6+1', price: '5,500', roundTrip: '9,000', tag: 'Most Popular', featured: true },
    { vehicle: 'Luxury SUV', models: 'Innova Crysta', seats: '6+1 / 7+1', price: '7,500', roundTrip: '12,000', tag: 'Premium Comfort' },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* --- HEADER --- */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4 text-orange-500 fill-orange-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-orange-500">Fixed Rates</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            CAB <span className="text-orange-600">TARIFFS</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">
            Nagpur to Tadoba premium transfers. Transparent pricing for your wilderness expedition.
          </p>
        </div>
      </div>

      {/* --- PRICING CARDS --- */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((item, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-[2.5rem] p-8 border-2 transition-all hover:scale-[1.03] 
                ${item.featured ? 'border-orange-600 shadow-[0_20px_50px_rgba(234,88,12,0.15)] z-10' : 'border-slate-100 shadow-sm'}`}
            >
              {item.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-600/20 whitespace-nowrap">
                  Best Value for Groups
                </span>
              )}
              
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.tag}</span>
                <h3 className="text-3xl font-black tracking-tighter uppercase italic text-slate-900 mt-1">{item.vehicle}</h3>
                <p className="text-xs font-bold text-orange-600 mt-1">{item.models}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-end pb-4 border-b border-slate-50">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">One Way</span>
                  <span className="text-2xl font-black text-slate-900 leading-none flex items-center">
                    <span className="font-sans mr-1 text-xl">₹</span>{item.price}
                  </span>
                </div>
                <div className="flex justify-between items-end pb-4 border-b border-slate-50">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Round Trip</span>
                  <span className="text-2xl font-black text-orange-600 leading-none flex items-center">
                    <span className="font-sans mr-1 text-xl">₹</span>{item.roundTrip}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 p-2 rounded-lg">
                   <Car size={14} className="text-emerald-600" /> {item.seats} Seater Capacity
                </div>
              </div>

              <Button 
                className={`w-full rounded-full py-7 font-black uppercase tracking-widest text-[10px] transition-all 
                ${item.featured ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-slate-900 hover:bg-black text-white'}`} 
                asChild
              >
                <Link href="/#book-now">Select {item.vehicle}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* --- INCLUSIONS & NOTES --- */}
      <div className="container mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="bg-emerald-50/50 rounded-[3rem] p-10 md:p-14 border border-emerald-100">
            <h3 className="text-3xl font-black tracking-tighter uppercase italic text-emerald-900 mb-8 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-emerald-600" /> What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold text-emerald-800 text-sm">
              {["Professional Driver", "Fuel & Tolls", "Sanitized Car", "Airport Welcome", "Water Bottles", "24/7 Support"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600/40" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-14 border border-slate-200">
            <h3 className="text-3xl font-black tracking-tighter uppercase italic text-slate-900 mb-8 flex items-center gap-3">
              <Info className="h-8 w-8 text-orange-600" /> Important Notes
            </h3>
            <div className="space-y-4">
              {[
                { l: "Night Limit", v: "After 10:00 PM" },
                { l: "Distance", v: "300km limit for Round Trip" },
                { l: "Batta", v: "₹300 Driver daily allowance" },
                { l: "Parkings", v: "Resort/Gate parking by guest" }
              ].map((n, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-3 text-sm">
                  <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">{n.l}</span>
                  <span className="font-bold text-slate-900">{n.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}