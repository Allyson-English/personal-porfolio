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
