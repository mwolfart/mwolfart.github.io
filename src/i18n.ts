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
        "description": "I build accessible, responsive, performant, and premium web experiences."
      },
      "about": {
        "title": "About Me",
        "one": "I'm a software developer with <1>7+</1> years of vast experience, focusing majorly on the frontend and having worked with a variety of technologies including <1>NextJS</1>, <1>React</1>, <1>Redux</1> and <1>NodeJS</1>.",
        "two": "As a consultant, I have worked in more than <1>10</1> different projects, ranging from small websites to large-scale applications, from healthcare to commerce, and in teams of all sizes.",
        "three": "Beyond technical skills, I also have <1>strong communication skills</1> and aptness for engaging in <1>cross-functional teams</1>, working closely with designers, QAs and other developers, often making use of <1>Agile</1> practices and frameworks.",
        "four": "I'm always on the look out for new things to learn and skills to improve, as well as being open for knowledge exchange and tech discussions in general."
      },
      "projects": {
        "title": "My Projects",
        "portfolio": { 
          "title": "Portfolio Website",
          "description": "You are looking at it! A fully internationalized personal portfolio built with React, Vite, and Vanilla CSS.",
        },
        "emafy": {
          "title": "Emafy",
          "description": "A custom spotify wrapper, consuming the Spotify REST API"
        },
        "expensable": {
          "title": "Expensable",
          "description": "An expense tracking app where the user can add expenses, set categories to them and visualize them in charts"
        },
        "cobaltui": {
          "title": "Cobalt UI",
          "description": "A component library built with Storybook and available under the @mwolfart/cobalt-ui npm package"
        }
      },
      "tech": {
        "title": "Technologies & Experience",
        "experience_suffix": "years",
        "skill_suffix": "skills",
        "category": {
          "frontend": "Frontend",
          "backend": "Backend",
          "tools": "Tools"
        },
        "level": {
          "beginner": "Beginner",
          "intermediate": "Intermediate",
          "advanced": "Advanced"
        }
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
        "description": "Eu construo experiências web acessíveis, responsivas e performáticas."
      },
      "about": {
        "title": "Sobre Mim",
       "one": "Sou um desenvolvedor com <1>7+</1> anos de experiência, focando principalmente no frontend e tendo trabalhado com uma variedade de tecnologias incluindo <1>NextJS</1>, <1>React</1>, <1>Redux</1> e <1>NodeJS</1>.",
       "two": "Como consultor, trabalhei em mais de <1>10</1> projetos diferentes, variando de sites pequenos a aplicações de escala, desde saúde até comércio, e em equipes de todos os tamanhos.",
       "three": "Além das habilidades técnicas, também tenho <1>habilidade de comunicação forte</1> e aptidão para se envolver em <1>equipes diversas</1>, trabalhando de perto com designers, QAs e outros desenvolvedores, frequentemente fazendo uso de práticas e frameworks <1>Agile</1>.",
       "four": "Sempre estou à procura de novas coisas para aprender e habilidades para melhorar, bem como aberto para troca de conhecimento e discussões técnicas em geral.",       
      },
      "projects": {
        "title": "Meus Projetos",
        "portfolio": {
          "title": "Portfólio",
          "description": "Você está olhando para ele! Um portfolio pessoal internacionalizado construído com React, Vite e CSS puro.",
        },
        "emafy": {
          "title": "Emafy",
          "description": "Um wrapper personalizado para o Spotify, consumindo a API REST do Spotify."
        },
        "expensable": {
          "title": "Expensable",
          "description": "Um aplicativo para rastrear despesas, classificá-las em categorias e visualizá-las em gráficos."
        },
        "cobaltui": {
          "title": "Cobalt UI",
          "description": "Uma biblioteca de componentes construída com Storybook e disponível no npm sob o nome @mwolfart/cobalt-ui."
        }
      },
      "tech": {
        "title": "Tecnologias e Experiência",
        "experience_suffix": "anos",
        "skill_suffix": "",
        "category": {
          "frontend": "Frontend",
          "backend": "Backend",
          "tools": "Ferramentas"
        },
        "level": {
          "beginner": "Iniciante",
          "intermediate": "Intermediário",
          "advanced": "Avançado"
        }
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
