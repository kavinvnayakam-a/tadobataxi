import { tadobaTigerInformation } from '@/ai/flows/tadoba-tiger-information-flow';
import { PawPrint, Star, Info, Target, Zap, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default async function TigerInfoPage() {
  const data = await tadobaTigerInformation({});

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* --- HERO HEADER --- */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 px-4 py-2 rounded-full mb-6">
            <PawPrint className="h-4 w-4 text-orange-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-orange-500">Species Spotlight</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            THE <span className="text-orange-600">PREDATORS</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium italic">
            "Panthera Tigris Tigris." Understanding the hierarchy and history of the 115+ Bengal Tigers in the Tadoba Reserve.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR: LEGENDS OF TADOBA --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
              <Image 
                src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=2000&auto=format&fit=crop" 
                alt="Tiger Portrait" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                 <p className="text-orange-600 font-black uppercase text-[10px] tracking-widest mb-1">Current Alpha</p>
                 <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">Matkasur</h3>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl border-b-8 border-orange-600">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 italic uppercase tracking-tighter">
                <Star className="h-6 w-6 text-orange-600 fill-orange-600" /> Famous <span className="text-orange-600">Legends</span>
              </h3>
              <ul className="space-y-6">
                {[
                  { name: "Maya", note: "The Queen of Tadoba" },
                  { name: "Matkasur", note: "Dominant Core Male" },
                  { name: "Gabbar", note: "Majestic Size & Power" },
                  { name: "Choti Tara", note: "Tourist Favorite" },
                  { name: "Bijli", note: "Agile & Stealthy" }
                ].map((tiger) => (
                  <li key={tiger.name} className="flex items-start gap-4 group">
                    <div className="h-2 w-2 rounded-full bg-orange-600 mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="font-black italic uppercase text-lg leading-none">{tiger.name}</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{tiger.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- MAIN CONTENT: SECTIONS --- */}
          <div className="lg:col-span-8 space-y-12">
            {data.sections.map((section, i) => (
              <div key={i} className="bg-white p-10 md:p-14 rounded-[4rem] shadow-xl border border-slate-50 hover:border-orange-100 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black text-xl italic group-hover:rotate-6 transition-transform">
                    0{i + 1}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                    {section.heading}
                  </h2>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 font-medium leading-relaxed italic text-lg border-l-4 border-slate-100 pl-6">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

            {/* --- CALL TO ACTION --- */}
            {data.callToAction && (
              <div className="bg-slate-50 p-12 rounded-[4rem] border-2 border-dashed border-slate-200 text-center relative overflow-hidden">
                <Zap className="absolute -left-10 -bottom-10 h-40 w-40 text-slate-100 rotate-12" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter mb-4">{data.callToAction}</h3>
                  <p className="text-slate-500 font-bold max-w-md mx-auto mb-8 uppercase text-[10px] tracking-[0.2em]">Respect the wild. Follow conservation guidelines.</p>
                  
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 border-t border-slate-200">
                    <div className="flex items-center gap-3 text-emerald-700 font-black uppercase italic tracking-tighter">
                      <ShieldCheck className="h-8 w-8 text-emerald-600" />
                      <span>Conservation First</span>
                    </div>
                    <div className="flex items-center gap-3 text-orange-600 font-black uppercase italic tracking-tighter">
                      <Target className="h-8 w-8" />
                      <span>Ethical Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}