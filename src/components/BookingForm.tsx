"use client";
import { useState } from 'react';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BookingForm() {
  const [tripType, setTripType] = useState('Outstation');

  const tabs = ['Oneway Trip', 'Outstation', 'Rental'];

  return (
    <div className="flex flex-col">
      {/* Tabs Switcher */}
      <div className="flex bg-slate-100 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setTripType(tab)}
            className={`flex-1 py-4 text-sm font-bold transition-all ${
              tripType === tab 
              ? 'bg-white text-orange-600 border-t-2 border-orange-600 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <InputGroup label="From*" placeholder="Enter from location" icon={<MapPin size={16} />} />
          <InputGroup label="To*" placeholder="Enter to location" icon={<MapPin size={16} />} />
          <InputGroup label="Date*" placeholder="dd/mm/yyyy" type="date" icon={<Calendar size={16} />} />
          <InputGroup label="Mobile No*" placeholder="Enter mobile number" icon={<Phone size={16} />} />
          <InputGroup label="Email*" placeholder="Enter email address" icon={<Mail size={16} />} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="bg-black hover:bg-slate-800 text-white rounded-full px-16 py-7 text-lg font-bold shadow-xl transition-transform hover:scale-105">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text", icon }: { label: string, placeholder: string, type?: string, icon: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
        <input 
          type={type} 
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}