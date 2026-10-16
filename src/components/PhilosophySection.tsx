import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/content';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="w-full py-20 lg:py-32 bg-[#F2EFEA] border-y border-[#1C1917]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
            Core Tenets
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif font-normal text-[#1C1917] leading-[1.15] tracking-tight mb-6 text-balance">
            Design Is More Than How a Space Looks.
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            A space succeeds when its proportion, acoustics, lighting, and materiality work in concert with human movement. We design environments that age with grace and remain deeply functional over decades.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="flex flex-col justify-between pt-6 border-t border-[#1C1917]/15 group"
            >
              <div>
                {/* Number & Tagline */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
                    {principle.number}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#78716C]">
                    Principle
                  </span>
                </div>

                {/* Principle Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917] font-medium mb-2 group-hover:text-[#78716C] transition-colors">
                  {principle.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium mb-4">
                  {principle.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Deliverable hint */}
              <div className="mt-8 pt-4 border-t border-[#1C1917]/8 text-[11px] text-[#78716C] font-mono">
                {principle.deliverable}
              </div>
            </div>
          ))}
        </div>

        {/* Pull Quote Editorial Accent */}
        <div className="mt-20 pt-12 border-t border-[#1C1917]/15 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <blockquote className="font-serif italic text-xl sm:text-2xl text-[#1C1917] max-w-2xl leading-snug">
            “The finest interiors do not call attention to their decoration; they call attention to the quality of life unfolding within them.”
          </blockquote>
          <span className="text-xs tracking-widest uppercase text-[#78716C] whitespace-nowrap">
            — Studio Manifest, 2026
          </span>
        </div>

      </div>
    </section>
  );
};
