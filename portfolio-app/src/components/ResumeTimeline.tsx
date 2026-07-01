import React, { useState } from 'react';
import { History, ArrowRight, Award } from 'lucide-react';


interface Era {
  id: string;
  years: string;
  title: string;
  subtitle: string;
  reflection: string;
  roles: Array<{
    role: string;
    company: string;
    period: string;
    highlights: string[];
  }>;
  tools: string[];
  themeColor: string; // Tailwind class
  accentBg: string;
  badgeText: string;
}

export const ResumeTimeline: React.FC = () => {
  const [activeEraId, setActiveEraId] = useState<string>('dubai');

  const eras: Era[] = [
    {
      id: 'damascus-heritage',
      years: '2018 — 2020',
      title: 'Architecture & Conservation',
      subtitle: 'Historic Preservation & Spatial Layouts',
      reflection: 'I started my training in Damascus working on architectural conservation projects. Surveying historic facade elevations and mapping damage taught me to study the history and context of a site before designing. Architecture is about understanding how people interact with heritage spaces.',
      roles: [
        {
          role: 'Architect / Site Engineer',
          company: 'Directorate General of Antiquities and Museums (DGAM)',
          period: '2019 — 2020',
          highlights: [
            'Restored historical buildings and Mamluk-era structures in old Damascus.',
            'Led on-site damage assessment surveying, mapping architectural facades.',
            'Supervised stone masons, carpenters, and master craftsmen on delicate restoration work.'
          ]
        },
        {
          role: 'Freelance Interior Architect',
          company: 'Residential & Retail Spaces',
          period: '2018 — 2019',
          highlights: [
            'Designed spatial layouts, mood boards, and detailed shop drawings for private residential clients.',
            'Selected textures, custom joinery, and lighting treatments to maximize small urban footprints.'
          ]
        }
      ],
      tools: ['AutoCAD', 'SketchUp', '3ds Max', 'Drafting', 'Restoration Surveying'],
      themeColor: 'text-blue-500 border-blue-500',
      accentBg: 'bg-blue-500/10 text-blue-500',
      badgeText: 'Architecture'
    },
    {
      id: 'narrative-shift',
      years: '2020 — 2022',
      title: 'Brand & Graphic Design',
      subtitle: 'Applying Architectural Grid to Layouts',
      reflection: 'I shifted my focus towards brand identity and graphic design. I realized that a brand system behaves like a physical room, requiring structural balance, hierarchy, and texture. I began applying architectural grid theories to print layouts and packaging.',
      roles: [
        {
          role: 'Creative Art Director & Brand Designer',
          company: 'Independent Freelance Design',
          period: '2020 — 2022',
          highlights: [
            'Developed brand strategies, logo systems, and packaging designs for cafes and local businesses.',
            'Managed custom print productions, selecting tactile papers, binding, and ink finishes (e.g. Al Rawda, Abd Al Razaq Oil).',
            'Created social media layouts, combining print editorial grids with local copywriting.'
          ]
        }
      ],
      tools: ['Photoshop', 'Illustrator', 'Premiere Pro', 'Brand Architecture', 'Layout Design'],
      themeColor: 'text-brand-terracotta border-brand-terracotta',
      accentBg: 'bg-brand-terracotta/10 text-brand-terracotta',
      badgeText: 'Branding'
    },
    {
      id: 'dubai',
      years: '2022 — Present',
      title: 'Art Direction & Campaigns',
      subtitle: 'Bridging Branding & Physical Set Design',
      reflection: 'Relocating to Dubai allowed me to apply spatial design to commercial campaigns. I direct digital campaigns, photoshoots, and event identities, bringing both spatial layouts and visual storytelling into a unified frame.',
      roles: [
        {
          role: 'Creative Art Director',
          company: 'Watermelon Group (Dubai, UAE)',
          period: '2022 — Present',
          highlights: [
            'Led creative campaigns for Vida Hotels & Resorts, including featured promotions like "Ramadan is Calling".',
            'Collaborated with directors, photographers, and video production crews to execute campaign visuals.',
            'Designed event identities and physical brand activations for corporate and cultural clients.'
          ]
        }
      ],
      tools: ['Art Direction', 'Photoshop', 'After Effects', 'Videography Shoots', 'Campaign Strategy'],
      themeColor: 'text-brand-pink border-brand-pink',
      accentBg: 'bg-brand-pink/10 text-brand-pink',
      badgeText: 'Art Direction'
    }
  ];

  const activeEra = eras.find(e => e.id === activeEraId) || eras[2];

  return (
    <section id="about" className="py-24 border-t border-black/5 dark:border-white/5 bg-[#FBFBFA] dark:bg-[#0C0D11] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta dark:text-brand-pink font-semibold">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal dark:text-white mt-1">
            Professional Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 max-w-xl font-sans leading-relaxed">
            Browse through my work phases to see how spatial design and visual art direction intersect.
          </p>
          <div className="w-12 h-[2px] bg-brand-terracotta mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Era Selector (Scrubber Tabs) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-2">
              Select Phase
            </span>
            
            <div className="flex flex-col gap-3">
              {eras.map((era) => {
                const isActive = era.id === activeEraId;
                return (
                  <button
                    key={era.id}
                    onClick={() => setActiveEraId(era.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                      isActive 
                        ? 'bg-white dark:bg-[#13141c] border-brand-terracotta/30 dark:border-brand-pink/30 shadow-lg scale-[1.02]' 
                        : 'bg-transparent border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-xs font-mono text-gray-400">{era.years}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${era.accentBg}`}>
                        {era.badgeText}
                      </span>
                    </div>
                    
                    <h4 className={`text-lg font-serif font-semibold transition-colors ${
                      isActive ? 'text-brand-terracotta dark:text-brand-pink' : 'text-brand-charcoal dark:text-gray-300'
                    }`}>
                      {era.title}
                    </h4>
                    
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500 font-sans">
                      <span>View phase details</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'translate-x-1.5 text-brand-terracotta dark:text-brand-pink' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Narrative Panel */}
          <div className="lg:col-span-8 bg-white dark:bg-[#13141c] p-6 sm:p-10 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm space-y-8 min-h-[500px] flex flex-col justify-between">
            
            {/* Phase 1: Personal Reflection ("The Why") */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-brand-terracotta dark:text-brand-pink" />
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold font-sans">
                  Focus & Context
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-charcoal dark:text-white italic leading-relaxed">
                {activeEra.reflection}
              </h3>
            </div>

            {/* Phase 2: Professional Roles ("The What") */}
            <div className="space-y-6 pt-6 border-t border-black/5 dark:border-white/5">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                Roles & Responsibilities
              </span>
              
              <div className="space-y-6">
                {activeEra.roles.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h5 className="font-serif text-lg font-bold text-brand-charcoal dark:text-white">
                        {item.role} <span className="font-sans text-xs text-gray-400 font-normal">at {item.company}</span>
                      </h5>
                      <span className="text-[10px] font-mono bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded border border-black/5 dark:border-white/5 text-gray-500 self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-1.5 list-disc list-outside pl-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 3: Software & Skills of this Era */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-2">
                  Primary Toolset
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeEra.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2.5 py-1 rounded-full bg-brand-beige dark:bg-white/5 text-brand-charcoal dark:text-gray-300 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Campaign Highlights note (if current era) */}
              {activeEra.id === 'dubai' && (
                <div className="bg-brand-pink/5 border border-brand-pink/10 p-3.5 rounded-2xl max-w-xs shrink-0 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5 text-brand-pink mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Press Highlight</span>
                  </div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-normal">
                    Campaign work for <strong>Vida Hotels</strong> featured in <em>Campaign Middle East</em> (Ramadan is Calling).
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
