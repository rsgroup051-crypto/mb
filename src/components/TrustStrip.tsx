import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section aria-label="Disciplinary Focus" className="w-full border-y border-[#1C1917]/8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Typologies */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs tracking-[0.16em] uppercase text-[#78716C] font-medium">
            <span className="text-[#1C1917]">Residential</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">·</span>
            <span className="text-[#1C1917]">Commercial</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">·</span>
            <span className="text-[#1C1917]">Office</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">·</span>
            <span className="text-[#1C1917]">Retail</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">·</span>
            <span className="text-[#1C1917]">Hospitality</span>
          </div>

          <div className="hidden md:block h-3.5 w-px bg-[#1C1917]/15" aria-hidden="true" />

          {/* Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs tracking-wider text-[#78716C]">
            <span className="italic font-serif text-[13px] text-[#44403C]">Spatial Planning</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">/</span>
            <span className="italic font-serif text-[13px] text-[#44403C]">Architectural Detail</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">/</span>
            <span className="italic font-serif text-[13px] text-[#44403C]">Honest Materiality</span>
            <span aria-hidden="true" className="text-[#D6CEBE]">/</span>
            <span className="italic font-serif text-[13px] text-[#44403C]">Turnkey Coordination</span>
          </div>

        </div>
      </div>
    </section>
  );
};
