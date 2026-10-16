import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  return (
    <section id="process" className="w-full py-20 lg:py-28 bg-[#F7F4EE] border-t border-[#1C1917]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
              From First Conversation to Finished Space
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#57534E] leading-relaxed">
            Our five-stage architectural process ensures precision, transparent communication, and uninterrupted momentum from preliminary brief to handover.
          </p>
        </div>

        {/* 5-Step Process Sequence (Horizontal on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative mb-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-[#FAF8F5] border border-[#1C1917]/8 p-6 flex flex-col justify-between rounded-xs"
            >
              {/* Connector line for desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 -right-2 w-4 h-px bg-[#1C1917]/20 z-10"
                  aria-hidden="true"
                />
              )}

              <div>
                {/* Number & Phase */}
                <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[#1C1917]/6">
                  <span className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-light">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#A8A29E]">
                    Stage 0{idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-serif text-[#1C1917] font-normal mb-1.5">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-medium uppercase tracking-wider text-[#78716C] mb-3">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-[#57534E] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Phase Deliverable */}
              <div className="pt-3 border-t border-[#1C1917]/6">
                <span className="block text-[10px] uppercase tracking-wider text-[#A8A29E] mb-1 font-mono">
                  Primary Milestone
                </span>
                <span className="text-xs text-[#1C1917] font-medium leading-tight line-clamp-2">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#FAF8F5] border border-[#1C1917]/8 gap-6">
          <div>
            <h4 className="text-xl font-serif text-[#1C1917] mb-1">
              Ready to begin your spatial exploration?
            </h4>
            <p className="text-xs sm:text-sm text-[#78716C]">
              We schedule an initial discovery conversation to understand your scope, timeline, and architectural objectives.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs whitespace-nowrap cursor-pointer shadow-2xs"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
