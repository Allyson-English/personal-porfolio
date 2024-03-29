import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CallToAction } from "../../components/CallToAction";

import { Hero } from "./Hero";
import { Outtro } from "./Outtro";
import { Work } from "./Work";

export const Home = () => {
  return (
    <SmoothScrollbar>
      {(bind: any) => (
        <main className="bg-black" {...bind}>
          {/* HEADER */}
          <Header />

          <Hero />
          <Work />
          <Outtro />
          {/* <CallToAction /> */}

          {/* <Hero />
          <Work />
          <Outtro />
          <CallToAction /> */}

          {/* FOOTER */}
          {/* <Footer /> */}
          <Footer />
        </main>
      )}
    </SmoothScrollbar>
  );
};
