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
import { Thirds1, Thirds2, Thirds3 } from "./Thirds";

export const Semo = () => {
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
        <FullContainerImage
          targetId="semo-frame-512826"
          src="/images/semo/semo-frame-512826.png"
        />
        <PageSpace size="s" />
        <FullWidthImage
          targetId="semo-image"
          src="/images/semo/semo-image.png"
        />

        <Thirds1 />
        <Thirds2 />

        <FullContainerImage
          targetId="semo-mac"
          src="/images/semo/semo-mac.png"
        />
        <FullContainerImage
          targetId="semo-group-512793"
          src="/images/semo/semo-group-512793.png"
        />
        <FullContainerImage
          targetId="semo-frame-512838"
          src="/images/semo/frame-512838.png"
        />

        <Thirds3 />

        <FullContainerImage
          targetId="semo-spread"
          src="/images/semo/semo-spread.png"
        />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject="DIMO Mobile"
          previousProjectURL="./#/projects/daniel-ricciardo"
          nextProject="Mint Sunday"
          nextProjectURL="../#/projects/daniel-ricciardo"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
