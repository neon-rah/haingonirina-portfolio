"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Définir un type pour les projets
interface Project {
  title: string;
  description: string;
  images: { src: string; color: string }[];
  technologies: string[];
  frontend?: string; // Optionnel
  backend?: string; // Optionnel
  backendJava?: string; // Optionnel
  backendNode?: string; // Optionnel
  github?: string; // Optionnel
  featured: boolean;
  separateRepos?: boolean; // Optionnel
  tripleRepos?: boolean; // Optionnel
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlides, setCurrentSlides] = useState<{ [key: number]: number }>(
    {},
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const projects: Project[] = [
    {
      title: "Culinary Platform",
      description:
        "A full-stack platform for sharing and looking for recipes with dual backend architecture (Java and Node.js). Includes real-time features with WebSocket and JWT authentication.",
      images: [
        { src: "/images/malagasy-culinary-1.jpg", color: "bg-gradient-to-br from-green-500 to-emerald-600" },
        { src: "/images/malagasy-culinary-2.jpg", color: "bg-gradient-to-br from-purple-500 to-pink-600" },
        { src: "/images/malagasy-culinary-3.jpg", color: "bg-gradient-to-br from-indigo-500 to-purple-600" },
        { src: "/images/malagasy-culinary-4.jpg", color: "bg-gradient-to-br from-teal-500 to-cyan-600" },
        { src: "/images/malagasy-culinary-5.jpg", color: "bg-gradient-to-br from-rose-500 to-pink-600" },
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "Express", "PostgreSQL", "Next.js", "Tailwind CSS", "WebSocket", "JWT"],
      frontend: "https://github.com/neon-rah/recipe-hub-frontend",
      backendJava: "https://github.com/neon-rah/recipe-hub-backend",
      backendNode: "https://github.com/neon-rah/recipe-hub-backend-js",
      featured: true,
      tripleRepos: true,
    },
    {
      title: "Auto-Ecole Admin Panel",
      description:
        "An administrative interface for an auto school, built with Laravel and Next.js. Manages user data, cours, and exams sessions with a responsive design.",
      images: [
        { src: "/images/auto-ecole-1.jpg", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
        { src: "/images/auto-ecole-2.jpg", color: "bg-gradient-to-br from-red-500 to-rose-600" },
        { src: "/images/auto-ecole-3.jpg", color: "bg-gradient-to-br from-indigo-500 to-purple-600" },
      ],
      technologies: ["Next.js", "Laravel", "PHP", "PostgreSQL", "Tailwind CSS"],
      frontend: "https://github.com/neon-rah/auto-ecole-frontend",
      backend: "https://github.com/neon-rah/auto-ecole-backend",
      featured: true,
      separateRepos: true, // Ajouté pour cohérence
    },
    {
      "title": "Sentiment Analysis Mini-Project",
      "description": "A Python-based application for sentiment analysis of tweets using a TensorFlow neural network, featuring a CustomTkinter GUI for real-time predictions and file-based analysis with the Sentiment140 dataset.",
      "images": [
        {
          "src": "/assets/projects/sentiment-analysis-1.png",
          "color": "bg-gradient-to-br from-blue-500 to-cyan-600"
        },
        {
          "src": "/assets/projects/sentiment-analysis-2.png",
          "color": "bg-gradient-to-br from-green-500 to-teal-600"
        },
        {
          "src": "/assets/projects/sentiment-analysis-3.png",
          "color": "bg-gradient-to-br from-purple-500 to-indigo-600"
        }
      ],
      "technologies": ["Python", "TensorFlow", "CustomTkinter", "Pandas", "NumPy", "Scikit-learn"],
      "github": "https://github.com/neon-rah/ai-sentiment-analysis.git ",
      "featured": true
    }
  ];

  // Initialize all projects with slide 0
  useEffect(() => {
    const initialSlides: { [key: number]: number } = {};
    projects.forEach((_, index) => {
      initialSlides[index] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  // Auto-cycle images for all projects
  useEffect(() => {
    const intervals: { [key: number]: NodeJS.Timeout } = {};

    projects.forEach((project, projectIndex) => {
      if (project.images.length > 1) {
        intervals[projectIndex] = setInterval(
          () => {
            setCurrentSlides((prev) => ({
              ...prev,
              [projectIndex]:
                ((prev[projectIndex] || 0) + 1) % project.images.length,
            }));
          },
          4000 + projectIndex * 1000,
        ); // Stagger more - each project cycles at different timing
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [projects.length]); // Depend on projects.length to ensure re-setup if needed

  const nextSlide = (projectIndex: number, totalSlides: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalSlides,
    }));
  };

  const prevSlide = (projectIndex: number, totalSlides: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + totalSlides) % totalSlides,
    }));
  };

  const setSlide = (projectIndex: number, slideIndex: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectIndex]: slideIndex,
    }));
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my academic and personal projects demonstrating
              full-stack development skills.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className="group"
              >
                <Card className="border-slate-600 bg-slate-800/50 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-violet-500/10">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Auto-cycling Image Carousel */}
                      <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                          {/* Current slide with smooth transitions */}
                          <motion.div
                            key={`project-${index}-slide-${currentSlides[index] || 0}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className={`absolute inset-0 ${project.images[currentSlides[index] || 0]?.color} flex items-center justify-center`}
                          >
                            <img
                              src={project.images[currentSlides[index] || 0]?.src}
                              alt={`${project.title} slide ${currentSlides[index] || 0}`}
                              className="w-full h-full object-cover rounded-xl"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = "flex";
                              }}
                            />
                          </motion.div>

                          {/* Manual navigation arrows */}
                          {project.images.length > 1 && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                  prevSlide(index, project.images.length)
                                }
                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm z-10"
                              >
                                <ChevronLeft size={20} />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                  nextSlide(index, project.images.length)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 backdrop-blur-sm z-10"
                              >
                                <ChevronRight size={20} />
                              </motion.button>
                            </>
                          )}

                          {/* Slide indicators */}
                          {project.images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                              {project.images.map((_, slideIndex) => (
                                <motion.button
                                  key={slideIndex}
                                  onClick={() => setSlide(index, slideIndex)}
                                  whileHover={{ scale: 1.1 }}
                                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    (currentSlides[index] || 0) === slideIndex
                                      ? "bg-white shadow-lg"
                                      : "bg-white/50 hover:bg-white/75"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Featured badge */}
                        {project.featured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="absolute -top-3 -right-3"
                          >
                            {/*<Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 shadow-lg">*/}
                            {/*  Featured*/}
                            {/*</Badge>*/}
                          </motion.div>
                        )}
                      </div>

                      {/* Project Content */}
                      <motion.div
                        className="space-y-6 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                delay: index * 0.1 + techIndex * 0.05 + 0.3,
                              }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-slate-700 text-gray-300 border-slate-600 hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/50 transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        {/* GitHub Links */}
                        <div className="space-y-3">
                          {/* Single repository */}
                          {project.github && (
                            <motion.div
                              whileHover={{ scale: 1.01, y: -1 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <Button
                                variant="outline"
                                className="w-full border-violet-400 text-violet-400 hover:bg-violet-500/10 hover:border-violet-300 transition-all duration-300"
                                asChild
                              >
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github size={18} className="mr-2" />
                                  View Code
                                </a>
                              </Button>
                            </motion.div>
                          )}

                          {/* Separate frontend/backend repositories */}
                          {project.separateRepos && (
                            <div className="grid sm:grid-cols-2 gap-3">
                              <motion.div
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                <Button
                                  variant="outline"
                                  className="w-full border-violet-400 text-violet-400 hover:bg-violet-500/10 hover:border-violet-300 transition-all duration-300"
                                  asChild
                                >
                                  <a
                                    href={project.frontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github size={18} className="mr-2" />
                                    Frontend
                                  </a>
                                </Button>
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                <Button
                                  variant="outline"
                                  className="w-full border-purple-400 text-purple-400 hover:bg-purple-500/10 hover:border-purple-300 transition-all duration-300"
                                  asChild
                                >
                                  <a
                                    href={project.backend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github size={18} className="mr-2" />
                                    Backend
                                  </a>
                                </Button>
                              </motion.div>
                            </div>
                          )}

                          {/* Triple repositories (frontend + 2 backends) */}
                          {project.tripleRepos && (
                            <div className="space-y-3">
                              <motion.div
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                <Button
                                  variant="outline"
                                  className="w-full border-violet-400 text-violet-400 hover:bg-violet-500/10 hover:border-violet-300 transition-all duration-300"
                                  asChild
                                >
                                  <a
                                    href={project.frontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github size={18} className="mr-2" />
                                    Frontend (Next.js)
                                  </a>
                                </Button>
                              </motion.div>
                              <div className="grid sm:grid-cols-2 gap-3">
                                <motion.div
                                  whileHover={{ scale: 1.01, y: -1 }}
                                  whileTap={{ scale: 0.99 }}
                                >
                                  <Button
                                    variant="outline"
                                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-500/10 hover:border-purple-300 transition-all duration-300"
                                    asChild
                                  >
                                    <a
                                      href={project.backendJava}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github size={18} className="mr-2" />
                                      Java/Spring Boot
                                    </a>
                                  </Button>
                                </motion.div>
                                <motion.div
                                  whileHover={{ scale: 1.01, y: -1 }}
                                  whileTap={{ scale: 0.99 }}
                                >
                                  <Button
                                    variant="outline"
                                    className="w-full border-green-400 text-green-400 hover:bg-green-500/10 hover:border-green-300 transition-all duration-300"
                                    asChild
                                  >
                                    <a
                                      href={project.backendNode}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github size={18} className="mr-2" />
                                      Node.js/Express
                                    </a>
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;