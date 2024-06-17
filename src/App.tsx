import "./utils/i18n/config.ts";

import { AboutPage } from "./components/page-about";
import { IntroPage } from "./components/page-intro";
import { PageScroller } from "./components/page-scroller";
import { TechsPage } from "./components/page-techs/index.tsx";
import { ContactPage } from "./components/page-contact/index.tsx";
import { ThemeToggle } from "./components/theme-toggle/index.tsx";
import { ProjectsPage } from "./components/page-projects/index.tsx";

function App() {
  return (
    <div className="h-screen">
      <PageScroller>
        <IntroPage />
        <AboutPage />
        <ProjectsPage />
        <TechsPage />
        <ContactPage />
      </PageScroller>
      <div className="absolute right-4 bottom-4">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
