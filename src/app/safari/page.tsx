
import Image from 'next/image';
import { Compass, Clock, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SafariPage() {
  const timings = [
    { season: 'Winter (Oct - Feb)', morning: '6:30 AM - 11:00 AM', evening: '1:30 PM - 5:30 PM' },
    { season: 'Summer (Mar - Jun)', morning: '5:30 AM - 10:00 AM', evening: '2:30 PM - 6:30 PM' },
    { season: 'Monsoon (Jul - Sep)', morning: 'Restricted (Buffer Zones Only)', evening: 'Restricted (Buffer Zones Only)' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Safari Information</h1>
        <p className="text-lg text-muted-foreground">Everything you need to know about exploring Tadoba Andhari Tiger Reserve.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="https://picsum.photos/seed/safari-info/1000/800" 
            alt="Tadoba Safari" 
            fill 
            className="object-cover"
            data-ai-hint="safari jeep"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary font-headline">Safari Experience</h2>
          <p className="text-muted-foreground leading-relaxed">
            Tadoba Andhari Tiger Reserve (TATR) is one of the oldest and largest national parks in Maharashtra. 
            The reserve is known for its high density of tigers and diverse wildlife, including leopards, sloth bears, 
            Indian bison (gaur), and over 200 species of birds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Open Jeep Safari",
              "Buffer Zone Safaris",
              "Canter Safari (Common)",
              "Guided Nature Trails",
              "Bird Watching Tours",
              "Photography Expeditions"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-primary text-white" asChild>
            <Link href="https://mytadoba.org" target="_blank">Book Official Safari</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-primary/10 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Clock className="h-6 w-6" /> Safari Timings
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {timings.map((time, i) => (
                <div key={i} className="border-b pb-2 last:border-0">
                  <h4 className="font-bold text-sm text-primary">{time.season}</h4>
                  <p className="text-xs text-muted-foreground">Morning: {time.morning}</p>
                  <p className="text-xs text-muted-foreground">Evening: {time.evening}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="h-6 w-6" /> Major Gates
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm text-primary">Core Zone Gates</h4>
                <p className="text-xs text-muted-foreground">Moharli, Khutwanda, Kolara, Navegaon, Pangdi, Zari</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">Buffer Zone Gates</h4>
                <p className="text-xs text-muted-foreground">Agwarzari, Junona, Adegaon, Devada, Madnapur, Kolara Buffer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary">
              <AlertCircle className="h-6 w-6" /> Important Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-4">
              <li>Book safaris 120 days in advance for Core Gates.</li>
              <li>Carry a valid photo ID (Original used for booking).</li>
              <li>Wear earth-toned clothing (Greens, Browns, Khakis).</li>
              <li>Silence is mandatory inside the reserve.</li>
              <li>Plastic-free zone: Do not litter.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
