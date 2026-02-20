
import { Car, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export default function TariffPage() {
  const pricing = [
    { vehicle: 'Hatchback', models: 'Swift / WagonR / Indica', seats: '3+1', price: '₹3,500', roundTrip: '₹5,500' },
    { vehicle: 'Sedan', models: 'Dzire / Etios / Xcent', seats: '4+1', price: '₹4,000', roundTrip: '₹6,500' },
    { vehicle: 'SUV', models: 'Ertiga / Marazzo', seats: '6+1', price: '₹5,500', roundTrip: '₹9,000' },
    { vehicle: 'Luxury SUV', models: 'Innova Crysta', seats: '6+1 / 7+1', price: '₹7,500', roundTrip: '₹12,000' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Cab Tariffs</h1>
        <p className="text-lg text-muted-foreground">Transparent pricing for your journey from Nagpur to Tadoba.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/10">
          <Table>
            <TableHeader className="bg-primary text-white">
              <TableRow className="hover:bg-primary">
                <TableHead className="text-white font-bold">Vehicle Type</TableHead>
                <TableHead className="text-white font-bold">Popular Models</TableHead>
                <TableHead className="text-white font-bold text-center">Seats</TableHead>
                <TableHead className="text-white font-bold text-right">One Way</TableHead>
                <TableHead className="text-white font-bold text-right">Round Trip (2 Days)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricing.map((item, i) => (
                <TableRow key={i} className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-bold text-primary">{item.vehicle}</TableCell>
                  <TableCell className="text-muted-foreground">{item.models}</TableCell>
                  <TableCell className="text-center">{item.seats}</TableCell>
                  <TableCell className="text-right font-semibold">{item.price}</TableCell>
                  <TableCell className="text-right font-semibold text-primary">{item.roundTrip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-secondary" /> What's Included
          </h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              Professional & Punctual Driver
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              Fuel Charges & Toll Taxes (One Way)
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              Clean and Sanitized Vehicle
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              Mineral Water & First Aid Kit
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <Info className="h-6 w-6 text-secondary" /> Important Notes
          </h3>
          <ul className="space-y-4 text-muted-foreground text-sm">
            <li>• Night driving charges (after 10 PM) may apply.</li>
            <li>• Round trip includes up to 300km total. Extra km charged per vehicle type.</li>
            <li>• Driver allowance of ₹300 per day for multi-day trips.</li>
            <li>• Parking charges at Tadoba gates or hotels to be paid by guest.</li>
            <li>• Prices are subject to change during peak season (Dec, May).</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold" asChild>
          <Link href="/#book-now">Book This Trip</Link>
        </Button>
      </div>
    </div>
  );
}
