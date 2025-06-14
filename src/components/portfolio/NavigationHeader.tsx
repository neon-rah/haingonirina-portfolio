"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// Temporary inline translation until hook is working
const useTranslation = () => {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.portfolio": "Haingonirina.Rah",
    },
    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "nav.portfolio": "Haingonirina.Rah",
    },
  };

  const t = (key: string) =>
    translations[language][key as keyof (typeof translations)["en"]] || key;

  return { language, setLanguage, t };
};

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-violet-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection("home")}
          >
            {t("nav.portfolio")}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-violet-400 transition-colors duration-200 font-medium relative group px-2 py-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}

            {/* Language Toggle - Desktop */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-md bg-slate-800/50 text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </motion.button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3 flex-shrink-0">
            {/* Language Toggle - Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 rounded-md bg-slate-800/50 text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 p-2 h-8 w-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-violet-500/20 bg-slate-900/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="py-4 space-y-1 max-w-7xl mx-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200 rounded-md"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default NavigationHeader;
