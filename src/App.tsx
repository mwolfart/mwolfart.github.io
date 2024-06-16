import "./utils/i18n/config.ts";

import { AboutPage } from "./components/page-about";
import { IntroPage } from "./components/page-intro";
import { Scroller } from "./components/scroller";

function App() {
  return (
    <div className="h-screen pl-4">
      <Scroller>
        <IntroPage />
        <AboutPage />
      </Scroller>
    </div>
  );
}

export default App;
