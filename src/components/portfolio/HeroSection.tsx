"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";


const HeroSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/cv/CV_Haingonirina_RAHARISOA.pdf');
      if (!response.ok) {
        setTimeout(() => {
          toast({
            title: t("hero.error"),
            description: t("hero.fileNotFound"),
          });
        }, 1500);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV_Haingonirina_RAHARISOA.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      setTimeout(() => {
        toast({
          title: t("hero.error"),
          description: t("hero.downloadError"),
        });
      }, 1500);
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 15 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-violet-400/20 rounded-full"
      initial={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        opacity: 0,
      }}
      animate={{
        y: [null, -20, 20, -10],
        opacity: [0, 0.8, 0.3, 0.8, 0],
        scale: [0, 1, 0.5, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Professional dark background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/10 rounded-full filter blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated greeting with typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-400 mb-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={20} className="text-violet-400" />
            </motion.div>
            <span>{t("hero.greeting")}</span>
          </motion.div>

          {/* Animated name with gradient and glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent drop-shadow-2xl">
              Haingonirina RAHARISOA
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent blur-sm opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Haingonirina RAHARISOA
            </motion.div>
          </motion.h1>

          {/* Animated title with typewriter effect */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 relative"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5 }}
              className="inline-block text-wrap overflow-hidden whitespace-nowrap"
            >
              {t("hero.title")}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 text-violet-400"
            >
              |
            </motion.span>
          </motion.h2>

          {/* Enhanced description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-3 text-lg border-0 shadow-lg shadow-violet-500/25"
              >
                <Code2 className="mr-2" size={20} />
                {t("hero.viewWork")}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                className="border-violet-500/20 bg-slate-700/50 backdrop-blur-sm text-white hover:bg-violet-500/10 hover:border-violet-300 px-8 py-3 text-lg hover:text-white"
              >
                <Download className="mr-2" size={16} />
                {t("hero.downloadResume")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              href="https://www.github.com/neon-rah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-violet-400/50 transition-all duration-300 text-gray-300 hover:text-violet-400 shadow-lg hover:shadow-violet-500/25"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/haingonirina-raharisoa-69594b367"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-violet-400/50 transition-all duration-300 text-gray-300 hover:text-violet-400 shadow-lg hover:shadow-violet-500/25"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:haingonirina301@gmail.com"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-violet-400/50 transition-all duration-300 text-gray-300 hover:text-violet-400 shadow-lg hover:shadow-violet-500/25"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileHover={{ scale: 1.1 }}
              className="text-violet-400 hover:text-violet-300 transition-colors duration-200 p-2 rounded-full hover:bg-violet-500/10"
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;