
import Image from 'next/image';
import { ShieldCheck, Heart, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">About Tadoba Wheels</h1>
        <p className="text-lg text-muted-foreground">More than just a cab service, we are your gateway to the wild.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary font-headline">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2018, Tadoba Wheels was born out of a passion for wildlife and a commitment to providing seamless travel experiences for tourists visiting Central India's premier tiger reserve.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that the journey should be as memorable as the destination. That's why we focus on punctuality, safety, and local knowledge. Our team consists of experienced drivers who understand the terrain and the importance of reaching safari gates on time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold">Safety First</h4>
                <p className="text-sm text-muted-foreground">Well-maintained vehicles and verified drivers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold">Passion for Wildlife</h4>
                <p className="text-sm text-muted-foreground">We support local conservation efforts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-first lg:order-last">
          <Image 
            src="https://picsum.photos/seed/about-img/1000/800" 
            alt="Tadoba Wheels Team" 
            fill 
            className="object-cover"
            data-ai-hint="jungle wildlife"
          />
        </div>
      </div>

      <div className="bg-primary/5 rounded-3xl p-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <p className="text-sm text-muted-foreground">Trips Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
            <p className="text-sm text-muted-foreground">Happy Travelers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Local Drivers</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-primary font-headline">Meet Our Founder</h2>
        <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-lg">
          <Image src="https://picsum.photos/seed/founder/200/200" alt="Founder" fill className="object-cover" data-ai-hint="man person" />
        </div>
        <p className="italic text-lg text-muted-foreground">
          "Having spent my childhood near the outskirts of Tadoba, I wanted to create a service that helps people connect with nature without the stress of transportation. We are proud to be the most trusted name for Nagpur to Tadoba travel."
        </p>
        <div className="font-bold text-primary">- Rahul Deshmukh, Founder</div>
      </div>
    </div>
  );
}
