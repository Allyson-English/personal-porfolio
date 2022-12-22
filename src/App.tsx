import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Home } from "./Home";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
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

        <Home />

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
}

export default App;
