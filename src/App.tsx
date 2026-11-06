/**
 * Cynthia Okanda - Software Engineer & Web Architect
 * Single-Page Animated Online Platform Advert Website
 */

import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { TechStackSection } from './components/TechStackSection';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingHireMe } from './components/FloatingHireMe';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');

  // Synchronize dark class on <html> document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleScrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForInquiry(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white transition-colors duration-300 relative">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Sticky Navbar with Advert Banner and Scroll Progress */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHireMeClick={() => handleScrollToContact()}
      />

      {/* Main Content Sections (In Exact Specified Order) */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero
          isDark={isDark}
          onTalkClick={() => handleScrollToContact()}
        />

        {/* 3. About Me Section */}
        <AboutSection
          onHireClick={() => handleScrollToContact()}
        />

        {/* 4. Skills Section */}
        <SkillsSection />

        {/* 5. Tech Stack Section */}
        <TechStackSection />

        {/* 6. Scalable Systems Showcase */}
        <ArchitectureShowcase />

        {/* 7. Projects Section */}
        <ProjectsSection />

        {/* 8. Services Section */}
        <ServicesSection
          onSelectService={(serviceTitle) => handleScrollToContact(serviceTitle)}
        />

        {/* 9. Experience and Education Section */}
        <ExperienceEducation />

        {/* 10. Testimonials Section */}
        <TestimonialsSection />

        {/* 11. Contact Section */}
        <ContactSection
          initialService={selectedServiceForInquiry}
        />
      </main>

      {/* 12. Footer with Maroon Depth */}
      <Footer />

      {/* Floating "Hire Me" Button */}
      <FloatingHireMe
        onHireClick={() => handleScrollToContact()}
      />
    </div>
  );
}
