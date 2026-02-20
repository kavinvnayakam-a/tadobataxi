
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar as CalendarIcon, Users, MapPin, Phone, Car } from 'lucide-react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  date: z.date({ required_error: "A travel date is required" }),
  cabType: z.string({ required_error: "Please select a cab type" }),
  passengers: z.string({ required_error: "Number of passengers is required" }),
});

export function BookingForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      passengers: "4",
    },
  });

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values);
    toast({
      title: "Booking Request Received!",
      description: `Thank you ${values.name}. We will contact you shortly to confirm your trip to Tadoba on ${format(values.date, 'PPP')}.`,
    });
    form.reset();
  }

  return (
    <div id="book-now" className="bg-white p-8 rounded-2xl shadow-xl border border-primary/10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary font-headline flex items-center gap-2">
          <Car className="h-6 w-6" /> Book Your Cab
        </h2>
        <p className="text-muted-foreground text-sm">Nagpur Airport/Railway Station to Tadoba Reserve</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Travel Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cabType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cab Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hatchback">Hatchback (Indica/Swift)</SelectItem>
                      <SelectItem value="sedan">Sedan (Dzire/Etios)</SelectItem>
                      <SelectItem value="suv">SUV (Innova/Ertiga)</SelectItem>
                      <SelectItem value="luxury">Luxury SUV (Crysta/Fortuner)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="passengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Passengers</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <Input type="number" min="1" max="12" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold">
            Check Availability
          </Button>
        </form>
      </Form>
    </div>
  );
}
