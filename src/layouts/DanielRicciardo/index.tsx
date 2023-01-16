import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { FullPageImage } from "../../components/full_page_img";
import { SideBySideImages } from "../../components/img_side_by_side";
import { NavigateToNeighboringPage } from "../../components/navigation_prev_or_next";
import { CallToAction } from "../Home/CallToAction";
import { Outtro } from "../Home/Outtro";

export const DanielRicciardo = () => {
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
      {/* HEADER */}
      <div className="h-24 w-full bg-transparent sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-white text-lg font-medium">Ben</div>
          <div className="text-white"></div>
          <button className="text-white border border-white px-8 py-1 rounded-full">
            Contact
          </button>
        </div>
      </div>
      <p className="text-white font-normal text-[232px] text-center">
        Daniel Ricciardo
      </p>
      <div className="container mx-auto flex justify-between border-b-[1px] pb-20">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-gray-400">Client</td>
              <td className="text-white text-right pl-20">Daniel Ricciardo</td>
            </tr>
            <tr>
              <td className="text-gray-400">Type</td>
              <td className="text-white text-right">Web Concept</td>
            </tr>
            <tr>
              <td className="text-gray-400">Role</td>
              <td className="text-white text-right">Web Designer</td>
            </tr>
            <tr>
              <td className="text-gray-400">Year</td>
              <td className="text-white text-right">2021-2022</td>
            </tr>
          </tbody>
        </table>

        <div className="max-w-xl">
          <div className="float-left h-6 w-20 flex items-center">
            <span className="text-gray-400 text-sm">About</span>
          </div>
          <p className="text-xl text-white leading-snug">
            A redesign concept for Formula 1 Racing driver Daniel Ricciardo’s
            website. The concept upgrades Ricciardo’s existing, lackluster
            website.
          </p>
        </div>

        <div className="">
          <div className="h-40 w-40 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black">
            <div className="text-xs">Live Project</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/daniel-ricciardo/dr-cover.png" alt="" />
      </div>
      <div className="container mx-auto pb-20">
        <div className="container mx-auto mt-48 border-b-[1px] pb-20">
          <div className="w-full max-w-5xl text-justify">
            <div className="float-left h-8 w-40 flex items-center">
              <span className="text-gray-400 text-sm">My work</span>
            </div>
            <p className="text-4xl text-white leading-snug">
              I conducted a redesign of Daniel’s site in late 2021 to bring it
              more in line with his streetwear-inspired personal brand.
            </p>
          </div>
        </div>
        <div className="flex space-x-32 max-w-6xl mt-10 pb-20">
          <p className="text-xl text-white leading-snug">
            Daniel’s existing site does little to highlight his achievements as
            a multiple-time race winner and one of the more popular drivers on
            the Formula 1 grid. The current site does little to draw attention
            to his large merch store, highly active social and video channels,
            partnerships, and past accomplishments.
          </p>

          <p className="text-xl text-white leading-snug">
            I set out to redesign the site to highlight the aspects of his
            personal and professional brand that are left our of or underused in
            the existing design. I wanted to give visitors easy access to merch,
            music, content, and upcoming and past race events.
          </p>
        </div>
      </div>

      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[50%] flex justify-center mb-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-mobile-1.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center mt-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-mobile-2.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/daniel-ricciardo/dr-spread.png" alt="" />
      </div>

      <FullPageImage
        path="/images/daniel-ricciardo/dr-art-dept.png"
        margin="mt-20"
      />

      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/daniel-ricciardo/dr-spread-3.png" alt="" />
      </div>

      <SideBySideImages
        path1="/images/daniel-ricciardo/frame-512824.png"
        path2="/images/daniel-ricciardo/frame-512825.png"
        parentClass="mt-40 mb-40"
      />

      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[66%] flex justify-center mb-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-spread-5a.png" alt="" />
        </div>
        <div className="w-[33%] flex justify-center mt-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-spread-5b.png" alt="" />
        </div>
      </div>

      <FullPageImage
        path="/images/daniel-ricciardo/dr-music.png"
        margin="mb-40"
      />

      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/daniel-ricciardo/dr-story-so-far.png" alt="" />
      </div>

      <div className="flex container mx-auto mb-40 mt-40">
        {" "}
        <div className="w-[33%] flex justify-center mt-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-spread-6a.png" alt="" />
        </div>
        <div className="w-[66%] flex justify-center mb-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-spread-6b.png" alt="" />
        </div>
      </div>

      <div className="flex container mx-auto ">
        <div className="w-[50%] flex justify-center mt-64"></div>
        <div className="w-[50%] flex justify-center mb-64">
          <div className="flex container mx-auto">
            <div className="container mx-auto mt-10 ">
              <div className="w-full max-w-2xl">
                <div className="float-left h-6 w-20 flex items-center"></div>
                <p className="text-xl text-white leading-snug">
                  Lorem ipsum dolor sit amet consectetur. Neque at elit sodales
                  justo tortor porttitor tempor viverra. Ac viverra tortor quis
                  sit senectus non eu. Tellus nulla lorem morbi integer lorem.
                  Eu tellus quis faucibus at nisl aliquet facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto">
        {" "}
        <div className="w-[66%] flex justify-center mb-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-spread-7a.png" alt="" />
        </div>
        <div className="w-[33%] flex justify-center mt-64">
          {" "}
          <img src="/images/daniel-ricciardo/dr-spread-7b.png" alt="" />
        </div>
      </div>

      <div className="flex container mx-auto pb-40">
        <div className="container mx-auto mt-10 pb-20">
          <div className="w-full max-w-2xl">
            <div className="float-left h-6 w-20 flex items-center"></div>
            <p className="text-xl text-white leading-snug">
              Lorem ipsum dolor sit amet consectetur. Neque at elit sodales
              justo tortor porttitor tempor viverra. Ac viverra tortor quis sit
              senectus non eu. Tellus nulla lorem morbi integer lorem. Eu tellus
              quis faucibus at nisl aliquet facilisi.
            </p>
          </div>
        </div>
      </div>

      <FullPageImage
        path="/images/daniel-ricciardo/dr-final.png"
        margin="mb-40"
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
