import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { INSIGHTS_DATA } from '../data/content';
import { InsightArticle } from '../types';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="insights" className="w-full py-20 lg:py-28 bg-[#F7F4EE] border-t border-[#1C1917]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
              Editorial Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#1C1917] leading-[1.18] tracking-tight text-balance">
              Ideas for Better Spaces
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#57534E] leading-relaxed">
            Essays on architectural proportion, material longevity, spatial planning, and the evolving role of contemporary interior architecture.
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#FAF8F5] border border-[#1C1917]/8 p-6 flex flex-col justify-between hover:border-[#1C1917]/30 transition-all rounded-xs cursor-pointer shadow-2xs"
            >
              <div>
                {/* Category & Read Time - Zero Pill Rule */}
                <div className="flex items-center gap-2 text-xs text-[#78716C] mb-4 pb-3 border-b border-[#1C1917]/6">
                  <span className="text-[#1C1917] font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A8A29E]" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif text-[#1C1917] font-normal leading-snug mb-3 group-hover:text-[#78716C] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6 font-normal line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Action Link */}
              <div className="pt-4 border-t border-[#1C1917]/6 flex items-center justify-between text-xs font-medium tracking-wider uppercase text-[#1C1917]">
                <span className="group-hover:text-[#78716C] transition-colors">Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#78716C]" />
              </div>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-[#78716C]">
          <span>Published quarterly by the research practice at Maison & Bureau. </span>
          <span className="text-[#1C1917] font-medium">ISSN 2831-904X</span>
        </div>

      </div>
    </section>
  );
};
