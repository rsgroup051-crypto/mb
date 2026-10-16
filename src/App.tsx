import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { BrandIntro } from './components/BrandIntro';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { DesignStylesSection } from './components/DesignStylesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { InsightsSection } from './components/InsightsSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';

import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { ArticleModal } from './components/ArticleModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal, LegalTab } from './components/LegalModal';

import { Project, Service, InsightArticle, ProjectCategory } from './types';
import { SERVICES_DATA, PROJECTS_DATA } from './data/content';

export default function App() {
  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationPreselectedTopic, setConsultationPreselectedTopic] = useState<string>('');
  
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalActiveTab, setLegalActiveTab] = useState<LegalTab>('privacy');

  // Category filter state for projects section
  const [activeProjectCategory, setActiveProjectCategory] = useState<ProjectCategory>('all');

  // Navigation helpers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (topic?: string) => {
    if (topic) {
      setConsultationPreselectedTopic(topic);
    } else {
      setConsultationPreselectedTopic('');
    }
    setConsultationModalOpen(true);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleSelectProjectCategoryFromHeader = (cat: string) => {
    setActiveProjectCategory(cat as ProjectCategory);
    scrollToSection('projects');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#292524] selection:text-[#FAF8F5]">
      
      {/* 1. Sticky Header */}
      <Header
        onOpenConsultation={() => handleOpenConsultation('General Studio Consultation')}
        onSelectService={handleSelectServiceById}
        onSelectProjectCategory={handleSelectProjectCategoryFromHeader}
      />

      {/* Main Page Flow */}
      <main id="main-content" className="grow flex flex-col">
        {/* 2. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Comprehensive Spatial Brief')}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* 3. Trust / Positioning Strip */}
        <TrustStrip />

        {/* 4. Brand Introduction */}
        <BrandIntro
          onLearnMore={() => scrollToSection('philosophy')}
        />

        {/* 5. Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 6. Featured Projects */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          activeCategory={activeProjectCategory}
          onCategoryChange={(cat) => setActiveProjectCategory(cat)}
        />

        {/* 7. Design Philosophy */}
        <PhilosophySection />

        {/* 8. Design Styles */}
        <DesignStylesSection
          onOpenConsultationWithStyle={(styleName) => handleOpenConsultation(`Design Style: ${styleName}`)}
        />

        {/* 9. Design Process */}
        <ProcessSection
          onStartProject={() => scrollToSection('contact')}
        />

        {/* 10. Why Maison & Bureau */}
        <WhyUsSection />

        {/* 11. Featured Insights */}
        <InsightsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 12. FAQ Section (AEO / SXO) */}
        <FaqSection />

        {/* 13. Final Conversion Section (Consultation Form) */}
        <ConsultationSection
          onExploreProjects={() => scrollToSection('projects')}
          preselectedStyle={consultationPreselectedTopic}
        />
      </main>

      {/* 14. Footer */}
      <Footer
        onOpenPrivacy={() => {
          setLegalActiveTab('privacy');
          setLegalModalOpen(true);
        }}
        onOpenTerms={() => {
          setLegalActiveTab('terms');
          setLegalModalOpen(true);
        }}
        onOpenSitemap={() => {
          setLegalActiveTab('sitemap');
          setLegalModalOpen(true);
        }}
        onSelectService={handleSelectServiceById}
      />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projName) => handleOpenConsultation(`Project Reference: ${projName}`)}
      />

      {/* Interactive Service Scope Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(serviceTitle) => handleOpenConsultation(`Service: ${serviceTitle}`)}
      />

      {/* Interactive Article Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onInquire={() => handleOpenConsultation('Topical Insight Discussion')}
      />

      {/* Quick Booking Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedTopic={consultationPreselectedTopic}
      />

      {/* Legal & Sitemap Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalActiveTab}
        onClose={() => setLegalModalOpen(false)}
        onNavigateSection={scrollToSection}
      />

    </div>
  );
}
