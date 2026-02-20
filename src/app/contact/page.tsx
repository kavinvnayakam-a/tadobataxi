
"use client";

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Contact Us</h1>
        <p className="text-lg text-muted-foreground">Have questions? We're here to help you plan your safari trip.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/5 space-y-6">
            <h2 className="text-2xl font-bold text-primary font-headline">Get in Touch</h2>
            
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold">Call Us</h4>
                <p className="text-muted-foreground">+91 91234 56789</p>
                <p className="text-muted-foreground">+91 712 2543210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold">Email Us</h4>
                <p className="text-muted-foreground">info@tadobawheels.com</p>
                <p className="text-muted-foreground">bookings@tadobawheels.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold">Our Office</h4>
                <p className="text-muted-foreground">123 Civil Lines, Near Airport Road, Nagpur, Maharashtra 440001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold">Working Hours</h4>
                <p className="text-muted-foreground">Open 24/7 for Safari Bookings & Cab Support</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-2">Emergency Help?</h3>
            <p className="text-sm opacity-90 mb-4">If you are already at Tadoba and need a quick pickup, call our dedicated SOS line:</p>
            <div className="text-2xl font-bold text-secondary">+91 99999 88888</div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-primary/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">First Name</label>
                <Input placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Last Name</label>
                <Input placeholder="Doe" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Email Address</label>
              <Input type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Your Message</label>
              <Textarea placeholder="How can we help you plan your Tadoba trip?" className="min-h-[150px]" required />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 flex items-center gap-2 text-lg">
              <Send className="h-5 w-5" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
