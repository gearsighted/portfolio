import "./styles/index.css";
import "./styles/custom.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="bg-brand-dark text-brand-mediumLight">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
