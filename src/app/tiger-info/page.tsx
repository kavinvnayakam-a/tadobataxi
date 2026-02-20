
import { tadobaTigerInformation } from '@/ai/flows/tadoba-tiger-information-flow';
import { PawPrint, Star, Info } from 'lucide-react';
import Image from 'next/image';

export default async function TigerInfoPage() {
  const data = await tadobaTigerInformation({});

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">{data.title}</h1>
        <p className="text-lg text-muted-foreground">Expert insights into the magnificent predators of Tadoba Andhari Tiger Reserve.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/tiger-guide/800/1000" 
              alt="Tiger Close up" 
              fill 
              className="object-cover"
              data-ai-hint="tiger wildlife"
            />
          </div>
          <div className="bg-primary p-6 rounded-2xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-secondary" /> Famous Tigers of Tadoba
            </h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>• <strong>Maya</strong> - The legendary 'Queen of Tadoba'</li>
              <li>• <strong>Matkasur</strong> - The powerful dominant male</li>
              <li>• <strong>Gabbar</strong> - Known for his majestic size</li>
              <li>• <strong>Choti Tara</strong> - A fan favorite among tourists</li>
              <li>• <strong>Bijli</strong> - Known for her speed and stealth</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          {data.sections.map((section, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-primary/5 hover:border-primary/20 transition-all">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-headline">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {i + 1}
                </div>
                {section.heading}
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {section.content}
              </div>
            </div>
          ))}

          {data.callToAction && (
            <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">{data.callToAction}</h3>
              <p className="text-muted-foreground mb-6">Enhance your safari experience by learning more about these big cats before you head out.</p>
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <PawPrint className="h-6 w-6" />
                  <span>Wildlife Conservation first</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
