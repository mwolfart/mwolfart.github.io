import "./utils/i18n/config.ts";

import { AboutPage } from "./components/page-about";
import { IntroPage } from "./components/page-intro";
import { PageScroller } from "./components/page-scroller";
import { TechsPage } from "./components/page-techs/index.tsx";
import { ContactPage } from "./components/page-contact/index.tsx";
import { ThemeToggle } from "./components/theme-toggle/index.tsx";
import { ProjectsPage } from "./components/page-projects/index.tsx";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "./constants/breakpoints.ts";

function App() {
  const isScreenXl = useMediaQuery({ query: mediaQueries.xl });
  return (
    <div className="h-dvh">
      <PageScroller>
        <IntroPage />
        {!isScreenXl && <AboutPage />}
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
