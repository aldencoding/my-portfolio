//import About from "./Components/Fragments/About";
import Skills from "./Components/Fragments/Skills";
import Navbar from "./Components/Fragments/Header";
import Home from "./Components/Fragments/Home";
import About from "./Components/Fragments/About";
import Projects from "./Components/Fragments/Project";
import Contact from "./Components/Fragments/Form";
import Footer from "./Components/Fragments/Footer";
import { useRef } from "react";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container max-w-full bg-[#ececece3]">
      <div ref={homeRef}>
        <Navbar
          scrollToHome={() => scrollToRef(homeRef)}
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToProjects={() => scrollToRef(projectsRef)}
          scrollToSkills={() => scrollToRef(skillsRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
        <Home scrollToContact={() => scrollToRef(contactRef)} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      {/* <div ref={skillsRef}>
        <Skills />
      </div> */}
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* <Footer scrollToHome={() => scrollToRef(homeRef)} /> */}
    </div>
  );
};

export default App;
