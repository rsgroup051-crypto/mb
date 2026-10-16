import React, { useEffect } from 'react';
import { X, Shield, FileText, Compass, ExternalLink } from 'lucide-react';
import { SERVICES_DATA, PROJECTS_DATA, DESIGN_STYLES, INSIGHTS_DATA } from '../data/content';

export type LegalTab = 'privacy' | 'terms' | 'sitemap';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onNavigateSection
}) => {
  const [currentTab, setCurrentTab] = React.useState<LegalTab>(activeTab);

  React.useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#FAF8F5] border border-[#1C1917]/15 rounded-xs shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Tabs & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/10 mb-6">
          <div className="flex items-center gap-4 text-xs uppercase tracking-wider font-medium">
            <button
              onClick={() => setCurrentTab('privacy')}
              className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                currentTab === 'privacy'
                  ? 'border-[#1C1917] text-[#1C1917]'
                  : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setCurrentTab('terms')}
              className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                currentTab === 'terms'
                  ? 'border-[#1C1917] text-[#1C1917]'
                  : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setCurrentTab('sitemap')}
              className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                currentTab === 'sitemap'
                  ? 'border-[#1C1917] text-[#1C1917]'
                  : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              HTML Sitemap
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab 1: Privacy Policy */}
        {currentTab === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#57534E] leading-relaxed">
            <div className="flex items-center gap-2 text-sm font-serif text-[#1C1917]">
              <Shield className="w-4 h-4 text-[#78716C]" />
              <span className="text-xl font-normal">Client Privacy & Data Confidentiality</span>
            </div>
            <p>
              At Maison & Bureau, we handle all prospective and active client information with absolute discretion. Private residence floor plans, high-net-worth real estate valuations, and confidential corporate office schematics are held under strict non-disclosure obligations.
            </p>
            <h4 className="font-serif text-base text-[#1C1917] pt-2">1. Information Collected</h4>
            <p>
              We only collect data explicitly provided through our consultation inquiry forms—including names, contact numbers, email addresses, project locations, and architectural parameters. We do not sell, rent, or transfer contact details to third-party commercial marketing entities.
            </p>
            <h4 className="font-serif text-base text-[#1C1917] pt-2">2. Secure Handling & Storage</h4>
            <p>
              Architectural blueprints, site photography, and bespoke procurement budgets are encrypted during transmission and stored within access-controlled studio networks restricted exclusively to dedicated project architects and engineers.
            </p>
            <p className="text-xs text-[#78716C] pt-2">
              Last updated: October 2026. For questions regarding data confidentiality, contact privacy@maisonetbureau.com.
            </p>
          </div>
        )}

        {/* Tab 2: Terms & Conditions */}
        {currentTab === 'terms' && (
          <div className="space-y-4 text-xs sm:text-sm text-[#57534E] leading-relaxed">
            <div className="flex items-center gap-2 text-sm font-serif text-[#1C1917]">
              <FileText className="w-4 h-4 text-[#78716C]" />
              <span className="text-xl font-normal">Studio Terms & Conditions</span>
            </div>
            <p>
              All architectural design services, technical CAD drafting, turnkey project management, and furniture procurement rendered by Maison & Bureau are governed by formal AIA or RIBA-compliant contracts executed between the studio and the client.
            </p>
            <h4 className="font-serif text-base text-[#1C1917] pt-2">1. Intellectual Property & Drawings</h4>
            <p>
              All conceptual renderings, custom millwork drawings, spatial layout sketches, and lighting schematics created by Maison & Bureau remain the intellectual property of the studio unless explicitly assigned under formal contractual agreement.
            </p>
            <h4 className="font-serif text-base text-[#1C1917] pt-2">2. Scope Modifications & Execution</h4>
            <p>
              Preliminary fee estimates provided during initial discovery sessions represent exploratory estimates. Binding project proposals and construction schedules are verified upon completion of on-site measurements and municipal code checks.
            </p>
          </div>
        )}

        {/* Tab 3: HTML Sitemap */}
        {currentTab === 'sitemap' && (
          <div className="space-y-6 text-xs sm:text-sm text-[#57534E]">
            <div className="flex items-center gap-2 font-serif text-xl text-[#1C1917]">
              <Compass className="w-4 h-4 text-[#78716C]" />
              <span>Comprehensive Architectural Sitemap</span>
            </div>
            <p className="text-xs text-[#78716C]">
              Direct crawlable index of all core sections, architectural service landing pages, project case studies, and topical insight essays.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]">
                  Core Studio Sections
                </span>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <button
                      onClick={() => { onClose(); onNavigateSection('top'); }}
                      className="text-[#1C1917] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Homepage (Maison & Bureau)</span>
                      <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onNavigateSection('about'); }}
                      className="text-[#1C1917] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>About Studio Monograph</span>
                      <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onNavigateSection('services'); }}
                      className="text-[#1C1917] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Services & Disciplines</span>
                      <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onNavigateSection('projects'); }}
                      className="text-[#1C1917] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Selected Works & Projects</span>
                      <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onNavigateSection('philosophy'); }}
                      className="text-[#1C1917] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Design Philosophy & Principles</span>
                      <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onNavigateSection('contact'); }}
                      className="text-[#1C1917] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Consultation Booking & Contact</span>
                      <ExternalLink className="w-3 h-3 text-[#A8A29E]" />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917]">
                  Services & Topics
                </span>
                <ul className="space-y-1.5 text-xs">
                  {SERVICES_DATA.map((s) => (
                    <li key={s.id} className="text-[#57534E]">
                      {s.title} ({s.slug})
                    </li>
                  ))}
                  {DESIGN_STYLES.map((st) => (
                    <li key={st.id} className="text-[#57534E]">
                      {st.name} ({st.slug})
                    </li>
                  ))}
                  {INSIGHTS_DATA.map((ins) => (
                    <li key={ins.id} className="text-[#78716C] line-clamp-1">
                      {ins.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
