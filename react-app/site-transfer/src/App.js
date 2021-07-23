import "./styles/index.css";
import "./styles/custom.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-brand-dark text-brand-mediumLight">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/blog" component={Blog} exact={true}></Route>
          <Route path="/blog/:slug" component={Post}></Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

//  <Navbar />
//  <Hero />
//  <Projects />
//  <Contact />
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
