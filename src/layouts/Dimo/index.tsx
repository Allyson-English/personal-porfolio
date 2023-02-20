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
import { Description } from "./Description";
import { Hero } from "./Hero";
import { MainImage } from "./MainImage";

import PhonesColor from "../../images/dimo/phones-color.png";
import DimoScene from "../../images/dimo/dimo-scene.png";
import DimoFrame512839 from "../../images/dimo/dimo-frame-512839.png";
import FleetMockup3 from "../../images/dimo/fleet-mockup3.png";
import FleetMockup2 from "../../images/dimo/fleet-mockup.png";
import { PhoneStates } from "./PhoneStates";
import { ScreenFloat } from "./ScreenFloat";
import {
  LeftFloatPhoneWithDescription,
  RightFloatPhoneWithDescription,
} from "./PhoneFloatWithDescription";
import { VehicleIntelligence } from "./VehicleIntelligence";
import { PhoneUnderlay } from "./PhoneStatusUnderlay";
import { VehicleAsNFTs } from "./VehicleAsNFTs";

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
        {/* <VehicleIntelligence /> */}
        <Header />
        <Hero />
        <MainImage />
        <Description />
        <FullWidthImage targetId="phones-color" src={PhonesColor} />
        <FullWidthImage targetId="dimo-scene" src={DimoScene} />
        <PhoneUnderlay />
        <FullContainerImage
          targetId="dimo-frame-512839"
          src={DimoFrame512839}
        />
        <VehicleIntelligence />
        <FullWidthImage targetId="dimo-fleet-mockup2" src={FleetMockup2} />
        <VehicleAsNFTs />

        <ScreenFloat />
        <FullWidthImage src={FleetMockup3} targetId="fleet-mockup" />

        <BoldStatement text="Lorem ipsum get the file on Figma Community. Lorem ipsum number of copies made." />
        <BottomNavigation
          previousProject=""
          previousProjectURL=""
          nextProject="Daniel Ricciardo"
          nextProjectURL="/projects/daniel-ricciardo"
        />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
