import NavBar from "../../components/NavBar/NavBar"
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import About from './sections/About/About';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About id ="about-section" />
      <Skills id="skills-section" />
    </>
  );
}

export default Home;