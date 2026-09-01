import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, MapPin, Briefcase, Cpu, Info } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { TowerRotation } from './TowerRotation';


interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const getImagePath = (id: string) => {
    switch(id) {
      case 'terez-cafe': return '/assets/terez_cafe_hero.png';
      case 'abd-al-razaq-olive-oil': return '/assets/olive_oil_hero.png';
      case 'sarouja-revitalization': return '/assets/sarouja_souq_after.png';
      default: return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/80 backdrop-blur-sm overflow-y-auto">
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl bg-bg-light dark:bg-bg-dark rounded-2xl overflow-hidden shadow-2xl z-10 border border-black/10 dark:border-white/10 flex flex-col my-8 max-h-[90vh]"
      >
        
        {/* Header toolbar */}
        <div className="absolute top-4 right-4 z-30">
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          
          {/* Cover Hero Image (if not using interactive slider as cover) */}
          <div className="relative w-full h-[260px] sm:h-[360px] bg-gray-100 dark:bg-gray-900">
            <img 
              src={getImagePath(project.id)} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-brand-terracotta dark:bg-brand-pink text-white px-2.5 py-1 rounded-full mb-3 inline-block">
                {project.category.replace('-', ' ')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1 leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Core Grid */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Metadata Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Briefcase className="w-4 h-4 text-brand-terracotta dark:text-brand-pink shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400">Role</div>
                  <div className="font-semibold text-brand-charcoal dark:text-white line-clamp-1">{project.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 text-brand-terracotta dark:text-brand-pink shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400">Timeline</div>
                  <div className="font-semibold text-brand-charcoal dark:text-white">{project.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-brand-terracotta dark:text-brand-pink shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400">Location</div>
                  <div className="font-semibold text-brand-charcoal dark:text-white">{project.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Cpu className="w-4 h-4 text-brand-terracotta dark:text-brand-pink shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400">Toolbox</div>
                  <div className="font-semibold text-brand-charcoal dark:text-white line-clamp-1">
                    {project.software.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Story Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
              {/* Main Narrative Columns */}
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-xl uppercase tracking-wider text-brand-terracotta dark:text-brand-pink font-semibold border-b border-black/5 dark:border-white/5 pb-2 font-sans">
                  The Design Story
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                  {project.fullStory.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Side Concept panel */}
              <div className="space-y-6 bg-brand-beige dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h4 className="text-lg font-serif font-bold text-brand-charcoal dark:text-white flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-terracotta" />
                  Conceptual Focus
                </h4>
                
                {project.inspiredBy && (
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase text-gray-400 font-bold block">Inspiration</span>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">{project.inspiredBy}</p>
                  </div>
                )}

                {project.outcome && (
                  <div className="space-y-1 pt-4 border-t border-black/10 dark:border-white/10">
                    <span className="text-[10px] uppercase text-gray-400 font-bold block">Key Deliverables</span>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans">{project.outcome}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                  <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">Software Stack</span>
                  <div className="flex flex-wrap gap-1">
                    {project.software.map((soft, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Mounting Interactive Elements Inline */}
            {project.interactiveType && (
              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <h3 className="text-xl uppercase tracking-wider text-brand-terracotta dark:text-brand-pink font-semibold mb-6 font-sans">
                  Interactive Exploration
                </h3>

                {project.interactiveType === 'slider' && (
                  <BeforeAfterSlider 
                    beforeImg="/assets/sarouja_souq_before.png" 
                    afterImg="/assets/sarouja_souq_after.png" 
                  />
                )}

                {project.interactiveType === 'rotation' && (
                  <TowerRotation />
                )}

                {project.interactiveType === 'newspaper' && (
                  <div className="vintage-newspaper border-4 border-double border-gray-800 p-6 sm:p-8 rounded shadow-inner text-[#1c1c1c] max-w-2xl mx-auto my-6 font-serif">
                    <div className="text-center border-b border-gray-800 pb-4 mb-4">
                      <div className="text-2xl font-bold tracking-widest uppercase">الروضة ديلي • AL RAWDA CHRONICLE</div>
                      <div className="text-[10px] tracking-wide font-sans mt-1">VOL. XCIV No. 12 • DAMASCUS, SYRIA • 1936 / 2024</div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed">
                      <div className="space-y-3 pr-0 sm:pr-4 border-r-0 sm:border-r border-gray-800">
                        <p className="indent-4">
                          <strong>THE JOURNALIST’S TABLE</strong> sits at the heart of Al Rawda, Damascus' oldest hub where shisha smoke, political debates, and poetry scripts merge into one. The air smells of rich cardamom and memories of Syria's finest actors and novelists who have passed through this gate.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p>
                          <strong>DIGITAL NEWSPAPER GRID</strong> is an art director's tribute to this historical print legacy. Using high-contrast frames, ink textures, and local anecdotes, the campaign tells stories that speak directly to Syrian diaspora, turning a physical location into a globally shared graphic story.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-800 pt-3 text-center text-[10px] italic font-sans">
                      "I never imagined working with the place that held the memories of my family's childhood." — Ikram Hamdan
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </motion.div>
    </div>
  );
};
