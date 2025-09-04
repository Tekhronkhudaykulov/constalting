import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Stats from "./Stats";
import Process from "./Process";
import Team from "./Team";
import Citys from "./Citys";
import Partners from "./Partners";
import Footer from "./Footer";

export default function Main() {
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

      <Footer />
    </div>
  );
}
