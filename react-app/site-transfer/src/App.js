import './styles/index.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';

function App() {
  return (
      <main className="bg-background-dark text-gray-200 body-font">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
