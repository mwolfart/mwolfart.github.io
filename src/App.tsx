import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tech" element={<TechStack />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
