import "./App.css";
import Hero from "./components/HeroExperience/Hero";
import Navbar from "./components/Navbar/Navbar";
import Choose from "./components/Choose/Choose";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Process from "./components/Process/Process";
import Contact from "./components/Contact/Contact";

function App() {

  return (
    <>
      <div className="global-background" aria-hidden="true">
        <span className="yellow-ball yellow-ball-1" />
        <span className="yellow-ball yellow-ball-2" />
        <span className="yellow-ball yellow-ball-3" />
        <span className="yellow-ball yellow-ball-4" />
        <span className="yellow-ball yellow-ball-5" />
        <span className="yellow-ball yellow-ball-6" />
        <span className="blurry-layer" />
      </div>

      <div className="app-content">
        {/* <FlyingBee/> */}
        <Navbar/>
        <Hero/>
        <Choose/>
        <Services/>
        <Projects/>
        <Technologies/>
        <Process/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
