import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Me",
        "projects": "Projects",
        "tech": "Technologies",
        "contact": "Contact"
      },
      "hero": {
        "greeting": "Hi, I'm",
        "role": "Software Developer",
        "cta": "View My Work",
        "description": "I build accessible, pixel-perfect, performant, and premium web experiences."
      },
      "about": {
        "title": "About Me",
        "description": "I am a passionate developer..."
      },
      "projects": {
        "title": "My Projects"
      },
      "tech": {
        "title": "Technologies & Experience",
        "experience_suffix": "years"
      },
      "contact": {
        "title": "Get in Touch",
        "email": "Email me"
      }
    }
  },
  pt: {
    translation: {
      "nav": {
        "home": "Início",
        "about": "Sobre Mim",
        "projects": "Projetos",
        "tech": "Tecnologias",
        "contact": "Contato"
      },
      "hero": {
        "greeting": "Olá, eu sou",
        "role": "Desenvolvedor de Software",
        "cta": "Ver Meus Trabalhos",
        "description": "Eu construo experiências web acessíveis, perfeitas, performáticas e premium."
      },
      "about": {
        "title": "Sobre Mim",
        "description": "Sou um desenvolvedor apaixonado..."
      },
      "projects": {
        "title": "Meus Projetos"
      },
      "tech": {
        "title": "Tecnologias e Experiência",
        "experience_suffix": "anos"
      },
      "contact": {
        "title": "Entre em Contato",
        "email": "Envie um email"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
