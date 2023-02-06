import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { CallToAction } from "../../components/CallToAction";
import { Hero } from "./Hero";
import { Introduction } from "./Introduction";
import { Outtro } from "./Outtro";
import { Projects } from "./Projects";
import { Showcase } from "./Showcase";

export const Home = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        reloadOnContextChange: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main className="bg-black" data-scroll-container ref={containerRef}>
        {/* HEADER */}
        <Header />

        <Hero />
        <Introduction />
        <Showcase />
        <Projects />
        <Outtro />
        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
