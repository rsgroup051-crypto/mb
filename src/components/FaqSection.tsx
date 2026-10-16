import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#A8A29E]" />
            <span>Advisory & Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Direct clarity regarding our scope of practice, architectural workflows, and engagement models.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#1C1917]/10 border-y border-[#1C1917]/10">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1917]"
                >
                  <span className="text-lg sm:text-xl font-serif text-[#1C1917] group-hover:text-[#78716C] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-1 rounded-full text-[#78716C] group-hover:text-[#1C1917] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-6 sm:pr-10 text-sm sm:text-base text-[#57534E] leading-relaxed font-normal animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct contact hint */}
        <div className="mt-12 text-center text-xs text-[#78716C]">
          <span>Have a question not listed here? </span>
          <a
            href="mailto:contact@maisonetbureau.com"
            className="text-[#1C1917] underline hover:text-[#78716C] transition-colors font-medium"
          >
            Inquire directly with our partners
          </a>
        </div>

      </div>
    </section>
  );
};
