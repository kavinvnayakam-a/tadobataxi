
"use client";

import Link from 'next/link';
import { Car, Map, Info, Phone, Compass, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <PawPrint className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary font-headline">Tadoba Wheels</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/safari" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Compass className="h-4 w-4" /> Safari Info
          </Link>
          <Link href="/tariff" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Car className="h-4 w-4" /> Tariff
          </Link>
          <Link href="/tiger-info" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <PawPrint className="h-4 w-4" /> Tiger Guide
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Info className="h-4 w-4" /> About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Phone className="h-4 w-4" /> Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="default" className="bg-primary text-white" asChild>
            <Link href="/#book-now">Book Cab</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
