import React from 'react';
import { Compass, Paintbrush, ArrowDown, MapPin } from 'lucide-react';

interface HeroProps {
  activeTab: 'all' | 'architecture' | 'art-direction';
  setActiveTab: (tab: 'all' | 'architecture' | 'art-direction') => void;
}

export const Hero: React.FC<HeroProps> = ({ activeTab, setActiveTab }) => {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden px-6">
      
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-80 z-0"></div>

      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-10 flex flex-col items-center">
        
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glassmorphism text-xs font-medium tracking-wide">
          <MapPin className="w-3.5 h-3.5 text-brand-terracotta dark:text-brand-pink" />
          <span className="text-gray-500 dark:text-gray-400">Based in Dubai, UAE</span>
          <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
        </div>

        {/* Poetic Opening Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-serif leading-[1.08] text-brand-charcoal dark:text-white font-medium select-none tracking-tight">
            THIS IS NOT MY<br/>
            <span className="italic font-normal text-brand-terracotta dark:text-brand-pink">PORTFOLIO.</span>
          </h1>
          <p className="text-lg sm:text-2xl font-serif text-gray-500 dark:text-gray-400 leading-relaxed font-light italic max-w-2xl mx-auto">
            "It’s a collection of stories and identities that says something — about people, brands and even about me."
          </p>
        </div>

        {/* Editorial Subtext */}
        <p className="max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
          I designed all this and much more... But what matters is <strong>how</strong>! Not just what it looks like. Not even what it says. But why it made sense—and how it made people feel something real.
        </p>

        {/* Dual Focus Selector (The interactive visual switcher) */}
        <div className="w-full max-w-lg mt-4 bg-white/60 dark:bg-card-dark/60 p-2.5 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-md shadow-lg">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2.5 font-sans">
            Choose a perspective to explore:
          </span>
          
          <div className="grid grid-cols-2 gap-2">
            
            {/* Space Architect Selector */}
            <button
              onClick={() => setActiveTab('architecture')}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all duration-300 ${
                activeTab === 'architecture'
                  ? 'bg-brand-navy border-brand-navy text-white shadow-md'
                  : 'bg-transparent border-black/5 dark:border-white/5 text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Compass className={`w-5 h-5 ${activeTab === 'architecture' ? 'text-brand-pink' : 'text-gray-400'}`} />
              <div className="text-xs font-bold uppercase tracking-wider font-sans">The Architect</div>
              <span className="text-[9px] opacity-70 font-sans hidden sm:inline">B.Arch Heritage & Spaces</span>
            </button>

            {/* Visual Storyteller Selector */}
            <button
              onClick={() => setActiveTab('art-direction')}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all duration-300 ${
                activeTab === 'art-direction'
                  ? 'bg-brand-terracotta border-brand-terracotta text-white shadow-md'
                  : 'bg-transparent border-black/5 dark:border-white/5 text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Paintbrush className={`w-5 h-5 ${activeTab === 'art-direction' ? 'text-brand-pink' : 'text-gray-400'}`} />
              <div className="text-xs font-bold uppercase tracking-wider font-sans">The Art Director</div>
              <span className="text-[9px] opacity-70 font-sans hidden sm:inline">Branding & Event Narratives</span>
            </button>

          </div>

          {activeTab !== 'all' && (
            <button 
              onClick={() => setActiveTab('all')} 
              className="text-[10px] text-gray-400 dark:text-gray-500 hover:text-brand-terracotta dark:hover:text-brand-pink font-mono underline mt-2.5 inline-block"
            >
              Show all works combined
            </button>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce flex flex-col items-center text-gray-400 dark:text-gray-500">
          <span className="text-[10px] uppercase font-mono tracking-widest mb-1.5">View Stories</span>
          <ArrowDown className="w-4 h-4 text-brand-terracotta dark:text-brand-pink" />
        </div>

      </div>
    </section>
  );
};
