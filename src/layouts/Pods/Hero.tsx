import { useMeasure } from "react-use";
import { ListItem } from "../../components/ListItem";

export const Hero = () => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-6rem)] w-full bg-black flex flex-col justify-end"
      data-scroll-section
    >
      <div className="flex-1 flex items-center justify-center relative">
        <h1 className="text-white" style={{ fontSize: Math.round(width / 7) }}>
          Pods System
        </h1>
      </div>
      <div className="h-72 flex container mx-auto">
        <div className="w-80 space-y-4">
          <ListItem label="Client" value="DIMO" />
          <ListItem label="Type" value="Mobile App, Brand" />
          <ListItem label="Role" value="Lead Designer" />
          <ListItem label="Team" value="Dora Tang (Designer), Abi Paine (3D)" />
          <ListItem label="Year" value="2021, 2022, 2023" />
        </div>
        <div className="flex-1 flex justify-center px-32">
          <div className="w-full">
            <div className="float-left h-4 w-16 flex items-center pt-2">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-xl text-white leading-normal">
              DIMO is an open-source web3 project which enables users to collect
              and monetize the data from their vehicles in exchange for a
              governance token. The core of the project is its mobile app.
            </p>
          </div>
        </div>
        <div className="h-48 w-48 border border-white rounded-full flex items-center justify-center">
          <p className="text-white">Live project</p>
        </div>
      </div>
    </div>
  );
};
