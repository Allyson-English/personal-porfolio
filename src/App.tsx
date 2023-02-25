import { GlobalCanvas } from "@14islands/r3f-scroll-rig";
import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  createHashRouter,
} from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { locationState } from "./atoms/scroll";
import { About } from "./layouts/About";
import { Daniel } from "./layouts/Daniel";
import { Dimo } from "./layouts/Dimo";
import { Home } from "./layouts/Home";
import { NormalNYC } from "./layouts/Normal-NYC";
import { Pods } from "./layouts/Pods";
import { Semo } from "./layouts/Semo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects/dimo",
    element: <Dimo />,
  },
  {
    path: "/projects/pods-system",
    element: <Pods />,
  },
  {
    path: "/projects/normal-nyc",
    element: <NormalNYC />,
  },
  {
    path: "/projects/semo",
    element: <Semo />,
  },
  {
    path: "/projects/daniel-ricciardo",
    element: <Daniel />,
  },
]);

// function Main() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return (
    <RecoilRoot>
      <GlobalCanvas />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
