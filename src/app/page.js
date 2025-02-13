import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Skill } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Work } from "../components/work";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}
