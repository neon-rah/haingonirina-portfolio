// src/app/page.tsx
import NavigationHeader from "@/components/portfolio/NavigationHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <NavigationHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="bg-black/50 backdrop-blur-sm border-t border-violet-500/20 text-slate-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Haingonirina RAHARISOA
              </h3>
              <p className="text-slate-400">
                Computer Science Student & Full Stack Developer
              </p>
            </div>
            <div className="border-t border-violet-500/20 pt-6">
              <p className="mb-2 text-slate-300">
                © 2025 Haingonirina RAHARISOA. All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
