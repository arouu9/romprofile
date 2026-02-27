import "./App.css";
import Header from "./components/contents/Header/Header";
import About from "./components/contents/About/About";
import Experience from "./components/contents/Experience/Experience";
import TechStack from "./components/contents/TechStack/TechStack";
import Certification from "./components/contents/Certifications/Certification";
import Projects from "./components/contents/Projects/Projects";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* GRID SECTION */}
      <div className="grid">
        {/* ABOUT */}
        <About />

        {/* EXPERIENCE */}
        <Experience />

        {/* CERTIFICATION */}
        <Certification/>

        {/* TECH STACKS */}
        <TechStack />

        {/* MY PROJECTS */}
        <Projects/>

      </div>
    </div>
  );
}

export default App;
