import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { INTRO_IMAGE } from '../data/content';

interface BrandIntroProps {
  onLearnMore?: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onLearnMore }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
            Studio Monograph
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
            Spaces Designed Around the Way You Live and Work
          </h2>
        </div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Architectural Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-xs bg-[#EFECE6] border border-[#1C1917]/8 shadow-xs">
              <img
                src={INTRO_IMAGE}
                alt="Fluted warm limestone wall meeting dark smoked oak millwork with minimalist architectural shadow lines"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
                }`}
              />

              {/* Architectural caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#1C1917]/8 text-xs text-[#57534E] flex items-center justify-between">
                <span className="font-serif italic text-[13px] text-[#1C1917]">
                  Junction Study: Honed Limestone & Smoked French Oak
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#78716C]">
                  Studio Detail
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 140–160 Words Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-5 text-base sm:text-[1.05rem] text-[#57534E] leading-relaxed font-normal">
              <p>
                Maison & Bureau was founded on the conviction that interior environments shape how we think, rest, and gather. We do not design for temporary spectacle; our studio develops considered spaces rooted in human movement, architectural proportion, and quiet functional clarity.
              </p>
              <p>
                Whether conceiving a private residence, an executive workplace, or a hospitality retreat, every project balances aesthetic poise with rigorous technical execution. We honor authentic materiality—raw stone, lime plaster, honest timber, and tactile textiles—selecting finishes that age gracefully and respond to the cadence of natural light.
              </p>
              <p>
                From initial spatial audits and custom millwork drawings to turnkey contractor coordination, our practice remains disciplined, bespoke, and intimately attuned to the character of each client.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-8">
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-widest font-medium text-[#1C1917] hover:text-[#78716C] transition-colors py-2 cursor-pointer"
              >
                <span className="border-b border-[#1C1917] pb-0.5 group-hover:border-[#78716C] transition-colors">
                  Discover Maison & Bureau
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick studio fact strip */}
            <div className="mt-10 pt-6 border-t border-[#1C1917]/8 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-[#78716C]">Method</span>
                <span className="font-serif text-[15px] text-[#1C1917]">Architecture · Detail · FF&E</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-[#78716C]">Philosophy</span>
                <span className="font-serif text-[15px] text-[#1C1917]">Human-Centric Harmony</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
