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

        <ReusableHero
          title="Daniel Ricciardo"
          about="A redesign concept for Formula 1 Racing driver Daniel Ricciardo's website. The concept upgrades Ricciardo's existing, lackluster website."
          items={[
            {
              label: "Client",
              value: "Daniel Ricciardo",
            },
            {
              label: "Type",
              value: "Web Concept",
            },
            {
              label: "Role",
              value: "Web Designer",
            },
            {
              label: "Year",
              value: "2021",
            },
          ]}
          projectUrl="https://example.com"
        />
        <ReusableMainImage imageUrl="/images/daniel-main.png" />
        <ReusableDescription
          main="I conducted a redesign of Daniel's site in late 2021 to bring it more in line with his streetwear-inspired personal brand."
          firstParagraph="Daniel's existing site does little to highlight his achievements as a multiple-time race winner and one of the more popular drivers on the Formula 1 grid. The current site does little to draw attention to his large merch store, highly active social and video channels, partnerships, and past accomplishments."
          secondParagraph="I set out to redesign the site to highlight the aspects of his personal and professional brand that are left our of or underused in the existing design. I wanted to give visitors easy access to merch, music, content, and upcoming and past race events."
        />

        <div className="w-full h-[1600px] bg-black" data-scroll-section>
          <div className="relative container mx-auto">
            <div
              className="w-[492px] absolute left-24 z-[10]"
              data-scroll
              data-scroll-speed="3"
            >
              <img
                src="/images/dr-mobile-1.png"
                alt=""
                className="w-full h-auto"
              />
            </div>

            <div
              className="w-[492px] absolute right-24 top-96 z-[10]"
              data-scroll
              data-scroll-speed="9"
            >
              <img
                src="/images/dr-mobile-2.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <BottomNavigation label="Mint Sunday" />

        <CallToAction />

        {/* FOOTER */}
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
