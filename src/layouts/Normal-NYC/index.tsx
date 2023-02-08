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

import normalFrame512826 from "../../images/normal-nyc/normal-frame-512826.png";
import normalFrame512856 from "../../images/normal-nyc/normal-frame-512856.png";
import normalFrame512859 from "../../images/normal-nyc/normal-frame-512859.png";
import normalStudioDisplay from "../../images/normal-nyc/normal-studio-display.png";
import normalScene from "../../images/normal-nyc/normal-premade-scene.png";
import normalFrame512858 from "../../images/normal-nyc/normal-frame-512858.png";
import normalImg7 from "../../images/normal-nyc/normal-img-7.png";

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
          src={normalFrame512826}
        />
        <PageSpace size="s" />
        <FloatingPhoneScreens />
        <FullWidthImage
          targetId="normal-frame-512856"
          src={normalFrame512856}
        />

        <Thirds1 />

        <FullWidthImage
          targetId="normal-frame-512859"
          src={normalFrame512859}
        />

        <FullWidthImage
          targetId="normal-studio-display"
          src={normalStudioDisplay}
        />

        <FullWidthImage targetId="normal-scene" src={normalScene} />

        <FullWidthImage
          targetId="normal-frame-512858"
          src={normalFrame512858}
        />

        <FullWidthImage targetId="normal-img-7" src={normalImg7} />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject="Semo"
          previousProjectURL="/projects/semo"
          nextProject="DIMO Mobile"
          nextProjectURL="/projects/dimo"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
