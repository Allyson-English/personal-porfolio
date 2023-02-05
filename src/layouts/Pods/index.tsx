import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BoldStatement } from "../../components/BoldStatement";
import { BottomNavigation } from "../../components/BottomNavigation";
import { CallToAction } from "../../components/CallToAction";
import { Footer } from "../../components/Footer";
import { FullContainerImage } from "../../components/FullContainerImage";
import { FullWidthImage } from "../../components/FullWidthImage";
import { Header } from "../../components/Header";
import { PageSpace } from "../../components/PageSpace";
import { UnderlayImage } from "../../components/UnderlayImage";
import { Description } from "./Description";
import { Hero } from "./Hero";
import { MainImage } from "./MainImage";
import { Showcase } from "./Showcase";

export const Pods = () => {
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
        <Description />
        <PageSpace size="s" />
        <FullWidthImage targetId="sc-one" src="/images/pods-showcase.png" />
        <PageSpace size="l" />
        <UnderlayImage
          targetId="wf-one"
          overlaySrc="/images/pods-wireframe-one.png"
          underlaySrc="/images/pods-wireframe-one-underlay.png"
        />
        <PageSpace size="xl" />
        <UnderlayImage
          targetId="wf-two"
          overlaySrc="/images/pods-wireframe-two.png"
          underlaySrc="/images/pods-wireframe-two-underlay.png"
        />
        <PageSpace size="l" />

        <FullContainerImage targetId="fc-other" src="/images/pods-other.png" />

        <PageSpace size="l" />

        <FullWidthImage
          targetId="sc-two"
          src="/images/pods-second-showcase.png"
        />

        <PageSpace size="m" />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject="DIMO Mobile"
          nextProject="Mint Sunday"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
