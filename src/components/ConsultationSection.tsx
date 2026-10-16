import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationSectionProps {
  onExploreProjects: () => void;
  preselectedStyle?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onExploreProjects,
  preselectedStyle
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
    message: preselectedStyle ? `We are interested in discussing an interior design project influenced by ${preselectedStyle}.` : '',
    agreedToTerms: true
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Contact telephone is required';
    if (!formData.location.trim()) errs.location = 'Project location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real studio consultation submission with confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'residential',
      location: '',
      areaSize: '',
      budgetRange: '$250k - $500k',
      timeline: 'Within 3-6 Months',
      message: '',
      agreedToTerms: true
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#F2EFEA] border-t border-[#1C1917]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] font-medium mb-3">
            Initiate Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-serif font-normal text-[#1C1917] leading-[1.12] tracking-tight mb-4 text-balance">
            Have a Space in Mind?
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Tell us about your space, your goals and what you want it to become. Every conversation begins with an in-depth review of your spatial requirements.
          </p>
        </div>

        {/* Two-Column Form & Direct Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact & Advisory */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917] font-normal mb-4">
                Studio Consultations
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed mb-8">
                Our partners personally review every inquiry to ensure optimal alignment between your vision and our studio’s schedule. We respond within two business days.
              </p>

              {/* Verified Contact Details */}
              <div className="space-y-6 pt-4 border-t border-[#1C1917]/10">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#78716C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="block text-[#78716C] uppercase tracking-wider text-[10px]">Principal Studio</span>
                    <span className="text-[#1C1917] font-medium">428 Broome Street, Studio 4A</span>
                    <span className="block text-[#57534E]">SoHo, New York, NY 10013</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#78716C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="block text-[#78716C] uppercase tracking-wider text-[10px]">Telephone</span>
                    <a href="tel:+12125550198" className="text-[#1C1917] font-medium hover:underline">
                      +1 (212) 555-0198
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#78716C] mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="block text-[#78716C] uppercase tracking-wider text-[10px]">Client Correspondence</span>
                    <a href="mailto:contact@maisonetbureau.com" className="text-[#1C1917] font-medium hover:underline">
                      contact@maisonetbureau.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-10 pt-6 border-t border-[#1C1917]/10">
                <span className="block text-xs text-[#78716C] mb-2">Prefer to review our portfolio first?</span>
                <button
                  type="button"
                  onClick={onExploreProjects}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#1C1917] hover:text-[#78716C] transition-colors cursor-pointer"
                >
                  <span>Explore Selected Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Privacy notice */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#78716C]">
              <ShieldCheck className="w-4 h-4 text-[#78716C]" />
              <span>Strict non-disclosure agreements honored for all client briefs.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#1C1917]/12 p-8 sm:p-10 rounded-xs shadow-xs">
            {isSuccess ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1C1917] text-[#FAF8F5] mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#1C1917]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-medium text-[#1C1917]">{formData.fullName}</span>. A principal architect will review your project brief for <span className="font-medium text-[#1C1917]">{formData.location}</span> and reach out to schedule an initial discovery session within two business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#1C1917] border border-[#1C1917]/20 hover:border-[#1C1917] transition-colors rounded-xs cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Full Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Montgomery"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors"
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Email Address <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Phone Number <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917] transition-colors"
                    >
                      <option value="residential">Residential Interior Design</option>
                      <option value="commercial">Commercial Interior Design</option>
                      <option value="office">Office / Workplace Design</option>
                      <option value="retail">Retail Interior Design</option>
                      <option value="hospitality">Hospitality Interior Design</option>
                      <option value="turnkey">Full Turnkey Project</option>
                    </select>
                  </div>
                </div>

                {/* Location & Approximate Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Project Location <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City, State / Country"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors"
                    />
                    {errors.location && <p className="text-xs text-red-600 mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Approximate Area (sq ft or m²)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3,500 sq ft"
                      value={formData.areaSize}
                      onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Range & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917] transition-colors"
                    >
                      <option value="$100k - $250k">$100k – $250k</option>
                      <option value="$250k - $500k">$250k – $500k</option>
                      <option value="$500k - $1M">$500k – $1M</option>
                      <option value="$1M+">$1M+</option>
                      <option value="Undetermined">To be determined</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917] transition-colors"
                    >
                      <option value="Immediate">Immediate (Ready to proceed)</option>
                      <option value="Within 3 Months">Within 3 Months</option>
                      <option value="Within 3-6 Months">Within 3–6 Months</option>
                      <option value="Planning Ahead">Planning Ahead (6+ Months)</option>
                    </select>
                  </div>
                </div>

                {/* Message Brief */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#1C1917] mb-1.5">
                    Project Brief & Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your space, architectural condition, primary functional needs, and any distinct design preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1C1917]/15 rounded-xs text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#1C1917] hover:bg-[#292524] transition-colors rounded-xs shadow-2xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Request Architectural Consultation'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#78716C]">
                  By submitting, you agree to studio review in accordance with our strict client privacy standard.
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
