import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Stats from "./Stats";
import Process from "./Process";

import Citys from "./Citys";
import Partners from "./Partners";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "./Team";
export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animatsiya davomiyligi (ms)
      once: true, // faqat 1 marta ishlasin
    });
  }, []);
  return (
    <div className="overflow-x-hidden w-full">
      <Hero />
      <Services />
      <About />

      <Stats />

      <Process />

      <Team />
      <Citys />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
}
