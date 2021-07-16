import './styles/index.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
      <main className="bg-brand-dark text-brand-mediumLight">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
