import React from 'react';
import { ArrowUp, Instagram, Linkedin, Globe } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSitemap: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenSitemap,
  onSelectService
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1C1917] text-[#FAF8F5] pt-20 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#top" className="inline-block text-2xl font-serif tracking-tight text-[#FAF8F5] hover:text-[#D6CEBE] transition-colors">
              Maison & Bureau
            </a>
            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-sm font-normal">
              Thoughtful interior architecture and spatial design for homes, workplaces, and commercial environments. Centered on human proportion, natural light, and authentic materiality.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Maison & Bureau Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#A8A29E] hover:text-[#FAF8F5] hover:border-white/60 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Maison & Bureau LinkedIn"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#A8A29E] hover:text-[#FAF8F5] hover:border-white/60 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://archdaily.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Architectural Monographs"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#A8A29E] hover:text-[#FAF8F5] hover:border-white/60 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#A8A29E] font-medium">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#D6CEBE]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Disciplines</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">Design Philosophy</a>
              </li>
              <li>
                <a href="#styles" className="hover:text-white transition-colors">Design Styles</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">Insights & Essays</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#A8A29E] font-medium">
              Services
            </span>
            <ul className="space-y-2.5 text-xs text-[#D6CEBE]">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={() => onSelectService?.(service.id)}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Ateliers (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#A8A29E] font-medium">
              Studio & Contact
            </span>
            <div className="space-y-3 text-xs text-[#D6CEBE] leading-relaxed">
              <div>
                <span className="block text-[#A8A29E] text-[10px] uppercase tracking-wider">Address</span>
                <span>428 Broome Street, Studio 4A</span>
                <span className="block">New York, NY 10013</span>
              </div>

              <div>
                <span className="block text-[#A8A29E] text-[10px] uppercase tracking-wider">Telephone</span>
                <a href="tel:+12125550198" className="hover:text-white transition-colors">
                  +1 (212) 555-0198
                </a>
              </div>

              <div>
                <span className="block text-[#A8A29E] text-[10px] uppercase tracking-wider">Inquiries</span>
                <a href="mailto:contact@maisonetbureau.com" className="hover:text-white transition-colors">
                  contact@maisonetbureau.com
                </a>
              </div>

              <div>
                <span className="block text-[#A8A29E] text-[10px] uppercase tracking-wider">Business Hours</span>
                <span>Monday – Friday: 09:00 – 18:00 EST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E]">
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>© 2026 Maison & Bureau. All rights reserved.</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={onOpenSitemap}
              className="hover:text-white transition-colors cursor-pointer"
            >
              HTML Sitemap
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
