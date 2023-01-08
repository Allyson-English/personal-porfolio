import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export const Dimo = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
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
          DIMO Mobile
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
            <div className="h-40 w-40 flex items-center justify-center border border-white rounded-full">
              <div className="text-xs text-white">Live Project</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="h-16 w-full bg-transparent fixed bottom-0">
          <div className="container mx-auto flex justify-between items-center h-full text-white text-sm">
            <span className="">PORTFOLIO 2020 - 2022</span>
            <span className="">UPDATED NOVEMBER 20, 2022</span>
          </div>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
};
