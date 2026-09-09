// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "BiBiBet",
    description: {
      fr: "Application d'analyse de matchs de football avec suivi des favoris et historique des rencontres.",
      en: "Football match analysis app with favorites tracking and match history."
    },
    image: "/projects/football-analyser_as_copy.png",
    technologies: ["Data Scraping", "React", "FAST API", "Superbase", "Gemini Flash"],
    liveUrl: "https://football-analyser-client.vercel.app"
  },
  {
    id: 2,
    title: "ShopHub",
    description: {
      fr: "Plateforme e-commerce moderne avec catégories de produits et interface utilisateur fluide.",
      en: "Modern e-commerce platform with product categories and a smooth user interface."
    },
    image: "/projects/shophub.png",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "REST API"],
    liveUrl: "https://shophub-snowy.vercel.app"
  },
  {
    id: 3,
    title: "TaskFlow",
    description: {
      fr: "Application de gestion de tâches avec authentification JWT, API REST et filtres en temps réel.",
      en: "Task management app with JWT authentication, REST API and real-time filters."
    },
    image: "/projects/taskflow.png",
    technologies: ["Django Stack", "PostgreSQL", "React", "Python", "REST API"],
    liveUrl: "https://taskflow-client-cyan.vercel.app"
  },
  {
    id: 4,
    title: "Analytics Pro",
    description: {
      fr: "Tableau de bord d'analyse avec métriques interactives pour le suivi des performances.",
      en: "Analytics dashboard with interactive metrics for performance tracking."
    },
    image: "/projects/dashboard-analytics.png",
    technologies: ["React", "Chart.js", "FAST API", "PostgreSQL", "REST API"],
    liveUrl: "https://dashboard-analytics-wheat.vercel.app"
  },
  {
    id: 5,
    title: "Auth System",
    description: {
      fr: "Système d'authentification complet avec création de compte, connexion et gestion d'utilisateurs.",
      en: "Complete authentication system with account creation, login and user management."
    },
    image: "/projects/auth-system.png",
    technologies: ["React", "Node.js", "JWT", "PostgreSQL", "REST API"],
    liveUrl: "https://auth-system-client-two.vercel.app"
  }
]
