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
import { FloatingPhoneScreens } from "./iPhoneScreens";
import { MainImage } from "./MainImage";
import { Showcase } from "./Showcase";
import { Thirds1, Thirds2, Thirds3 } from "./Thirds";

export const NormalNYC = () => {
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
          targetId="normal-frame-512826"
          src="/images/normal-nyc/normal-frame-512826.png"
        />
        <PageSpace size="s" />
        <FloatingPhoneScreens />
        <FullWidthImage
          targetId="normal-frame-512856"
          src="/images/normal-nyc/normal-frame-512856.png"
        />

        <Thirds1 />

        <FullWidthImage
          targetId="normal-frame-512859"
          src="/images/normal-nyc/normal-frame-512859.png"
        />

        <FullWidthImage
          targetId="normal-studio-display"
          src="/images/normal-nyc/normal-studio-display.png"
        />

        <FullWidthImage
          targetId="normal-scene"
          src="/images/normal-nyc/normal-premade-scene.png"
        />

        <FullWidthImage
          targetId="normal-frame-512858"
          src="/images/normal-nyc/normal-frame-512858.png"
        />

        <FullWidthImage
          targetId="normal-img-7"
          src="/images/normal-nyc/normal-img-7.png"
        />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject="DIMO Mobile"
          previousProjectURL="./#/projects/daniel-ricciardo"
          nextProject="Mint Sunday"
          nextProjectURL="./#/projects/daniel-ricciardo"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
