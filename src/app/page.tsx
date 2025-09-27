"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import TechnicalSkills from "@/components/sections/technical-skills";
import FeaturedProjects from "@/components/sections/featured-projects";
import EducationCertifications from "@/components/sections/education-certifications";
import ContactSection from "@/components/sections/contact";
import CtaFooter from "@/components/sections/cta-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      <main>
        <HeroSection />
        <TechnicalSkills />
        <FeaturedProjects />
        <EducationCertifications />
        <ContactSection />
        <CtaFooter />
      </main>
      <footer className="py-6 bg-slate-900 text-center text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2024 Mukul Desai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}