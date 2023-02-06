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
      <div className="flex flex-col w-[90%] mx-auto items-center">
        <p className="text-white font-normal text-[232px] mx-auto mt-16">
          Normal NYC
        </p>
      </div>
      <div className="h-72 flex container mx-auto">
        <div className="w-80 space-y-4">
          <ListItem label="Client" value="Normal New York" />
          <ListItem label="Type" value="Brand & Web concept" />
          <ListItem label="Role" value="Designer" />
          <ListItem label="Year" value="2021" />
        </div>
        <div className="flex-1 flex justify-center px-32">
          <div className="w-full">
            <div className="float-left h-4 w-16 flex items-center pt-2">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-xl text-white leading-normal">
              Normal New York is an interior blog and design studio which
              consists mainly of an interview series with homeowners. I worked
              with the site’s founder to begin the rebranding and site redesign
              process of Normal in late 2021.
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
