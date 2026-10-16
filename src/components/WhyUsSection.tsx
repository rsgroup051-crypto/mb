import React from 'react';
import { WHY_US_ITEMS, RESIDENTIAL_PROJECT_IMAGE } from '../data/content';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16 max-w-2xl">
          <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
            Studio Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
            Why Maison & Bureau
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Visual & Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xs bg-[#EFECE6] border border-[#1C1917]/8 shadow-xs">
              <img
                src={RESIDENTIAL_PROJECT_IMAGE}
                alt="Refined living salon featuring custom walnut dining table, lime plaster walls and sheer drapery"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-white/75 mb-1">
                  Architectural Rigor
                </span>
                <p className="font-serif italic text-lg text-white/95 leading-snug">
                  “Restraint is not the absence of design; it is the pinnacle of architectural conviction.”
                </p>
              </div>
            </div>

            {/* Quiet studio detail card */}
            <div className="mt-4 p-4 bg-[#F7F4EE] border border-[#1C1917]/8 text-xs text-[#57534E] flex items-center justify-between">
              <span>Primary Studio Ateliers</span>
              <span className="font-medium text-[#1C1917]">New York · London · Paris</span>
            </div>
          </div>

          {/* Right Column: 4 Factual Differentiators */}
          <div className="lg:col-span-7 space-y-8 divide-y divide-[#1C1917]/8">
            {WHY_US_ITEMS.map((item, idx) => (
              <div key={item.number} className={idx > 0 ? 'pt-8' : ''}>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-serif text-lg text-[#78716C] font-light">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917] font-normal">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
