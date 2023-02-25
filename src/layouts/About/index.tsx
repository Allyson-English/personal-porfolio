import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CallToAction } from "../../components/CallToAction";
import { Hero } from "./Hero";
import { History } from "./History";

export const About = () => {
  return (
    <SmoothScrollbar>
      {(bind: any) => (
        <main className="bg-black" {...bind}>
          {/* HEADER */}
          <Header />

          <Hero />
          <History />

          <CallToAction />

          {/* FOOTER */}
          <Footer />
        </main>
      )}
    </SmoothScrollbar>
  );
};
