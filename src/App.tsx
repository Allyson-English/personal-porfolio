import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { locationState } from "./atoms/scroll";
import { DanielRicciardo } from "./layouts/DanielRicciardo";
import { Dimo } from "./layouts/Dimo";
import { Home } from "./layouts/Home";
import { PodsSystem } from "./layouts/PodsSystem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/dimo",
    element: <Dimo />,
  },
  {
    path: "/projects/pods-system",
    element: <PodsSystem />,
  },
  {
    path: "/projects/dreamfield",
    element: <Dimo />,
  },
  {
    path: "/projects/daniel-ricciardo",
    element: <DanielRicciardo />,
  },
]);

function Main() {
  const containerRef = useRef(null);
  const locationPath = useRecoilValue(locationState);

  return <RouterProvider router={router} />;

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        resetNativeScroll: false,

        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          // locationPath,
        ]
      }
      // location={locationPath}
      // onLocationChange={(scroll: LocomotiveScroll) => {
      //   console.log(locationPath);

      //   scroll.start();
      //   scroll.scrollTo(0, { duration: 0, disableLerp: true });
      // }}
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

        <RouterProvider router={router} />

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

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;
