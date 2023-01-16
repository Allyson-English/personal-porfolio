import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { FullPageImage } from "../../components/full_page_img";
import { NavigateToNeighboringPage } from "../../components/navigation_prev_or_next";
import { TitleAndKeystoneImage } from "../../components/title_and_keystone";
import { CallToAction } from "../Home/CallToAction";
import { Outtro } from "../Home/Outtro";

export const Dimo = () => {
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
          src="/images/dimo/dimo-keystone.png"
          alt=""
        />
        <p className="text-white font-normal absolute text-[232px] mx-auto mt-16">
          DIMO Mobile
        </p>
      </div>

      <div className="container mx-auto flex justify-between border-b-[1px] pb-20">
        <table className="text-xl">
          <tbody>
            <tr>
              <td className="text-gray-400">Client</td>
              <td className="text-white text-right">DIMO</td>
            </tr>
            <tr>
              <td className="text-gray-400">Type</td>
              <td className="text-white text-right">Mobile App, Brand</td>
            </tr>
            <tr>
              <td className="text-gray-400">Role</td>
              <td className="text-white text-right">Lead Designer</td>
            </tr>
            <tr>
              <td className="text-gray-400">Team</td>
              <td className="text-white text-right pl-10">
                Dora Tang (Design), Abi Paine (3D)
              </td>
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
            DIMO is an open-source web3 project which enables users to collect
            and monetize the data from their vehicles in exchange for a
            governance token. The core of the project is its mobile app.
          </p>
        </div>

        <div className="">
          <div className="h-40 w-40 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black">
            <div className="text-xs">Live Project</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] mx-auto mt-20">
        <img src="/images/dimo/phone-and-autopi-sploosh-and-box.png" alt="" />
      </div>
      <div className="container mx-auto pb-20">
        <div className="container mx-auto mt-48 border-b-[1px] pb-20">
          <div className="w-full max-w-5xl text-justify">
            <div className="float-left h-8 w-40 flex items-center">
              <span className="text-gray-400 text-sm">My work</span>
            </div>
            <p className="text-4xl text-white leading-snug">
              The DIMO app is a robust product designed to give users access to
              their vehicle’s data, mint it as an NFT, earn and view rewards,
              and interact with marketplace products on DIMO. It was crucial for
              us to design an app which provided real-world value to users,
              something that went far beyond just checking their token balance.
            </p>
          </div>
        </div>
        <div className="flex space-x-32 max-w-6xl mt-10 pb-20">
          <p className="text-xl text-white leading-snug">
            I joined DIMO as its founding designer in late 2021. Since then I’ve
            been leading and managing design teams and contractors across
            branding and product efforts, mainly the flagship mobile app.
          </p>

          <p className="text-xl text-white leading-snug">
            Users connect their vehicle to the app by logging into their
            existing OEM app or through pairing the vehicle with a hardware
            device sold by DIMO. After connecting users are able to see data
            about their vehicle’s performance, valuation, and more in real time.
          </p>
        </div>
      </div>
      <FullPageImage path="/images/dimo/phones-color.png" margin="" />
      <FullPageImage path="/images/dimo/dimo-scene.png" margin="mb-40" />

      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[50%]">
          <div className="flex container mx-auto mt-48 pb-20">
            <div className="w-full max-w-2xl">
              <p className="text-xl border-b-[1px] pb-5 text-white">
                Core home
              </p>
              <p className="text-xl text-white pt-5 leading-snug">
                The dominant component of the home’s UI changes to reflect the
                vehicle’s percentage of fuel or charge remaining. This wave and
                gradient is also carried through the tab bar icon.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/dimo/iphone-14-pro.png" alt="" />
        </div>
      </div>
      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/dimo/frame-512824.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/dimo/frame-512825.png" alt="" />
        </div>
      </div>
      <div className="flex container mx-auto mb-40">
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/dimo/iphone-14-pro2.png" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex container mx-auto mt-48 pb-20">
            <div className="w-full max-w-2xl">
              <p className="text-xl border-b-[1px] pb-5 text-white">
                Intelligence
              </p>
              <p className="text-xl text-white pt-5 leading-snug">
                A suite of data-focused graphs, insights, and tips provides
                users with a look into their cars’ performance and trends over
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FullPageImage path="/images/dimo/fleet-mockup.png" margin="mb-40" />
      <div className="flex container mx-auto mb-64">
        {" "}
        <div className="w-[50%]">
          <div className="flex container mx-auto mt-48 pb-20">
            <div className="w-full max-w-2xl">
              <p className="text-xl border-b-[1px] pb-5 text-white">
                Vehicles as NFTs
              </p>
              <p className="text-xl text-white pt-5 leading-snug">
                Users can change the appearance of the NFT of their vehicle with
                a customizer in the app. The NFT serves as the user’s passport
                into the DIMO app and ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src="/images/dimo/iphone-14-pro3.png" alt="" />
        </div>
      </div>
      <div className="container mx-auto mt-30 pb-64">
        <div className="ml-[30%] w-full max-w-5xl text-justify">
          <div className="float-left h-8 w-40 flex items-center">
            <span className="text-gray-400 text-sm">
              Bluetooth + Blockchain
            </span>
          </div>
          <p className="text-4xl text-white leading-snug">
            For users pairing a hardware device to their vehicle we needed to
            use bluetooth as well as an external wallet. Combining two
            notoriously non-user friendly technologies was a challenge we had to
            overcome to streamline setup.
          </p>
        </div>
      </div>
      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[50%] flex justify-center mb-64">
          {" "}
          <img src="/images/dimo/iphone-14-pro4.png" alt="" />
        </div>
        <div className="w-[50%] flex justify-center mt-64">
          {" "}
          <img src="/images/dimo/iphone-14-pro5.png" alt="" />
        </div>
      </div>
      <div className="flex container mx-auto pb-40">
        <div className="container mx-auto mt-10 pb-20">
          <div className="w-full max-w-2xl">
            <div className="float-left h-6 w-20 flex items-center"></div>
            <p className="text-xl text-white leading-snug">
              Guiding the user step-by-step through the setup and pairing of the
              hardware device presented a fairly significant challenge for our
              product and engineering teams. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <FullPageImage path="/images/dimo/fleet-mockup3.png" margin="mb-40" />
      <div className="w-full flex flex-col items-center justify-center pb-40">
        <div
          className="text-center text-white w-full max-w-6xl leading-none"
          style={{ fontSize: "89px" }}
        >
          <span>
            DIMO’s token launched in late 2022. Lorem ipsum dolor sit amet
            something closing.{" "}
          </span>
        </div>
      </div>
      <NavigateToNeighboringPage previousProject="" nextProject="PODS System" />
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
