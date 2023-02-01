import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { FullPageImage } from "../../components/full_page_img";
import { SideBySideImages } from "../../components/img_side_by_side";
import { NavigateToNeighboringPage } from "../../components/navigation_prev_or_next";
import { CallToAction } from "../Home/CallToAction";
import { Outtro } from "../Home/Outtro";

export const Semo = () => {
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
      <div className="flex flex-col w-[90%] mx-auto mb-40 items-center">
        <img
          className="block mx-auto z-50"
          src="/images/semo/semo-keystone.png"
          alt=""
        />
        <p className="text-white font-normal absolute text-[232px] mx-auto mt-16">
          Semo
        </p>
      </div>

      <div className="container mx-auto flex justify-between border-b-[1px] pb-20">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-gray-400">Client</td>
              <td className="text-white text-right">Semo</td>
            </tr>
            <tr>
              <td className="text-gray-400">Type</td>
              <td className="text-white text-right pl-20">
                Web, Mobile, Brand
              </td>
            </tr>
            <tr>
              <td className="text-gray-400">Role</td>
              <td className="text-white text-right">Lead Designer</td>
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
            A light rebrand, mobile product, and website refresh for Semo, an
            experimental project in the insurance space backed by San Antonio
            Spurs CEO R.C. Buford.
          </p>
        </div>

        <div className="">
          <div className="h-40 w-40 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black">
            <div className="text-xs">Live Project</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/semo/semo-homepage.png" alt="" />
      </div>

      <div className="container mx-auto pb-20">
        <div className="container mx-auto mt-48 border-b-[1px] pb-20">
          <div className="w-full max-w-5xl text-justify">
            <div className="float-left h-8 w-40 flex items-center">
              <span className="text-gray-400 text-sm">My work</span>
            </div>
            <p className="text-4xl text-white leading-snug">
              The Semo team and I set out to refresh the company’s brand to
              convey a more modern and friendly appearance.
            </p>
          </div>
        </div>
        <div className="flex space-x-32 max-w-6xl mt-10 pb-20">
          <p className="text-xl text-white leading-snug">
            Semo’s core competency was its <b>Semo Score</b>, a proprietary way
            of quantifying a user’s insurance risk profile similar to a credit
            score. Users connected their coverage and provided information to
            the app in order to get a more accurate score. The company then used
            the score to enable to user to shop for better rates or enter into a
            deductible sharing pool.
          </p>

          <p className="text-xl text-white leading-snug">
            The team’s brand goals were to convey “your friend in insurance” as
            its messaging and feel. Semo was using orange as its primary color -
            we changed to a blue and changed the logo from an all-caps wordmark
            to tone down the brand. Semo wanted to keep Mr. Semo as its mascot,
            which we left relatively unchanged.
          </p>
        </div>
      </div>

      <SideBySideImages
        path1={"/images/semo/frame-512824.png"}
        path2={"/images/semo/frame-512825.png"}
        parentClass="mb-40 -space-x-24"
      />

      <FullPageImage path="/images/semo/semo-image.png" margin=" mb-40" />

      <div className="flex container mx-auto">
        <div className="w-[33%] flex justify-center ">
          <img src="/images/semo/semo-mobile-login.png" alt="" />
        </div>
        <div className="w-[33%] flex justify-center "> </div>
        <div className="w-[33%] flex">
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

      <div className="flex container mx-auto mb-40">
        <div className="w-[33%] flex items-end">
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
        <div className="w-[33%] flex justify-center ">
          <img src="/images/semo/semo-mobile-report.png" alt="" />
        </div>
        <div className="w-[33%] flex justify-center ">
          <img src="/images/semo/semo-mobile-score.png" alt="" />{" "}
        </div>
      </div>

      <div className="flex flex-col w-[60%] mx-auto mt-20">
        <img src="/images/semo/semo-mac.png" alt="" />
      </div>

      <SideBySideImages
        path1={"/images/semo/frame-512840.png"}
        path2={"/images/semo/frame-512841.png"}
        parentClass="mt-40 mb-40 -space-x-24"
      />

      <div className="flex flex-col w-[90%] mx-auto mt-20">
        <img src="/images/semo/frame-512838.png" alt="" />
      </div>

      <div className="flex container mx-auto mb-40 mt-40">
        <div className="w-[33%] flex items-end">
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
        <div className="w-[33%] flex justify-center "></div>
        <div className="w-[33%] flex justify-center ">
          <img src="/images/semo/semo-mobile-connect.png" alt="" />{" "}
        </div>
      </div>

      <div className="flex flex-col w-[90%] mx-auto mt-20 mb-40">
        <img src="/images/semo/semo-spread.png" alt="" />
      </div>

      <FullPageImage path="/images/semo/semo-image-2.png" margin=" mb-40" />

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
