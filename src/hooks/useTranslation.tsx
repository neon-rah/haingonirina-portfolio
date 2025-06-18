"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "fr";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.portfolio": "Haingonirina RAHARISOA",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.title": "Full Stack Developer Student",
    "hero.description": "With a passion for discovery and innovation, I explore, learn, and bring ideas to life.",
    "hero.viewWork": "View My Work",
    "hero.downloadResume": "Download Resume",
    "hero.downloadError": "Error downloading resume, please try again.",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Passionate Computer Science Student",
    "about.description1": "I'm Haingonirina RAHARISOA, a passionate computer science student, currently in my 3rd year of a degree at the École de Management et d'Innovation Technologique (EMIT) in Fianarantsoa. Curious and eager to learn, I thrive in exploring technologies like Java, Spring Boot, Next.js, and PostgreSQL, where I blend creativity and rigor to craft innovative solutions.",
    "about.description2": "My journey is driven by a thirst for discovery and a love for clean code. I enjoy tackling technical challenges, deepening my knowledge, and infusing a human touch into my work, while continuously growing in both frontend and backend domains.",
    "about.status": "Current Status",
    "about.statusValue": "Computer Science Student",
    "about.statusSubtitle": "Ecole de Management et d'Innovation Technologique",
    "about.downloadResume": "Download Resume",
    "about.downloadError": "Error downloading resume, please try again.",
    "about.institution": "École de Management et d'Innovation Technologique",

    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.description": "Technologies and tools I work with to bring ideas to life.",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend Development",
    "skills.languages": "Programming Languages",
    "skills.tools": "Databases & Tools",
    "skills.methodologies": "Methodologies & Practices",
    "skills.nextjs": "Next.js",
    "skills.react": "React",
    "skills.angular": "Angular",
    "skills.flutter": "Flutter",
    "skills.javascript": "JavaScript",
    "skills.typescript": "TypeScript",
    "skills.tailwind": "Tailwind CSS",
    "skills.bootstrap": "Bootstrap",
    "skills.html5": "HTML5",
    "skills.css3": "CSS3",
    "skills.jquery": "jQuery",
    "skills.spring": "Spring Boot",
    "skills.node": "Node.js",
    "skills.express": "Express.js",
    "skills.laravel": "Laravel",
    "skills.rest": "REST API",
    "skills.jwt": "JWT",
    "skills.websocket": "WebSocket",
    "skills.java": "Java",
    "skills.php": "PHP",
    "skills.python": "Python",
    "skills.c": "C",
    "skills.postgresql": "PostgreSQL",
    "skills.mysql": "MySQL",
    "skills.git": "Git",
    "skills.github": "GitHub",
    "skills.vscode": "VS Code",
    "skills.intellij": "IntelliJ IDEA",
    "skills.webstorm": "WebStorm",
    "skills.pycharm": "PyCharm",
    "skills.mvc": "MVC Architecture",
    "skills.scrum": "Scrum/Agile",
    "skills.uml": "UML",
    "skills.merise": "Merise",
    "skills.trello": "Trello",
    "skills.shadcn": "shadcn/ui",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.description": "A showcase of my academic and personal projects demonstrating full-stack development skills.",
    "projects.featured": "Featured",
    "projects.viewCode": "View Code",
    "projects.viewFrontend": "Frontend",
    "projects.viewBackend": "Backend",
    "projects.viewBackendJava": "Java/Spring Boot",
    "projects.viewBackendNode": "Node.js/Express",
    "projects.culinary.title": "Culinary Platform",
    "projects.culinary.description": "A full-stack platform for sharing and looking for recipes with dual backend architecture (Java and Node.js). Includes real-time features with WebSocket and JWT authentication.",
    "projects.autoecole.title": "Auto-Ecole Admin Panel",
    "projects.autoecole.description": "An administrative interface for an auto school, built with Laravel and Next.js. Manages user data, courses, and exam sessions with a responsive design.",
    "projects.sentiment.title": "Sentiment Analysis Mini-Project",
    "projects.sentiment.description": "A Python-based application for sentiment analysis of tweets using a TensorFlow neural network, featuring a CustomTkinter GUI for real-time predictions and file-based analysis with the Sentiment140 dataset.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description": "I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in discussing technology and projects.",
    "contact.subtitle": "Let's Connect",
    "contact.text": "Whether you want to discuss a project, collaborate on something exciting, or just want to say hello, I'd love to hear from you. As a student, I'm always eager to learn and contribute to meaningful projects.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.followMe": "Follow Me",
    "contact.sendMessage": "Send a Message",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "What's this about?",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project or just say hello!",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Your message has been sent successfully. I'll get back to you soon!",
    "contact.error": "An error occurred while sending your message. Please try again later.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.title": "Computer Science Student & Full Stack Developer",
    "footer.copyright": "© 2025 Haingonirina RAHARISOA. All rights reserved."
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.portfolio": "Haingonirina RAHARISOA",

    // Hero Section
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Étudiante Développeur Full Stack",
    "hero.description": "Avec une passion pour la découverte et l'innovation, j'explore, j'apprends et je donne vie aux idées.",
    "hero.viewWork": "Voir mon travail",
    "hero.downloadResume": "Télécharger le CV",
    "hero.downloadError": "Erreur lors du téléchargement du CV, veuillez réessayer.",

    // About Section
    "about.title": "À propos de moi",
    "about.subtitle": "Étudiante passionné en informatique",
    "about.description1": "Je suis Haingonirina RAHARISOA, une étudiante passionnée en informatique, actuellement en 3e année de licence à l'École de Management et d'Innovation Technologique (EMIT) à Fianarantsoa. Curieuse et avide d'apprendre, j'excelle dans l'exploration de technologies telles que Java, Spring Boot, Next.js et PostgreSQL, où je combine créativité et rigueur pour créer des solutions innovantes.",
    "about.description2": "Mon parcours est guidé par une soif de découverte et un amour pour un code propre. J'aime relever des défis techniques, approfondir mes connaissances et apporter une touche humaine à mon travail, tout en progressant continuellement dans les domaines frontend et backend.",
    "about.status": "Statut actuel",
    "about.statusValue": "Étudiante en informatique",
    "about.statusSubtitle": "École de Management et d'Innovation Technologique",
    "about.downloadResume": "Télécharger le CV",
    "about.downloadError": "Erreur lors du téléchargement du CV, veuillez réessayer.",
    "about.institution": "École de Management et d'Innovation Technologique",

    // Skills Section
    "skills.title": "Compétences & Technologies",
    "skills.description": "Technologies et outils avec lesquels je travaille pour donner vie aux idées.",
    "skills.frontend": "Développement Frontend",
    "skills.backend": "Développement Backend",
    "skills.languages": "Langages de programmation",
    "skills.tools": "Bases de données & Outils",
    "skills.methodologies": "Méthodologies & Pratiques",
    "skills.nextjs": "Next.js",
    "skills.react": "React",
    "skills.angular": "Angular",
    "skills.flutter": "Flutter",
    "skills.javascript": "JavaScript",
    "skills.typescript": "TypeScript",
    "skills.tailwind": "Tailwind CSS",
    "skills.bootstrap": "Bootstrap",
    "skills.html5": "HTML5",
    "skills.css3": "CSS3",
    "skills.jquery": "jQuery",
    "skills.spring": "Spring Boot",
    "skills.node": "Node.js",
    "skills.express": "Express.js",
    "skills.laravel": "Laravel",
    "skills.rest": "API REST",
    "skills.jwt": "JWT",
    "skills.websocket": "WebSocket",
    "skills.java": "Java",
    "skills.php": "PHP",
    "skills.python": "Python",
    "skills.c": "C",
    "skills.postgresql": "PostgreSQL",
    "skills.mysql": "MySQL",
    "skills.git": "Git",
    "skills.github": "GitHub",
    "skills.vscode": "VS Code",
    "skills.intellij": "IntelliJ IDEA",
    "skills.webstorm": "WebStorm",
    "skills.pycharm": "PyCharm",
    "skills.mvc": "Architecture MVC",
    "skills.scrum": "Scrum/Agile",
    "skills.uml": "UML",
    "skills.merise": "Merise",
    "skills.trello": "Trello",
    "skills.shadcn": "shadcn/ui",

    // Projects Section
    "projects.title": "Projets en vedette",
    "projects.description": "Une vitrine de mes projets académiques et personnels démontrant mes compétences en développement full stack.",
    "projects.featured": "En vedette",
    "projects.viewCode": "Voir le code",
    "projects.viewFrontend": "Frontend",
    "projects.viewBackend": "Backend",
    "projects.viewBackendJava": "Java/Spring Boot",
    "projects.viewBackendNode": "Node.js/Express",
    "projects.culinary.title": "Plateforme Culinaire",
    "projects.culinary.description": "Une plateforme full-stack pour partager et rechercher des recettes avec une architecture backend double (Java et Node.js). Inclut des fonctionnalités en temps réel avec WebSocket et une authentification JWT.",
    "projects.autoecole.title": "Tableau de bord administratif pour Auto-École",
    "projects.autoecole.description": "Une interface administrative pour une auto-école, construite avec Laravel et Next.js. Gère les données des utilisateurs, les cours et les sessions d'examen avec un design responsive.",
    "projects.sentiment.title": "Mini-Projet AI d'Analyse de Sentiments",
    "projects.sentiment.description": "Une application basée sur Python pour l'analyse de sentiments des tweets à l'aide d'un réseau neuronal TensorFlow, avec une interface graphique CustomTkinter pour des prédictions en temps réel et une analyse basée sur des fichiers avec le dataset Sentiment140.",

    // Contact Section
    "contact.title": "Entrer en contact",
    "contact.description": "Je suis toujours ravi de me connecter avec des collègues développeurs, des collaborateurs potentiels ou toute personne intéressée à discuter de technologie et de projets.",
    "contact.subtitle": "Connectons-nous",
    "contact.text": "Que vous souhaitiez discuter d'un projet, collaborer sur quelque chose d'excitant ou simplement dire bonjour, j'aimerais avoir de vos nouvelles. En tant qu'étudiante, je suis toujours désireux d'apprendre et de contribuer à des projets significatifs.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.github": "GitHub",
    "contact.followMe": "Me suivre",
    "contact.sendMessage": "Envoyer un message",
    "contact.name": "Nom",
    "contact.namePlaceholder": "Votre nom",
    "contact.emailPlaceholder": "votre.email@exemple.com",
    "contact.subject": "Sujet",
    "contact.subjectPlaceholder": "De quoi s'agit-il ?",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Parlez-moi de votre projet ou dites simplement bonjour !",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.success": "Votre message a été envoyé avec succès. Je vous répondrai bientôt !",
    "contact.error": "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.title": "Étudiante en informatique & Développeur Full Stack",
    "footer.copyright": "© 2025 Haingonirina RAHARISOA. Tous droits réservés."
  },
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-language");
      return (saved as Language) || "en";
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-language", language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};