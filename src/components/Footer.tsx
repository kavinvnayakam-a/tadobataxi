
import Link from 'next/link';
import { TigerCount } from '@/components/TigerCount';
import { PawPrint, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <TigerCount />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary font-headline">Tadoba Wheels</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for safari travels. We provide comfortable and reliable cab services from Nagpur to Tadoba Andhari Tiger Reserve.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-primary cursor-pointer hover:text-accent transition-colors" />
              <Twitter className="h-5 w-5 text-primary cursor-pointer hover:text-accent transition-colors" />
              <Instagram className="h-5 w-5 text-primary cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/safari" className="hover:text-primary transition-colors">Safari Information</Link></li>
              <li><Link href="/tariff" className="hover:text-primary transition-colors">Cab Tariff</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Tadoba Gates</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Moharli Gate</li>
              <li>Khutwanda Gate</li>
              <li>Kolara Gate</li>
              <li>Navegaon Gate</li>
              <li>Pangdi Gate</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4 text-primary">Contact Info</h4>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>123 Civil Lines, Nagpur, MH, India</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+91 91234 56789</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>bookings@tadobawheels.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tadoba Wheels. All rights reserved. | Wildlife Sanctuary Tourism Partner</p>
        </div>
      </div>
    </footer>
  );
}
