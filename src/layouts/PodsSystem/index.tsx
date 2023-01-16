import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { FullPageImage } from "../../components/full_page_img";
import { SideBySideImages } from "../../components/img_side_by_side";
import { NavigateToNeighboringPage } from "../../components/navigation_prev_or_next";
import { CallToAction } from "../Home/CallToAction";
import { Outtro } from "../Home/Outtro";

export const PodsSystem = () => {
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
        Pods System
      </p>

      <div className="container mx-auto flex justify-between border-b-[1px] pb-20">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-gray-400">Client</td>
              <td className="text-white text-right">DIMO</td>
            </tr>
            <tr>
              <td className="text-gray-400">Type</td>
              <td className="text-white text-right">Design System</td>
            </tr>
            <tr>
              <td className="text-gray-400">Role</td>
              <td className="text-white text-right">Designer</td>
            </tr>
            <tr>
              <td className="text-gray-400">Team</td>
              <td className="text-white text-right pl-10">
                Dora Tang, Daniel Farrell
              </td>
            </tr>
            <tr>
              <td className="text-gray-400">Year</td>
              <td className="text-white text-right">2022</td>
            </tr>
          </tbody>
        </table>

        <div className="max-w-xl">
          <div className="float-left h-6 w-20 flex items-center">
            <span className="text-gray-400 text-sm">About</span>
          </div>
          <p className="text-xl text-white leading-snug">
            Pods is the design system behind the DIMO mobile app, website, and
            brand, which we named for the weekly design pod we created to build
            it. The design and build of the system took place over about six
            weeks in parallel to other brand and product design efforts.
          </p>
        </div>

        <div className="">
          <div className="h-40 w-40 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black">
            <div className="text-xs">Live Project</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/pods-system/cover-template.png" alt="" />
      </div>

      <div className="container mx-auto pb-20">
        <div className="container mx-auto mt-48 border-b-[1px] pb-20">
          <div className="w-full max-w-5xl text-justify">
            <div className="float-left h-8 w-40 flex items-center">
              <span className="text-gray-400 text-sm">My work</span>
            </div>
            <p className="text-4xl text-white leading-snug">
              While DIMO was in its earliest stages we built a number of
              proofs-of-concept without a formalized design system. With our
              debut flagship mobile app in its architecting phase, our design
              team came together to create its visual language.
            </p>
          </div>
        </div>
        <div className="flex space-x-32 max-w-6xl mt-10 pb-20">
          <p className="text-xl text-white leading-snug">
            Dora, Daniel and I set up a period of weekly syncs to build the
            design system in parallel with the scoping and architecting of our
            upcoming mobile app. We began by compiling a series of reference
            systems to pull inspiration from including Base, Encore, DLS, and
            more. Eventually we settled on Base as a core reference point for
            its robust components and east-to-navigate file setup.
          </p>

          <p className="text-xl text-white leading-snug">
            We compiled examples and references for our existing components as
            well as ones we projected a use for in the app. From there we
            divided and conquered throughout the week, then did weekly peer
            reviews of one another’s components to ensure they were up to
            standards and using the same naming and layout conventions.
          </p>
        </div>
      </div>

      <FullPageImage
        path="/images/pods-system/fleet-mockup.png"
        margin=" mb-40"
      />

      <SideBySideImages
        path1={"/images/pods-system/frame-512824.png"}
        path2={"/images/pods-system/frame-512825.png"}
      />

      <FullPageImage
        path="/images/pods-system/frame-512838.png"
        margin=" mb-40"
      />

      <SideBySideImages
        path1={"/images/dimo/frame-512824.png"}
        path2={"/images/dimo/frame-512825.png"}
      />

      <FullPageImage
        path="/images/pods-system/frame-6606.png"
        margin="mt-40 mb-40"
      />

      <div className="w-full flex flex-col items-center justify-center pb-40">
        <div
          className="text-center text-white w-full max-w-6xl leading-none"
          style={{ fontSize: "89px" }}
        >
          <span>
            Lorem ipsum get the file on Figma Community. Lorem ipsum number of
            copies made.{" "}
          </span>
        </div>
      </div>

      <NavigateToNeighboringPage
        previousProject="DIMO Mobile"
        nextProject="Mint Sunday"
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
