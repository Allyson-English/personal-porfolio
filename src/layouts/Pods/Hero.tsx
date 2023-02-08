import { useMeasure } from "react-use";
import { ListItem } from "../../components/ListItem";
import PodsKeystone from "../../images/pods-system/pods-keystone.png";

export const Hero = () => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-6rem)] w-full bg-black flex flex-col justify-end"
      data-scroll-section
    >
      <div className="flex flex-col w-[90%] mx-auto mb-40 items-center">
        <img className="block mx-auto z-50" src={PodsKeystone} alt="" />
        <p className="text-white font-normal absolute text-[232px] mx-auto mt-16">
          Pods System
        </p>
      </div>
      <div className="h-72 flex container mx-auto">
        <div className="w-80 space-y-4">
          <ListItem label="Client" value="DIMO" />
          <ListItem label="Type" value="Design System" />
          <ListItem label="Role" value="Lead Designer" />
          <ListItem label="Team" value="Dora Tang, Daniel Farrell" />
          <ListItem label="Year" value="2022" />
        </div>
        <div className="flex-1 flex justify-center px-32">
          <div className="w-full">
            <div className="float-left h-4 w-16 flex items-center pt-2">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-xl text-white leading-normal">
              Pods is the design system behind the DIMO mobile app, website, and
              brand, which we named for the weekly design pod we created to
              build it. The design and build of the system took place over about
              six weeks in parallel to other brand and product design efforts.
            </p>
          </div>
        </div>
        <div className="h-48 w-48 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black">
          <p className="">Live project</p>
        </div>
      </div>
    </div>
  );
};
