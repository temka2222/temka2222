import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Skill } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Work } from "../components/work";
import { Footer } from "../components/footer";
import Styles from "../styles/Display.module.css";

export default function Home() {
  return (
    <div className={Styles.display}>
      <div className={Styles.setdisplay}>
        <Navbar />
        <Hero />
        <Skill />
        <Experience />
        <Work />
        <Footer />
      </div>
    </div>
  );
}
