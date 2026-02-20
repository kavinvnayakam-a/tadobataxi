
import Image from 'next/image';
import { BookingForm } from '@/components/BookingForm';
import { Roadmap } from '@/components/Roadmap';
import { Button } from '@/components/ui/button';
import { PawPrint, Car, Shield, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/tadoba1/1600/900"
          alt="Tadoba Tiger"
          fill
          priority
          className="object-cover brightness-50"
          data-ai-hint="tiger wildlife"
        />
        <div className="container relative z-10 px-4 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-headline animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Journey to the Land of <span className="text-secondary">Tigers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the best cab service from Nagpur to Tadoba Andhari Tiger Reserve. Safe, comfortable, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold text-lg px-8 py-6" asChild>
              <Link href="#book-now">Book Your Trip Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur text-white border-white/50 hover:bg-white/20 font-bold text-lg px-8 py-6" asChild>
              <Link href="/safari">View Safari Info</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking & Roadmap Section */}
      <section className="container mx-auto px-4 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl border border-primary/10">
              <Roadmap />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Safe Travel', desc: 'Sanitized cabs and verified professional drivers.', icon: <Shield className="h-6 w-6" /> },
                { title: 'Airport Pickup', desc: 'Direct pickup from Nagpur Airport & Railway Station.', icon: <MapPin className="h-6 w-6" /> },
                { title: '24/7 Support', desc: 'Reliable assistance for your safari timings.', icon: <Clock className="h-6 w-6" /> },
                { title: 'Flexible Booking', desc: 'Easy cancellations and easy rescheduling.', icon: <Car className="h-6 w-6" /> }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 sticky top-24">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary font-headline mb-4">Why Choose Tadoba Wheels?</h2>
            <p className="text-muted-foreground text-lg">We understand the pulse of a wildlife enthusiast. Our services are tailored to ensure you never miss your safari gate opening time.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/tadoba2/800/600" 
                  alt="Tadoba Experience" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="jungle wildlife"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Expert Local Drivers</h3>
                <p className="text-sm text-muted-foreground">Our drivers are locals who know every shortcut and scenic spot on the way to the reserve.</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/safari/800/600" 
                  alt="Safari Vehicles" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="safari jeep"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Punctuality Matters</h3>
                <p className="text-sm text-muted-foreground">We guarantee on-time pickup to ensure you reach your safari gate at least 30 minutes early.</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/cab/800/600" 
                  alt="Comfort Travel" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="suv car"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Premium Fleet</h3>
                <p className="text-sm text-muted-foreground">From hatchbacks for budget travelers to premium SUVs for luxury seekers, we have it all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-primary rounded-3xl p-12 text-white">
          <PawPrint className="h-16 w-16 mx-auto mb-6 text-secondary animate-pulse" />
          <h2 className="text-4xl font-bold font-headline mb-4">Ready for the Adventure?</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto opacity-90">Plan your trip to Tadoba with the most reliable cab service in Nagpur.</p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold text-lg px-12 py-8 rounded-full shadow-2xl" asChild>
            <Link href="#book-now text-primary">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
