import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Compass, ArrowRight, Layers, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] border border-[#1C1917]/15 rounded-xs shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-xs px-6 py-4 border-b border-[#1C1917]/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <span className="text-[#1C1917] font-medium uppercase tracking-wider">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image */}
        <div className="relative aspect-16/9 w-full bg-[#EFECE6] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 text-white text-xs backdrop-blur-xs font-mono">
            {project.location} · {project.area}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Header Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#78716C] mb-2 font-normal">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#A8A29E]" />
                {project.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" />
                {project.year}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#A8A29E]" />
                {project.style}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1C1917] font-normal leading-tight">
              {project.name}
            </h3>
          </div>

          {/* Architectural Description */}
          <div className="space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
            <p className="text-base sm:text-lg text-[#1C1917] font-serif leading-snug">
              {project.summary}
            </p>
            <p>
              {project.description}
            </p>
          </div>

          {/* Key Materials & Scope of Work */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#1C1917]/10 bg-[#F7F4EE] p-6 rounded-xs">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#78716C] font-semibold mb-3">
                Material Palette Specified
              </span>
              <ul className="space-y-2">
                {project.keyMaterials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#44403C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#78716C] font-semibold mb-3">
                Architectural Scope
              </span>
              <ul className="space-y-2">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#44403C]">
                    <Check className="w-4 h-4 text-[#78716C] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Bottom CTA */}
          <div className="pt-4 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#78716C]">
              <span>Interested in a similar architectural execution?</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(project.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs cursor-pointer shadow-xs"
            >
              <span>Inquire About This Typology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
