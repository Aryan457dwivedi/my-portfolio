import Navbar from "./components/Navbar";
import Hero from "./components/Hero";       // Home section
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />          {/* Home */}
      <About />
      <Education />     {/* Education section */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
