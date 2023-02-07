import { useMeasure } from "react-use";
import { ListItem } from "../../components/ListItem";
import semoKeystone from "../../images/semo/semo-keystone.png";

export const Hero = () => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-6rem)] w-full bg-black flex flex-col justify-end"
      data-scroll-section
    >
      <div className="flex flex-col w-[90%] mx-auto mb-40 items-center">
        <img className="block mx-auto z-50" src={semoKeystone} alt="" />
        <p className="text-white font-normal absolute text-[232px] mx-auto mt-16">
          Semo
        </p>
      </div>
      <div className="h-72 flex container mx-auto">
        <div className="w-80 space-y-4">
          <ListItem label="Client" value="Semo" />
          <ListItem label="Type" value="Web, Mobile, Brand" />
          <ListItem label="Role" value="Lead Designer" />
          <ListItem label="Year" value="2021" />
        </div>
        <div className="flex-1 flex justify-center px-32">
          <div className="w-full">
            <div className="float-left h-4 w-16 flex items-center pt-2">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-xl text-white leading-normal w-[70%]">
              A light rebrand, mobile product, and website refresh for Semo, an
              experimental project in the insurance space backed by San Antonio
              Spurs CEO R.C. Buford.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
