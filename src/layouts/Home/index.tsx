import { useCallback, useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useBeforeUnload, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { locationState } from "../../atoms/scroll";
import { Contact } from "../../components/Contact";

import { CallToAction } from "./CallToAction";
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
        <div className="h-24 w-full bg-transparent sticky top-0 z-20">
          <div className="container mx-auto flex justify-between items-center h-full">
            <div className="text-white text-lg font-medium">Ben</div>
            <div className="text-white"></div>
            <Contact />
          </div>
        </div>

        <Hero />
        <Introduction />
        <Showcase />
        <Projects />
        <Outtro />
        <CallToAction />

        {/* FOOTER */}
        <div className="h-16 w-full bg-transparent fixed bottom-0">
          <div className="container mx-auto flex justify-between items-center h-full text-white text-sm">
            <span className="">PORTFOLIO 2020 - 2022</span>
            <span className="">UPDATED NOVEMBER 20, 2022</span>
          </div>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
};
