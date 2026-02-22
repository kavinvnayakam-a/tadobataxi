"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Info, Phone, Compass, PawPrint, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/safari', icon: <Compass size={16} />, label: 'Safari Info' },
    { href: '/tiger-info', icon: <PawPrint size={16} />, label: 'Tiger Info' },
    { href: '/tariff', icon: <Car size={16} />, label: 'Tariff' },
    { href: '/about', icon: <Info size={16} />, label: 'About' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-6 flex h-20 items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-orange-600 p-2 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-orange-600/20">
            <PawPrint className="h-6 w-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900 leading-none">
              TIGER<span className="text-orange-600">TAXI</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1">
              Nagpur's No.1 Taxi
            </span>
          </div>
        </Link>
        
        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all ${
                pathname === link.href ? 'text-orange-600' : 'text-slate-500 hover:text-orange-600'
              }`}
            >
              <span className={pathname === link.href ? 'text-orange-600' : 'text-slate-300 group-hover:text-orange-500 transition-colors'}>
                {link.icon}
              </span>
              {/* FIXED: Changed {label} to {link.label} */}
              {link.label}
            </Link>
          ))}
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-4">
          <Link 
            href="tel:+919876543210" 
            className="hidden xl:flex items-center gap-2 text-emerald-700 font-bold text-sm bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 hover:bg-emerald-100 transition-colors"
          >
            <Phone size={16} className="fill-emerald-700" />
            <span>+91 77759 48732</span>
          </Link>
          
          <Button size="lg" className="hidden sm:flex bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black px-8 shadow-lg shadow-orange-600/20 uppercase tracking-widest text-[10px] h-11 italic" asChild>
            <Link href="/#book-now">Book Cab</Link>
          </Button>

          {/* --- MOBILE MENU (SHEET) --- */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100">
                  <Menu size={24} />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] border-l-orange-600 border-l-4 p-0 bg-white">
                <div className="flex flex-col h-full py-10 px-6">
                  
                  <div className="flex items-center gap-2 mb-12 border-b border-slate-50 pb-6">
                    <PawPrint className="h-6 w-6 text-orange-600" />
                    <span className="font-black tracking-tighter uppercase text-slate-900">MENU</span>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link 
                          href={link.href} 
                          className={`flex items-center gap-4 text-sm font-black uppercase tracking-widest italic transition-colors ${
                            pathname === link.href ? 'text-orange-600' : 'text-slate-600'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${pathname === link.href ? 'bg-orange-50 text-orange-600' : 'bg-slate-50 text-slate-400'}`}>
                            {link.icon}
                          </div>
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="mt-auto space-y-6">
                    <SheetClose asChild>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black uppercase italic py-7 shadow-lg shadow-orange-200" asChild>
                        <Link href="/#book-now">Book Now</Link>
                      </Button>
                    </SheetClose>
                    <p className="text-[10px] font-bold text-slate-400 text-center tracking-widest uppercase italic">
                      24/7 Safari Support
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}