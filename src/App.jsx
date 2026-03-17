import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="noise-overlay"></div>
        <Cursor />
        <div className="bg-white dark:bg-primary min-h-screen text-gray-900 dark:text-white relative transition-all duration-500 ease-in-out">
          <Navbar />
          <main>
            <Home />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
