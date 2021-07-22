import "./styles/index.css";
import "./styles/custom.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <main className="bg-brand-dark text-brand-mediumLight">
      <Navbar />
      <Hero />
      <Projects />
      {/* <Carousel /> */}
      <Contact />
    </main>
  );
}

export default App;
