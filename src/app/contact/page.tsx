"use client";

import { Mail, Phone, MapPin, Clock, Send, Zap, MessageSquare, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "EXPEDITION LOGGED!",
      description: "Our team will reach out to you within 2 working hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* --- HERO HEADER --- */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="h-4 w-4 text-orange-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-orange-500">Always Connected</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            GET IN <span className="text-orange-600">TOUCH</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">
            Planning a trip to the tiger reserve? Our experts are available 24/7 to assist with your transit needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* --- CONTACT INFO PANEL --- */}
          <div className="space-y-8">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 space-y-10">
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Expedition <span className="text-orange-600">HQ</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Phone size={18} className="fill-orange-600/10" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Support</span>
                  </div>
                  <p className="text-lg font-black text-slate-900 tracking-tight">+91 77759 48732</p>
                  <p className="text-sm font-bold text-slate-500 italic">+91 77759 48732</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Mail size={18} className="fill-orange-600/10" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</span>
                  </div>
                  <p className="text-lg font-black text-slate-900 tracking-tight">info@tadobawheels.com</p>
                  <p className="text-sm font-bold text-slate-500 italic">bookings@tadoba.com</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-600">
                    <MapPin size={18} className="fill-orange-600/10" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed italic">
                    123 Civil Lines, Near Airport Road, Nagpur, Maharashtra 440001
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Clock size={18} className="fill-orange-600/10" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Working Hours</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed italic">
                    Open 24/7 for Safari Bookings & Cab Support
                  </p>
                </div>
              </div>
            </div>
            
            {/* SOS / EMERGENCY CARD */}
            <div className="bg-orange-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-orange-200 relative overflow-hidden group transition-transform hover:scale-[1.02]">
              <Zap className="absolute -right-4 -bottom-4 h-32 w-32 opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <ShieldAlert className="h-6 w-6" />
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">In-Jungle SOS</h3>
                </div>
                <p className="text-sm font-bold text-orange-100 mb-6 leading-relaxed">Already at Tadoba and need an emergency pickup? Call our 24/7 SOS line:</p>
                <div className="text-4xl font-black italic tracking-tighter">+91 77759 48732</div>
              </div>
            </div>
          </div>

          {/* --- CONTACT FORM --- */}
          <div className="bg-slate-50 p-10 md:p-14 rounded-[4rem] border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">First Name</label>
                    <Input placeholder="Kavin" className="rounded-2xl border-slate-200 py-6 focus:ring-orange-600 focus:border-orange-600 bg-white" required />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Last Name</label>
                    <Input placeholder="V" className="rounded-2xl border-slate-200 py-6 focus:ring-orange-600 focus:border-orange-600 bg-white" required />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <Input type="email" placeholder="kavin@getpik.com" className="rounded-2xl border-slate-200 py-6 bg-white" required />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                  <Textarea placeholder="Tell us about your trip plans..." className="rounded-[2rem] border-slate-200 min-h-[180px] bg-white p-6" required />
                </div>
              </div>

              <Button type="submit" className="w-full bg-slate-900 hover:bg-black text-white py-8 rounded-full flex items-center justify-center gap-3 text-lg font-black uppercase italic shadow-2xl transition-all hover:scale-[1.02]">
                <Send className="h-5 w-5" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}