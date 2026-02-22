import Link from 'next/link';
import { TigerCount } from '@/components/TigerCount';
import { PawPrint, Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16">
      <div className="container mx-auto px-6">
        
        {/* Animated Highlight: Tiger Count */}
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-12 mb-16 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Current Sightings</h3>
              <p className="text-emerald-100/60 text-sm">Real-time tiger activity across Tadoba core zones.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
              <TigerCount />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-orange-600 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform">
                <PawPrint className="h-6 w-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Tiger<span className="text-orange-600">Taxi</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Nagpur's premier wildlife transit partner. Providing punctual, air-conditioned, and sanitized cab services directly to the heart of the tiger reserve.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:ml-12">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-6 text-slate-900">Explore</h4>
            <ul className="space-y-4">
              <FooterLink href="/safari" label="Safari Information" />
              <FooterLink href="/tariff" label="Cab Tariff" />
              <FooterLink href="/about" label="About Our Fleet" />
              <FooterLink href="/contact" label="Help Center" />
            </ul>
          </div>
          
          {/* Gates Column */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-6 text-slate-900">The Gates</h4>
            <ul className="space-y-3">
              {['Moharli Gate', 'Kolara Gate', 'Navegaon Gate', 'Pangdi Gate', 'Zari Gate'].map((gate) => (
                <li key={gate} className="text-sm text-slate-500 font-medium flex items-center gap-2">
                  <div className="h-1 w-1 bg-orange-500 rounded-full" /> {gate}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-6 text-slate-900">Connect</h4>
            <ContactItem icon={<MapPin size={18} />} text="Civil Lines, Nagpur, MH" />
            <ContactItem icon={<Phone size={18} />} text="+91 77759 48732" />
            <ContactItem icon={<Mail size={18} />} text="bookings@tadobawheels.com" />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-100 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Tiger Taxi Cab Services
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-sm font-bold text-slate-500 hover:text-orange-600 transition-all flex items-center group">
        <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-600" />
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all cursor-pointer">
      {icon}
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 text-sm font-bold text-slate-600 group cursor-default">
      <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="group-hover:text-emerald-900 transition-colors">{text}</span>
    </div>
  );
}