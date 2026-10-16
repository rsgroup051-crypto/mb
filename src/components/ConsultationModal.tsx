import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTopic
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'residential',
    location: '',
    areaSize: '',
    budgetRange: '$250k - $500k',
    timeline: 'Within 3-6 Months',
    message: preselectedTopic ? `Inquiring regarding: ${preselectedTopic}` : '',
    agreedToTerms: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedTopic) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring regarding: ${preselectedTopic}`
      }));
    }
  }, [preselectedTopic]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-[#FAF8F5] border border-[#1C1917]/15 rounded-xs shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/10 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#78716C] font-mono">
              Schedule Studio Consultation
            </span>
            <h3 className="text-2xl font-serif text-[#1C1917]">
              Maison & Bureau
            </h3>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#1C1917]/5 transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1C1917] text-[#FAF8F5] mb-2">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-serif text-[#1C1917]">
              Consultation Scheduled
            </h4>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-medium text-[#1C1917]">{formData.fullName}</span>. An introductory calendar link and preparatory checklist have been transmitted to <span className="font-medium text-[#1C1917]">{formData.email}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1917] rounded-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1">
                Full Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Julian Montgomery"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1">
                  Email <span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="julian@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1">
                  Telephone <span className="text-red-700">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (212) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1">
                  Typology
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                >
                  <option value="residential">Residential</option>
                  <option value="office">Workplace / Office</option>
                  <option value="commercial">Commercial</option>
                  <option value="retail">Retail Boutique</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="turnkey">Full Turnkey</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1">
                  Location <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. New York or London"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1">
                Project Notes
              </label>
              <textarea
                rows={3}
                placeholder="Briefly state your spatial goals, approximate square footage, or key deadlines..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{isSubmitting ? 'Confirming...' : 'Request Studio Discovery'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
