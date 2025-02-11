import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Skill } from "../components/Skills";
import { Experience } from "../components/Experience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
    </div>
  );
}
