import "./utils/i18n/config.ts";

import { AboutPage } from "./components/page-about";
import { IntroPage } from "./components/page-intro";
import { PageScroller } from "./components/page-scroller";

function App() {
  return (
    <div className="h-screen">
      <PageScroller>
        <IntroPage />
        <AboutPage />
      </PageScroller>
    </div>
  );
}

export default App;
