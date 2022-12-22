import { CallToAction } from "./CallToAction";
import { Hero } from "./Hero";
import { Introduction } from "./Introduction";
import { Outtro } from "./Outtro";
import { Projects } from "./Projects";
import { Showcase } from "./Showcase";

export const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Showcase />
      <Projects />
      <Outtro />
      <CallToAction />
    </>
  );
};
