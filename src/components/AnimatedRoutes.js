import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Projects from '../pages/Projects';
import Art from '../pages/Art';
import NoPage from '../pages/NoPage';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<Projects />} />
        <Route path="art" element={<Art />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  )
}