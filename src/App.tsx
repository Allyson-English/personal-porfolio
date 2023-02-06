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
import { Daniel } from "./layouts/Daniel";
import { Dimo } from "./layouts/Dimo";
import { Home } from "./layouts/Home";
import { Pods } from "./layouts/Pods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "personal-porfolio/projects/dimo",
    element: <Dimo />,
  },
  {
    path: "personal-porfolio/projects/pods-system",
    element: <Pods />,
  },
  {
    path: "personal-porfolio/projects/dreamfield",
    element: <Dimo />,
  },
  {
    path: "personal-porfolio/projects/daniel-ricciardo",
    element: <Daniel />,
  },
]);

// function Main() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
