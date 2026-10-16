import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  activeCategory?: ProjectCategory;
  onCategoryChange?: (category: ProjectCategory) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  activeCategory: externalCategory,
  onCategoryChange
}) => {
  const [internalCategory, setInternalCategory] = useState<ProjectCategory>('all');
  const activeCategory = externalCategory !== undefined ? externalCategory : internalCategory;

  const handleCategorySelect = (cat: ProjectCategory) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Typologies', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Workplace & Office', value: 'office' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Retail', value: 'retail' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
              Spaces We've Designed
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#57534E] leading-relaxed">
            Explore a selection of residential, commercial and workplace environments shaped by Maison & Bureau.
          </p>
        </div>

        {/* Filter Controls - Segmented tabs conforming to Zero-Pill discipline */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1C1917]/8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategorySelect(cat.value)}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors rounded-xs cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#1C1917] text-[#FAF8F5]'
                  : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EFE9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs bg-[#EFECE6] border border-[#1C1917]/8 mb-5">
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.categoryLabel} interior designed by Maison & Bureau in ${project.location}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5]/95 text-[#1C1917] text-xs font-medium tracking-wider uppercase backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Project Metadata - Zero Pill rule compliant */}
              <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2 font-normal">
                <span className="text-[#1C1917] font-medium">{project.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{project.style}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#A8A29E]" />
                  {project.location}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917] font-normal mb-2.5 group-hover:text-[#78716C] transition-colors">
                {project.name}
              </h3>

              {/* Short summary */}
              <p className="text-sm text-[#57534E] leading-relaxed mb-4 line-clamp-2">
                {project.summary}
              </p>

              {/* View Project link */}
              <div className="pt-2 border-t border-[#1C1917]/6 flex items-center justify-between text-xs font-medium tracking-wider uppercase text-[#1C1917]">
                <span className="group-hover:text-[#78716C] transition-colors">View Project Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#78716C]" />
              </div>
            </article>
          ))}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-14 pt-8 border-t border-[#1C1917]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#78716C]">
            All projects documented with full architectural drawings, material specifications, and client briefs.
          </p>
          <button
            onClick={() => handleCategorySelect('all')}
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-[#1C1917] hover:text-[#78716C] transition-colors cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
