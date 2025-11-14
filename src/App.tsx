import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Contact from './pages/Contact';
import Notice from './pages/Notice';
import Gallery from './pages/Gallery';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
