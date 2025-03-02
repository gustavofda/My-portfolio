import NavBar from "../../components/NavBar/NavBar"
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import About from './sections/About/About';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills id="skills-section" />
      <About id ="about-section" />
    </>
  );
}

export default Home;