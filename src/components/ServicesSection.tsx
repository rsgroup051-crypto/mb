import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[#F7F4EE] border-t border-[#1C1917]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
              Practice Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
              Interior Design, Considered From Every Angle
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#57534E] leading-relaxed">
            Maison & Bureau works across varied architectural environments while maintaining a consistent philosophy of spatial balance, natural light, and authentic materiality.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="group relative bg-[#FAF8F5] border border-[#1C1917]/8 p-7 sm:p-8 flex flex-col justify-between hover:border-[#1C1917]/25 hover:shadow-xs transition-all duration-300 rounded-xs"
            >
              <div>
                {/* Number & Typology Tagline */}
                <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-[#1C1917]/8">
                  <span className="font-serif text-2xl text-[#78716C] font-light">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#A8A29E]">
                    Specialty
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917] font-normal mb-3 group-hover:text-[#78716C] transition-colors text-balance">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#57534E] leading-relaxed mb-6 font-normal">
                  {service.tagline}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 mb-8">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#78716C]">
                      <span className="text-[#A8A29E] mt-0.5">·</span>
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Crawlable Link */}
              <div className="pt-4 border-t border-[#1C1917]/8 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="group/btn inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#1C1917] hover:text-[#78716C] transition-colors cursor-pointer"
                  aria-label={`View scope and details for ${service.title}`}
                >
                  <span>View Service Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] text-[#A8A29E] flex items-center gap-1 font-mono">
                  <Layers className="w-3 h-3 text-[#78716C]" />
                  <span>5 phases</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Footnote statement */}
        <div className="mt-12 text-center text-xs text-[#78716C]">
          <span>Need custom architectural consultation? </span>
          <a href="#contact" className="text-[#1C1917] underline hover:text-[#78716C] transition-colors">
            Inquire directly with our design team
          </a>
        </div>

      </div>
    </section>
  );
};
