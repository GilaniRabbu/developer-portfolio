import React from "react";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import AboutPage from "./pages/about/About";
import SkillPage from "./pages/skill/Skill";
import PortfolioPage from "./pages/portfolio/Portfolio";
// import Testimonial from "./pages/testimonial/Testimonial";
import ContactPage from "./pages/contact/Contact";
import FooterPage from "./pages/footer/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <section id="Homepage">
        <Hero />
      </section>
      <section id="About">
        <AboutPage />
      </section>
      <section id="Skills">
        <SkillPage />
      </section>
      <section id="Portfolio">
        <PortfolioPage />
      </section>
      {/* <section id="Testimonial">
        <Testimonial />
      </section> */}
      <section id="Contact">
        <ContactPage />
      </section>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
};

export default App;
