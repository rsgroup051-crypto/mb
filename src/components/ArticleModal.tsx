import React, { useEffect } from 'react';
import { X, Clock, Calendar, User, BookmarkCheck, ArrowRight } from 'lucide-react';
import { InsightArticle } from '../types';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] border border-[#1C1917]/15 rounded-xs shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/10 mb-6">
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <span className="text-[#1C1917] font-medium">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <Clock className="w-3 h-3 text-[#A8A29E]" />
              {article.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors cursor-pointer"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1C1917] font-normal leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-4 text-xs text-[#78716C] pb-4 border-b border-[#1C1917]/8">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#A8A29E]" />
              {article.author}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" />
              {article.date}
            </span>
          </div>

          {/* Lead excerpt */}
          <p className="text-lg font-serif italic text-[#1C1917] leading-relaxed border-l-2 border-[#1C1917] pl-4">
            {article.excerpt}
          </p>

          {/* Body paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="bg-[#F7F4EE] border border-[#1C1917]/8 p-6 rounded-xs space-y-3 mt-8">
            <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1C1917] font-semibold">
              <BookmarkCheck className="w-4 h-4 text-[#78716C]" />
              <span>Architectural Takeaways</span>
            </span>
            <ul className="space-y-2">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917] mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom callout */}
          <div className="pt-6 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#78716C]">
              <span>Have questions about applying these principles to your space?</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs cursor-pointer shadow-xs"
            >
              <span>Speak with an Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
