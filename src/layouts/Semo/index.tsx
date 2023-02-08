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

import SemoFrame512826 from "../../images/semo/semo-frame-512826.png";
import SemoImage from "../../images/semo/semo-image.png";
import SemoMac from "../../images/semo/semo-mac.png";
import SemoGroup512793 from "../../images/semo/semo-group-512793.png";
import SemoFrame512838 from "../../images/semo/frame-512838.png";
import SemoSpread from "../../images/semo/semo-spread.png";

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
          src={SemoFrame512826}
        />
        <PageSpace size="s" />
        <FullWidthImage targetId="semo-image" src={SemoImage} />

        <Thirds1 />
        <Thirds2 />

        <FullContainerImage targetId="semo-mac" src={SemoMac} />
        <FullContainerImage
          targetId="semo-group-512793"
          src={SemoGroup512793}
        />
        <FullContainerImage
          targetId="semo-frame-512838"
          src={SemoFrame512838}
        />

        <Thirds3 />

        <FullContainerImage targetId="semo-spread" src={SemoSpread} />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject="Pods System"
          previousProjectURL="/projects/pods-system"
          nextProject="Normal NYC"
          nextProjectURL="/projects/normal-nyc"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
