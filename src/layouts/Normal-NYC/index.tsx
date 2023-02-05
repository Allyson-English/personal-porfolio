import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BoldStatement } from "../../components/BoldStatement";
import { BottomNavigation } from "../../components/BottomNavigation";
import { CallToAction } from "../../components/CallToAction";
// import { Description } from "../../components/Description";
import { Footer } from "../../components/Footer";
import { FullContainerImage } from "../../components/FullContainerImage";
import { FullWidthImage } from "../../components/FullWidthImage";
// import { FullWidthImage3 } from "../../components/FullWidthImage3";
import { Header } from "../../components/Header";
// import { MainImage } from "../../components/MainImage";
import { PageSpace } from "../../components/PageSpace";
import { ReusableHero } from "../../components/ReusableHero";
// import { SideBySidePhone } from "../../components/SideBySide";
import { UnderlayImage } from "../../components/UnderlayImage";

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

        <ReusableHero
          titleComponent={<h1 className="">Normal NYC</h1>}
          about="Normal New York is an interior blog and design studio which 
          consists mainly of an interview series with homeowners. I worked with 
          the site’s founder to begin the rebranding and site redesign process of Normal in late 2021. "
          items={[
            {
              label: "Client",
              value: "Normal NYC",
            },
            {
              label: "Type",
              value: "Brand & Web concept",
            },
            {
              label: "Role",
              value: "Designer",
            },
            {
              label: "Year",
              value: "2021",
            },
          ]}
          projectUrl="https://example.com"
          // keystoneImage=""
        />

        {/* <MainImage
          sectionBreak="true"
          path="/images/normal-nyc/normal-cover.png"
        />
        <Description
          mywork="Normal’s site was launched to complement its 90k+ follower Instagram account and host more in-depth interview content."
          paragraph1="Normal was seeking an “art gallery” style of visual direction in which the site’s branding and colors wouldn’t clash with or dominate the photo or interview content. "
          paragraph2="We decided to use a very neutral palette to create a calm and sophisticated look for the blog along with a basic text-based wordmark. Our goal was to remain calm, inviting, and sophisticated while remaining recognizable and authentic."
        /> */}

        <PageSpace size="s" />

        <FullContainerImage
          targetId="normal-frame-512826"
          src="/images/normal-nyc/normal-frame-512826.png"
        />

        {/* <SideBySidePhone
          pathOne={"/images/normal-nyc/normal-mobile-1.png"}
          pathTwo={"/images/normal-nyc/normal-mobile-2.png"}
        /> */}

        {/* <FullWidthImage
          targetId="normal-frame-512856"
          src="/images/normal-nyc/normal-frame-512856.png"
        /> */}

        {/* <FullWidthImage3
          targetId="test2123er"
          src="/images/normal-nyc/normal-3.png"
        /> */}

        {/* // here 
        <FullWidthImage
          targetId="normal-3"
          src="/images/normal-nyc/normal-3.png"
        />

        <FullWidthImage
          targetId="normal-frame-512859"
          src="/images/normal-nyc/normal-frame-512859.png"
        />

        <FullContainerImage
          targetId="normal-studio-display"
          src="/images/normal-nyc/normal-studio-display.png"
        />

        <FullWidthImage
          targetId="normal-premade-scene"
          src="/images/normal-nyc/normal-premade-scene.png"
        />

        <FullWidthImage
          targetId="normal-frame-512858"
          src="/images/normal-nyc/normal-frame-512858.png"
        />

        <FullWidthImage
          targetId="normal-img-7"
          src="/images/normal-nyc/normal-img-7.png"
        /> */}

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
