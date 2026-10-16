import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, Building, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF8F5] border border-[#1C1917]/15 rounded-xs shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/10 mb-6">
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <span className="font-serif text-lg text-[#1C1917] font-light">{service.number}</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-widest text-[10px]">Scope Specification</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors cursor-pointer"
            aria-label="Close service scope modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-[#78716C] font-serif italic">
              {service.tagline}
            </p>
          </div>

          <p className="text-sm text-[#57534E] leading-relaxed">
            {service.description}
          </p>

          {/* Deliverables List */}
          <div className="bg-[#F7F4EE] border border-[#1C1917]/8 p-5 rounded-xs space-y-3">
            <span className="block text-[11px] uppercase tracking-wider text-[#1C1917] font-semibold">
              Standard Architectural Deliverables
            </span>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403C]">
                  <CheckCircle2 className="w-4 h-4 text-[#78716C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline and Ideal typologies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#57534E]">
            <div className="p-4 bg-white border border-[#1C1917]/8 rounded-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#1C1917] font-medium">
                <Clock className="w-3.5 h-3.5 text-[#78716C]" />
                <span>Estimated Schedule</span>
              </div>
              <p>{service.timeline}</p>
            </div>

            <div className="p-4 bg-white border border-[#1C1917]/8 rounded-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#1C1917] font-medium">
                <Building className="w-3.5 h-3.5 text-[#78716C]" />
                <span>Typical Spatial Scale</span>
              </div>
              <p>{service.idealFor}</p>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#78716C]">
              Custom fee proposals prepared after exploratory discovery.
            </span>
            <button
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs cursor-pointer shadow-xs"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
