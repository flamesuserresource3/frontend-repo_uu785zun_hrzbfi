import React from 'react';
import { Home, Video, Image as ImageIcon, Settings, Sparkles, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'AI Coach',
    desc: 'Real-time voice-to-voice coaching powered by Gemini Live.'
  },
  {
    icon: <Video className="h-5 w-5" />,
    title: 'UGC & Promo Videos',
    desc: 'Generate authentic product videos and promos from text or images.'
  },
  {
    icon: <ImageIcon className="h-5 w-5" />,
    title: 'Image Generation & Editing',
    desc: 'Create or edit visuals with Imagen and multimodal Gemini.'
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Competitor Insights',
    desc: 'Analyze competitor sites and get a structured strategy brief.'
  },
  {
    icon: <Home className="h-5 w-5" />,
    title: 'Dashboard Tips',
    desc: 'Daily marketing tips cached offline for quick wins.'
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: 'Brand & Settings',
    desc: 'Store your brand identity and manage language preferences.'
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0A0A0A] text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Everything you need to market smarter</h2>
        <p className="text-white/60 mt-2 max-w-2xl">A unified workspace for creation, refinement, and strategy — built on a sleek, glassy dark theme.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 hover:bg-white/10 transition">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
