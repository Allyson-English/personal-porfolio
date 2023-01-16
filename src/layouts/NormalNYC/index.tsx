import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { FullPageImage } from "../../components/full_page_img";
import { SideBySideImages } from "../../components/img_side_by_side";
import { NavigateToNeighboringPage } from "../../components/navigation_prev_or_next";
import { TitleAndKeystoneImage } from "../../components/title_and_keystone";
import { CallToAction } from "../Home/CallToAction";
import { Outtro } from "../Home/Outtro";

export const NormalNYC = () => {
  const containerRef = useRef(null);

  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //   }}
    //   watch={[]}
    //   containerRef={containerRef}
    // >
    <main className="bg-black" data-scroll-container ref={containerRef}>
      <div className="h-24 w-full bg-transparent sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-white text-lg font-medium">Ben</div>
          <div className="text-white"></div>
          <button className="text-white border border-white px-8 py-1 rounded-full">
            Contact
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto items-center">
        <p className="text-white font-normal text-[232px] mx-auto mt-16">
          Normal NYC
        </p>
      </div>

      <div className="container mx-auto flex justify-between border-b-[1px] pb-20">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-gray-400">Client</td>
              <td className="text-white text-right pl-20">Normal New York</td>
            </tr>
            <tr>
              <td className="text-gray-400">Type</td>
              <td className="text-white text-right">Brand & Web concept</td>
            </tr>
            <tr>
              <td className="text-gray-400">Role</td>
              <td className="text-white text-right">Designer</td>
            </tr>
            <tr>
              <td className="text-gray-400">Year</td>
              <td className="text-white text-right">2021</td>
            </tr>
          </tbody>
        </table>

        <div className="max-w-xl">
          <div className="float-left h-6 w-20 flex items-center">
            <span className="text-gray-400 text-sm">About</span>
          </div>
          <p className="text-xl text-white leading-snug">
            Normal New York is an interior blog and design studio which consists
            mainly of an interview series with homeowners. I worked with the
            site’s founder to begin the rebranding and site redesign process of
            Normal in late 2021.
          </p>
        </div>

        <div className="">
          <div className="h-40 w-40 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black">
            <div className="text-xs">Live Project</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/normal-nyc/normal-cover.png" alt="" />
      </div>
      <div className="container mx-auto pb-20">
        <div className="container mx-auto mt-48 border-b-[1px] pb-20">
          <div className="w-full max-w-5xl text-justify">
            <div className="float-left h-8 w-40 flex items-center">
              <span className="text-gray-400 text-sm">My work</span>
            </div>
            <p className="text-4xl text-white leading-snug">
              Normal’s site was launched to complement its 90k+ follower
              Instagram account and host more in-depth interview content.
            </p>
          </div>
        </div>
        <div className="flex space-x-32 max-w-6xl mt-10 pb-20">
          <p className="text-xl text-white leading-snug">
            Normal was seeking an “art gallery” style of visual direction in
            which the site’s branding and colors wouldn’t clash with or dominate
            the photo or interview content.
          </p>

          <p className="text-xl text-white leading-snug">
            We decided to use a very neutral palette to create a calm and
            sophisticated look for the blog along with a basic text-based
            wordmark. Our goal was to remain calm, inviting, and sophisticated
            while remaining recognizable and authentic.
          </p>
        </div>
      </div>

      <div className="flex container mx-auto mb-64">
        {" "}
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-frame-1.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-frame-2.png" alt="" />
        </div>
      </div>

      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[50%] flex justify-center mb-64">
          {" "}
          <img src="/images/normal-nyc/normal-mobile-1.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center mt-64">
          {" "}
          <img src="/images/normal-nyc/normal-mobile-2.png" alt="" />
        </div>
      </div>

      <div className="container flex w-[100%]">
        {" "}
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-img-1.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-img-2.png" alt="" />
        </div>
      </div>

      <div className="flex container mx-auto mb-40">
        <div className="w-[33%] flex justify-center mt-64">
          <img src="/images/normal-nyc/normal-mobile-3.png" alt="" />
        </div>
        <div className="w-[33%] flex justify-center mt-64">
          <img src="/images/normal-nyc/normal-mobile-4.png" alt="" />
        </div>
        <div className="w-[33%] flex justify-center mt-64">
          <img src="/images/normal-nyc/normal-mobile-5.png" alt="" />
        </div>
      </div>

      <div className="container flex w-[100%]">
        {" "}
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-img-3.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-img-4.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col w-[60%] mx-auto mt-20 mb-40">
        <img src="/images/normal-nyc/normal-studio-display.png" alt="" />
      </div>

      <div className="flex flex-col w-[90%] mx-auto mt-20 mb-40">
        <img src="/images/normal-nyc/normal-scene.png" alt="" />
      </div>

      <div className="container flex w-[100%]">
        {" "}
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-img-5.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/normal-nyc/normal-img-6.png" alt="" />
        </div>
      </div>

      <FullPageImage
        path="/images/normal-nyc/normal-img-7.png"
        margin="mt-20 mb-40"
      />

      <NavigateToNeighboringPage
        previousProject=""
        nextProject="PODS Design System"
      />
      {/* FOOTER */}
      <div className="h-16 w-full bg-transparent fixed bottom-0">
        <div className="container mx-auto flex justify-between items-center h-full text-white text-sm">
          <span className="">PORTFOLIO 2020 - 2022</span>
          <span className="">UPDATED NOVEMBER 20, 2022</span>
        </div>
      </div>
    </main>
    // {/* </LocomotiveScrollProvider> */}
  );
};
