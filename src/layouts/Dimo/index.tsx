import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Description } from "./Description";
import { FirstShowcase } from "./FirstShowcase";
import { Hero } from "./Hero";
import { MainImage } from "./MainImage";

export const Dimo = () => {
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
        <MainImage />
        {/* <Description /> */}
        {/* <FirstShowcase /> */}

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
