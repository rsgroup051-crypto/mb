import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreProjects
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="top" className="relative w-full pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 45% on desktop (5 cols or 5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 md:mb-5">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium">
                Interior Design Studio
              </span>
              <span className="w-8 h-px bg-[#78716C]/40" aria-hidden="true" />
            </div>

            {/* Main H1 - Single primary H1 for the entire page */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-normal text-[#1C1917] leading-[1.12] tracking-tight mb-6 text-balance">
              Thoughtful Interior Design for Homes, Offices & Commercial Spaces
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-[#57534E] font-normal leading-relaxed mb-8 max-w-xl">
              Maison & Bureau creates refined, functional interiors shaped around the people, purpose and character of each space.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-1">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-wider uppercase font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs shadow-2xs whitespace-nowrap cursor-pointer"
              >
                Book a Consultation
              </button>

              <button
                onClick={onExploreProjects}
                className="group inline-flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-medium text-[#1C1917] hover:text-[#78716C] transition-colors py-2 cursor-pointer"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Subtle contextual metadata */}
            <div className="mt-10 pt-6 border-t border-[#1C1917]/8 flex items-center gap-6 text-xs text-[#78716C]">
              <div>
                <span className="text-[#1C1917] font-medium">Offices:</span> New York · London · Paris
              </div>
              <span aria-hidden="true" className="text-[#D6CEBE]">/</span>
              <div>
                <span className="text-[#1C1917] font-medium">Focus:</span> Private & Commercial
              </div>
            </div>
          </div>

          {/* Right Column: 55% on desktop (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs bg-[#EFECE6] border border-[#1C1917]/8 shadow-xs">
              <img
                src={HERO_IMAGE}
                alt="Architectural modern residential interior designed by Maison & Bureau featuring honed travertine, natural oak joinery and diffused daylight"
                referrerPolicy="no-referrer"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
                }`}
              />

              {/* Inset editorial caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between text-white text-xs">
                <span className="tracking-wide font-sans text-white/90">
                  Tribeca Penthouse Salon · Honed Navona Travertine & Rift Oak
                </span>
                <span className="hidden sm:inline font-serif italic text-white/75 text-[13px]">
                  Fig. 01 — Architectural Daylight Study
                </span>
              </div>
            </div>

            {/* Subtle decorative framing hairline */}
            <div
              className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 border-r border-b border-[#1C1917]/15 pointer-events-none"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
