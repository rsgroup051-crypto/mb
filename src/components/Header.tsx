import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface HeaderProps {
  onOpenConsultation: () => void;
  onSelectService?: (serviceId: string) => void;
  onSelectProjectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onSelectService,
  onSelectProjectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectCategories = [
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Office', value: 'office' },
    { label: 'Retail', value: 'retail' },
    { label: 'Hospitality', value: 'hospitality' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#1C1917]/8 py-3.5'
            : 'bg-[#FAF8F5] border-b border-[#1C1917]/8 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center">
            <a
              href="#top"
              className="group inline-flex items-center text-xl sm:text-2xl font-serif tracking-tight font-medium text-[#1C1917] hover:text-[#78716C] transition-colors"
            >
              Maison & Bureau
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide uppercase text-[#57534E]">
            <a
              href="#top"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1C1917] hover:after:w-full after:transition-all"
            >
              Home
            </a>
            
            <a
              href="#about"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1C1917] hover:after:w-full after:transition-all"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="flex items-center gap-1 hover:text-[#1C1917] transition-colors py-1 group"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#A8A29E] transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#1C1917]' : ''
                  }`}
                />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#FAF8F5] border border-[#1C1917]/10 shadow-lg p-2.5 mt-1 rounded-sm animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[11px] font-sans tracking-widest text-[#A8A29E] uppercase px-3 py-1.5 border-b border-[#1C1917]/6 mb-1">
                    Design Disciplines
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <a
                      key={service.id}
                      href={`#services`}
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        if (onSelectService) onSelectService(service.id);
                      }}
                      className="group/item flex items-center justify-between px-3 py-2 text-xs text-[#44403C] hover:bg-[#F2EFE9] hover:text-[#1C1917] transition-colors rounded-xs normal-case font-normal"
                    >
                      <span className="font-serif text-[14px] text-[#1C1917] group-hover/item:translate-x-0.5 transition-transform">
                        {service.title}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 text-[#78716C] transition-opacity" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <a
                href="#projects"
                className="flex items-center gap-1 hover:text-[#1C1917] transition-colors py-1 group"
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#A8A29E] transition-transform duration-200 ${
                    projectsDropdownOpen ? 'rotate-180 text-[#1C1917]' : ''
                  }`}
                />
              </a>

              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-[#FAF8F5] border border-[#1C1917]/10 shadow-lg p-2.5 mt-1 rounded-sm animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[11px] font-sans tracking-widest text-[#A8A29E] uppercase px-3 py-1.5 border-b border-[#1C1917]/6 mb-1">
                    Selected Typologies
                  </div>
                  {projectCategories.map((cat) => (
                    <a
                      key={cat.value}
                      href="#projects"
                      onClick={() => {
                        setProjectsDropdownOpen(false);
                        if (onSelectProjectCategory) onSelectProjectCategory(cat.value);
                      }}
                      className="flex items-center justify-between px-3 py-2 text-xs text-[#44403C] hover:bg-[#F2EFE9] hover:text-[#1C1917] transition-colors rounded-xs normal-case font-normal"
                    >
                      <span className="font-serif text-[14px] text-[#1C1917]">
                        {cat.label}
                      </span>
                      <span className="text-[10px] text-[#A8A29E] tracking-wider uppercase">
                        Portfolio
                      </span>
                    </a>
                  ))}
                  <div className="pt-1.5 mt-1 border-t border-[#1C1917]/6">
                    <a
                      href="#projects"
                      onClick={() => {
                        setProjectsDropdownOpen(false);
                        if (onSelectProjectCategory) onSelectProjectCategory('all');
                      }}
                      className="block px-3 py-1.5 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors font-medium normal-case"
                    >
                      View All Projects →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#styles"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1C1917] hover:after:w-full after:transition-all"
            >
              Design Styles
            </a>

            <a
              href="#insights"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1C1917] hover:after:w-full after:transition-all"
            >
              Insights
            </a>

            <a
              href="#contact"
              className="hover:text-[#1C1917] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1C1917] hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: CTA Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs whitespace-nowrap cursor-pointer shadow-2xs"
            >
              Book a Consultation
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1917] hover:text-[#78716C] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-[#FAF8F5] flex flex-col p-6 overflow-y-auto lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4 pb-6 border-b border-[#1C1917]/10">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Services
            </a>
            <div className="pl-4 space-y-2 border-l border-[#1C1917]/15">
              {SERVICES_DATA.map((srv) => (
                <a
                  key={srv.id}
                  href="#services"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onSelectService) onSelectService(srv.id);
                  }}
                  className="block text-sm text-[#78716C] hover:text-[#1C1917]"
                >
                  {srv.title}
                </a>
              ))}
            </div>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Projects
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Philosophy
            </a>
            <a
              href="#styles"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Design Styles
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Insights
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1C1917] hover:text-[#78716C]"
            >
              Contact
            </a>
          </div>

          <div className="pt-6 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-xs tracking-wider uppercase font-medium text-[#FAF8F5] bg-[#1C1917] rounded-xs"
            >
              Book a Consultation
            </button>
            <div className="text-center text-xs text-[#78716C]">
              <span>New York</span> · <span>London</span> · <span>Paris</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
