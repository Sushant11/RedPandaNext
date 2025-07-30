import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
