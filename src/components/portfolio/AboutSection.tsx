"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/action-types";

import { useTranslation } from "@/hooks/useTranslation";



const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/cv/CV_Haingonirina_RAHARISOA.pdf');
      if (!response.ok) {
        setTimeout(() => {
          toast({
            title: t("about.downloadError"),
            description: t("about.downloadError"),
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
          title: t("about.downloadError"),
          description: t("about.downloadError"),
        });
      }, 1500);
    }
  };

  return (
    <section id="about" className="py-16 bg-slate-800 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("about.title")}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
            {/* Enhanced Profile Image Side */}
            <motion.div variants={itemVariants} className="relative w-full max-w-xs mx-auto lg:max-w-md">
              <div className="relative w-full aspect-square mx-auto overflow-hidden">
                {/* Animated border rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-violet-500/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ padding: "10px" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ padding: "20px" }}
                />

                {/* Profile picture container */}
                <motion.div
                  className="relative w-full h-full bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 rounded-full p-1 shadow-lg shadow-violet-500/25"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center relative">
                    {/* Profile Image */}
                    <img
                      src={"/assets/profile/profile.png"}
                      alt="Haingonirina RAHARISOA"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    {/* Fallback initials */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent"
                      style={{ display: "none" }}
                    >
                      HR
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6 w-full">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {t("about.subtitle")}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {t("about.description1")}
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {t("about.description2")}
              </p>

              {/* Student Status Card */}
              <div className="pt-4 sm:pt-6">
                <Card className="border-violet-500/20 bg-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <GraduationCap className="text-violet-400" size={24} />
                    </motion.div>
                    <div>
                      <p className="font-medium text-white">{t("about.status")}</p>
                      <p className="text-slate-300">{t("about.statusValue")}</p>
                      <p className="text-sm text-violet-400">{t("about.statusSubtitle")}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Download Resume Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4 sm:pt-6"
              >
                <Button
                  size="lg"
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/25"
                >
                  <Download className="mr-2" size={16} />
                  {t("about.downloadResume")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;