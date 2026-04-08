import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import HackathonPopup from './components/HackathonPopup';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => {
        setShowPopup(true);
    }, 800);
  };

  return (
    <SmoothScroll>
      <div className="noise-overlay"></div>
      <Cursor />
      
      <AnimatePresence mode="wait">
          {loading && <Loader key="loader" onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <div className={`dark bg-primary min-h-screen text-white relative transition-all duration-500 ease-in-out ${loading ? 'h-screen overflow-hidden' : ''}`}>
        {!loading && (
           <>
             <Navbar />
             <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/skills" element={<SkillsPage />} />
                  <Route path="/education" element={<EducationPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/certificates" element={<CertificatesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
             </main>
             <Footer />
             
             {showPopup && <HackathonPopup onClose={() => setShowPopup(false)} />}
           </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;
