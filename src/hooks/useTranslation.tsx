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
    "nav.portfolio": "Portfolio",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.title": "Full Stack Developer Student",
    "hero.description":
      "Passionate computer science student crafting innovative web solutions with modern technologies. Bringing ideas to life through clean code and intuitive user experiences.",
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get In Touch",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "Passionate Computer Science Student",
    "about.description1":
      "I'm Haingonirina RAHARISOA, a dedicated computer science student with a passion for full-stack development. Currently pursuing my degree while building practical experience through hands-on projects and continuous learning. I enjoy exploring new technologies and solving complex problems through innovative coding solutions.",
    "about.description2":
      "My journey in software development is driven by curiosity and a desire to create meaningful applications. I thrive on challenges and am always eager to expand my knowledge in both frontend and backend technologies.",
    "about.status": "Current Status",
    "about.statusValue": "Computer Science Student",
    "about.statusSubtitle": "Actively Learning & Building",
    "about.downloadResume": "Download Resume",

    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.description":
      "Technologies and tools I work with to bring ideas to life.",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend Development",
    "skills.languages": "Programming Languages",
    "skills.tools": "Databases & Tools",
    "skills.methodologies": "Methodologies & Practices",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.description":
      "A showcase of my academic and personal projects demonstrating full-stack development skills.",
    "projects.featured": "Featured",
    "projects.frontend": "Frontend",
    "projects.backend": "Backend",
    "projects.viewCode": "View Code",
    "projects.frontendAngular": "Frontend (Angular)",
    "projects.javaSpringBoot": "Java/Spring Boot",
    "projects.nodeExpress": "Node.js/Express",

    // Project Details
    "projects.ecommerce.title": "Full-Stack E-Commerce Platform",
    "projects.ecommerce.description":
      "A comprehensive e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard. Features real-time inventory management and order tracking.",
    "projects.ecommerce.homepage": "Homepage & Product Showcase",
    "projects.ecommerce.catalog": "Product Catalog & Search",
    "projects.ecommerce.cart": "Shopping Cart & Checkout",
    "projects.ecommerce.admin": "Admin Dashboard",
    "projects.ecommerce.profile": "User Profile & Orders",

    "projects.taskmanager.title": "Task Management System",
    "projects.taskmanager.description":
      "A collaborative project management application with dual backend architecture. Supports real-time updates, team collaboration, drag-and-drop functionality, and advanced project analytics.",
    "projects.taskmanager.dashboard": "Project Dashboard",
    "projects.taskmanager.kanban": "Kanban Board Interface",
    "projects.taskmanager.team": "Team Collaboration",
    "projects.taskmanager.analytics": "Analytics & Reports",

    "projects.university.title": "University Course Management",
    "projects.university.description":
      "A comprehensive academic management system for students and faculty. Features course enrollment, grade tracking, assignment submission, and academic calendar integration.",
    "projects.university.portal": "Student Portal Dashboard",
    "projects.university.catalog": "Course Catalog & Enrollment",
    "projects.university.grades": "Grade Management System",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in discussing technology and projects.",
    "contact.subtitle": "Let's Connect",
    "contact.text":
      "Whether you want to discuss a project, collaborate on something exciting, or just want to say hello, I'd love to hear from you. As a student, I'm always eager to learn and contribute to meaningful projects.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.followMe": "Follow Me",
    "contact.sendMessage": "Send a Message",
    "contact.name": "Name",
    "contact.nameplaceholder": "Your name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subject": "Subject",
    "contact.subjectPlaceholder": "What's this about?",
    "contact.message": "Message",
    "contact.messagePlaceholder":
      "Tell me about your project or just say hello!",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.messageSent": "Message sent!",
    "contact.messageSuccess":
      "Thank you for your message. I'll get back to you soon.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.builtWith":
      "Built with React, TypeScript, Tailwind CSS, and Framer Motion",
    "footer.title": "Computer Science Student & Full Stack Developer",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.portfolio": "Portfolio",

    // Hero Section
    "hero.greeting": "Salut, je suis",
    "hero.title": "Étudiant Développeur Full Stack",
    "hero.description":
      "Étudiant passionné en informatique créant des solutions web innovantes avec des technologies modernes. Donnant vie aux idées grâce à un code propre et des expériences utilisateur intuitives.",
    "hero.viewWork": "Voir mon travail",
    "hero.getInTouch": "Me contacter",

    // About Section
    "about.title": "À propos de moi",
    "about.subtitle": "Étudiant passionné en informatique",
    "about.description1":
      "Je suis Haingonirina RAHARISOA, un étudiant dévoué en informatique avec une passion pour le développement full stack. Actuellement en cours d'études tout en acquérant une expérience pratique grâce à des projets concrets et un apprentissage continu. J'aime explorer de nouvelles technologies et résoudre des problèmes complexes grâce à des solutions de codage innovantes.",
    "about.description2":
      "Mon parcours en développement logiciel est motivé par la curiosité et le désir de créer des applications significatives. Je prospère sur les défis et suis toujours désireux d'élargir mes connaissances dans les technologies frontend et backend.",
    "about.status": "Statut actuel",
    "about.statusValue": "Étudiant en informatique",
    "about.statusSubtitle": "Apprentissage actif et développement",
    "about.downloadResume": "Télécharger le CV",

    // Skills Section
    "skills.title": "Compétences & Technologies",
    "skills.description":
      "Technologies et outils avec lesquels je travaille pour donner vie aux idées.",
    "skills.frontend": "Développement Frontend",
    "skills.backend": "Développement Backend",
    "skills.languages": "Langages de programmation",
    "skills.tools": "Bases de données & Outils",
    "skills.methodologies": "Méthodologies & Pratiques",

    // Projects Section
    "projects.title": "Projets en vedette",
    "projects.description":
      "Une vitrine de mes projets académiques et personnels démontrant mes compétences en développement full stack.",
    "projects.featured": "En vedette",
    "projects.frontend": "Frontend",
    "projects.backend": "Backend",
    "projects.viewCode": "Voir le code",
    "projects.frontendAngular": "Frontend (Angular)",
    "projects.javaSpringBoot": "Java/Spring Boot",
    "projects.nodeExpress": "Node.js/Express",

    // Project Details
    "projects.ecommerce.title": "Plateforme E-Commerce Full Stack",
    "projects.ecommerce.description":
      "Une solution e-commerce complète avec authentification utilisateur, panier d'achat, intégration de paiement et tableau de bord admin. Comprend la gestion d'inventaire en temps réel et le suivi des commandes.",
    "projects.ecommerce.homepage": "Page d'accueil & Vitrine produits",
    "projects.ecommerce.catalog": "Catalogue produits & Recherche",
    "projects.ecommerce.cart": "Panier & Commande",
    "projects.ecommerce.admin": "Tableau de bord admin",
    "projects.ecommerce.profile": "Profil utilisateur & Commandes",

    "projects.taskmanager.title": "Système de gestion des tâches",
    "projects.taskmanager.description":
      "Une application de gestion de projet collaborative avec une architecture backend double. Prend en charge les mises à jour en temps réel, la collaboration d'équipe, la fonctionnalité glisser-déposer et l'analyse de projet avancée.",
    "projects.taskmanager.dashboard": "Tableau de bord du projet",
    "projects.taskmanager.kanban": "Interface Kanban",
    "projects.taskmanager.team": "Collaboration d'équipe",
    "projects.taskmanager.analytics": "Analyses & Rapports",

    "projects.university.title": "Gestion des cours universitaires",
    "projects.university.description":
      "Un système de gestion académique complet pour les étudiants et le corps professoral. Comprend l'inscription aux cours, le suivi des notes, la soumission des devoirs et l'intégration du calendrier académique.",
    "projects.university.portal": "Portail étudiant",
    "projects.university.catalog": "Catalogue des cours & Inscription",
    "projects.university.grades": "Système de gestion des notes",

    // Contact Section
    "contact.title": "Entrer en contact",
    "contact.description":
      "Je suis toujours ravi de me connecter avec des collègues développeurs, des collaborateurs potentiels ou toute personne intéressée à discuter de technologie et de projets.",
    "contact.subtitle": "Connectons-nous",
    "contact.text":
      "Que vous souhaitiez discuter d'un projet, collaborer sur quelque chose d'excitant ou simplement dire bonjour, j'aimerais avoir de vos nouvelles. En tant qu'étudiant, je suis toujours désireux d'apprendre et de contribuer à des projets significatifs.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.github": "GitHub",
    "contact.followMe": "Me suivre",
    "contact.sendMessage": "Envoyer un message",
    "contact.name": "Nom",
    "contact.nameplaceholder": "Votre nom",
    "contact.emailPlaceholder": "votre.email@exemple.com",
    "contact.subject": "Sujet",
    "contact.subjectPlaceholder": "De quoi s'agit-il ?",
    "contact.message": "Message",
    "contact.messagePlaceholder":
      "Parlez-moi de votre projet ou dites simplement bonjour !",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.messageSent": "Message envoyé !",
    "contact.messageSuccess":
      "Merci pour votre message. Je vous répondrai bientôt.",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.builtWith":
      "Créé avec React, TypeScript, Tailwind CSS et Framer Motion",
    "footer.title": "Étudiant en informatique & Développeur Full Stack",
  },
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if we're in browser environment
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-language");
      return (saved as Language) || "en";
    }
    return "en";
  });

  useEffect(() => {
    // Only access localStorage in browser environment
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
