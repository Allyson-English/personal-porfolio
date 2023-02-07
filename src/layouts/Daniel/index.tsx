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
import { ReusableDescription } from "../../components/ReusableDescription";
import { ReusableHero } from "../../components/ReusableHero";
import { ReusableMainImage } from "../../components/ReusableMainImage";
import { UnderlayImage } from "../../components/UnderlayImage";
import { Hero } from "./Hero";
import { FloatingPhoneScreens } from "./iPhoneScreens";
import { ScreenFloat } from "./ScreenFloat";
import { ScreenFloat2, ScreenFloat3 } from "./ScreenFloat2";

export const Daniel = () => {
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
        <ReusableMainImage imageUrl="/images/daniel-main.png" />
        <ReusableDescription
          main="I conducted a redesign of Daniel's site in late 2021 to bring it more in line with his streetwear-inspired personal brand."
          firstParagraph="Daniel's existing site does little to highlight his achievements as a multiple-time race winner and one of the more popular drivers on the Formula 1 grid. The current site does little to draw attention to his large merch store, highly active social and video channels, partnerships, and past accomplishments."
          secondParagraph="I set out to redesign the site to highlight the aspects of his personal and professional brand that are left our of or underused in the existing design. I wanted to give visitors easy access to merch, music, content, and upcoming and past race events."
        />
        <FloatingPhoneScreens />

        <FullContainerImage
          targetId="dr-spread"
          src="/images/daniel-ricciardo/dr-spread.png"
        />

        <FullWidthImage
          targetId="dr-art-dept"
          src="../images/daniel-ricciardo/dr-art-dept.png"
        />

        <FullContainerImage
          targetId="dr-spread-3"
          src="/images/daniel-ricciardo/dr-spread-3.png"
        />

        <FullWidthImage
          targetId="dr-frame-512826"
          src="/images/daniel-ricciardo/dr-frame-512826.png"
        />

        <ScreenFloat />

        <FullContainerImage
          targetId="dr-music"
          src="/images/daniel-ricciardo/dr-music.png"
        />

        <FullWidthImage
          targetId="dr-story-so-far"
          src="/images/daniel-ricciardo/dr-story-so-far.png"
        />

        <ScreenFloat2 />
        <ScreenFloat3 />

        <FullWidthImage
          targetId="dr-final"
          src="/images/daniel-ricciardo/dr-final.png"
        />

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
