import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { DESIGN_STYLES } from '../data/content';
import { DesignStyle } from '../types';

interface DesignStylesSectionProps {
  onOpenConsultationWithStyle?: (styleName: string) => void;
}

export const DesignStylesSection: React.FC<DesignStylesSectionProps> = ({
  onOpenConsultationWithStyle
}) => {
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>(DESIGN_STYLES[0]);

  return (
    <section id="styles" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
              Spatial Expressions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
              Explore Our Design Language
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#57534E] leading-relaxed">
            While each project is singular, our design language navigates five distinct architectural vernaculars, unified by authentic materiality and proportion.
          </p>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {DESIGN_STYLES.map((style) => {
            const isSelected = selectedStyle.id === style.id;
            return (
              <div
                key={style.id}
                onClick={() => setSelectedStyle(style)}
                className={`p-6 border transition-all cursor-pointer rounded-xs flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F2EFEA] border-[#1C1917] shadow-xs'
                    : 'bg-[#FAF8F5] border-[#1C1917]/10 hover:border-[#1C1917]/30'
                }`}
              >
                <div>
                  {/* Swatches preview */}
                  <div className="flex items-center gap-1.5 mb-5">
                    {style.colorPalette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-black/10 inline-block"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <h3 className="font-serif text-lg text-[#1C1917] mb-2 font-normal">
                    {style.name}
                  </h3>
                  <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed mb-4">
                    {style.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C1917]/8 flex items-center justify-between text-[11px] font-medium tracking-wider uppercase">
                  <span className={isSelected ? 'text-[#1C1917]' : 'text-[#78716C]'}>
                    {isSelected ? 'Viewing Finishes' : 'Inspect Style'}
                  </span>
                  <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'rotate-90 text-[#1C1917]' : 'text-[#A8A29E]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Style Detail Inspector Banner */}
        <div className="bg-[#F7F4EE] border border-[#1C1917]/12 p-8 sm:p-10 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left overview */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#A8A29E]" />
                <span>Selected Architectural Style</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal mb-3">
                {selectedStyle.name}
              </h4>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-6">
                {selectedStyle.description}
              </p>

              <button
                onClick={() => onOpenConsultationWithStyle?.(selectedStyle.name)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1917] px-5 py-2.5 rounded-xs hover:bg-[#292524] transition-colors cursor-pointer"
              >
                <span>Inquire About {selectedStyle.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right finish & characteristic breakdown */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF8F5] p-6 border border-[#1C1917]/8 rounded-xs">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#78716C] font-semibold mb-3">
                  Key Architectural Elements
                </span>
                <ul className="space-y-2">
                  {selectedStyle.characteristics.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#44403C]">
                      <Check className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#78716C] font-semibold mb-3">
                  Signature Material Palette
                </span>
                <ul className="space-y-2">
                  {selectedStyle.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#44403C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#78716C] shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
