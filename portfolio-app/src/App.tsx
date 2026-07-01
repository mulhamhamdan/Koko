import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeTimeline } from './components/ResumeTimeline';
import { Contact } from './components/Contact';
import { projectsData } from './data/portfolioData';
import type { Project } from './data/portfolioData';
import { Folder } from 'lucide-react';



function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'architecture' | 'art-direction'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on activeTab state
  const filteredProjects = projectsData.filter(project => {
    if (activeTab === 'all') return true;
    return project.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-brand-charcoal dark:text-gray-200 transition-colors duration-500 font-sans flex flex-col justify-between">
      {/* Navigation Bar */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Section */}
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Selected Narratives / Project Grid Section */}
      <main id="projects" className="py-20 max-w-6xl mx-auto px-6 w-full flex-1">
        
        {/* Section Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-terracotta dark:text-brand-pink font-semibold">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal dark:text-white mt-1">
              {activeTab === 'all' && "Combined Portfolio"}
              {activeTab === 'architecture' && "Architectural Projects"}
              {activeTab === 'art-direction' && "Art Direction Case Studies"}
            </h2>
            <div className="w-12 h-[2px] bg-brand-terracotta mt-3"></div>
          </div>

          {/* Quick tab details */}
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
            <Folder className="w-4 h-4 text-brand-terracotta dark:text-brand-pink" />
            <span>Showing {filteredProjects.length} of {projectsData.length} records</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-black/5 dark:bg-white/5 rounded-2xl border border-dashed border-black/10 dark:border-white/10">
            <p className="text-gray-500 dark:text-gray-400 font-serif text-lg">No projects match the selected focus.</p>
            <button 
              onClick={() => setActiveTab('all')} 
              className="mt-4 px-4 py-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </main>

      {/* Curriculum Vitae / Resume Timeline */}
      <ResumeTimeline />

      {/* Editorial Contact Footer */}
      <Contact />

      {/* Detailed Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
