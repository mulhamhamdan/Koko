import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';


interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index = 0 }) => {
  // Map ID to public asset paths
  const getImagePath = (id: string) => {
    switch(id) {
      case 'terez-cafe': return '/assets/terez_cafe_hero.png';
      case 'abd-al-razaq-olive-oil': return '/assets/olive_oil_hero.png';
      case 'sarouja-revitalization': return '/assets/sarouja_souq_after.png'; // Use after image as thumbnail
      default: return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
    }
  };

  const isArchitect = project.category === 'architecture';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div 
        onClick={onClick}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-card-dark shadow-sm hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full"
      >
      {/* Visual Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img 
          src={getImagePath(project.id)} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border ${
            isArchitect 
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400' 
              : 'bg-brand-terracotta/10 border-brand-terracotta/20 text-brand-terracotta dark:text-brand-pink'
          }`}>
            {project.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
              {project.date} • {project.location}
            </span>
            <div className="w-6 h-6 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-brand-terracotta dark:group-hover:text-brand-pink group-hover:bg-brand-terracotta/10 dark:group-hover:bg-brand-pink/10 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <h3 className="text-2xl font-serif text-brand-charcoal dark:text-white mb-2 leading-tight group-hover:text-brand-terracotta dark:group-hover:text-brand-pink transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Software / Tech Tags */}
        <div className="flex flex-wrap gap-1 pt-4 border-t border-black/5 dark:border-white/5">
          {project.software.slice(0, 3).map((soft, idx) => (
            <span 
              key={idx} 
              className="text-[10px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded"
            >
              {soft}
            </span>
          ))}
          {project.software.length > 3 && (
            <span className="text-[10px] font-mono text-gray-400 bg-transparent px-1.5 py-0.5">
              +{project.software.length - 3}
            </span>
          )}
        </div>
      </div>
      </div>
    </motion.div>
  );
};
