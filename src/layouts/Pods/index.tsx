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

import PodsWireFrame1 from "../../images/pods-system/pods-wireframe-one.png";
import PodsWireFrame1Underlay from "../../images/pods-system/pods-wireframe-one-underlay.png";
import PodsWireFrame2 from "../../images/pods-system/pods-wireframe-two.png";
import PodsWireFrame2Underlay from "../../images/pods-system/pods-wireframe-two-underlay.png";
import PodsOther from "../../images/pods-system/pods-other.png";
import PodsShowcase2 from "../../images/pods-system/pods-second-showcase.png";
import PodsShowcase from "../../images/pods-system/pods-showcase.png";

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
        <FullWidthImage targetId="sc-one" src={PodsShowcase} />
        <PageSpace size="l" />
        <UnderlayImage
          targetId="wf-one"
          overlaySrc={PodsWireFrame1}
          underlaySrc={PodsWireFrame1Underlay}
        />
        <PageSpace size="xl" />
        <UnderlayImage
          targetId="wf-two"
          overlaySrc={PodsWireFrame2}
          underlaySrc={PodsWireFrame2Underlay}
        />
        <PageSpace size="xl" />

        <FullContainerImage targetId="fc-other" src={PodsOther} />
        <PageSpace size="l" />

        <FullWidthImage targetId="sc-two" src={PodsShowcase2} />

        <PageSpace size="m" />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject="DIMO Mobile"
          previousProjectURL="./projects/daniel-ricciardo"
          nextProject="Mint Sunday"
          nextProjectURL="/projects/daniel-ricciardo"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
