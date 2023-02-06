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
      <div className="flex flex-col w-[90%] mx-auto mb-40 items-center">
        <img
          className="block mx-auto z-50"
          src="/images/daniel-ricciardo/dr-keystone.png"
          alt=""
        />
        <p className="text-white font-normal absolute text-[232px] mx-auto mt-16">
          Daniel Ricciardo
        </p>
      </div>
      <div className="h-72 flex container mx-auto">
        <div className="w-80 space-y-4">
          <ListItem label="Client" value="Daniel Ricciardo" />
          <ListItem label="Type" value="Web Concept" />
          <ListItem label="Role" value="Web Designer" />
          <ListItem label="Year" value="2021" />
        </div>
        <div className="flex-1 flex justify-center px-32">
          <div className="w-full">
            <div className="float-left h-4 w-16 flex items-center pt-2">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-xl text-white leading-normal">
              A redesign concept for Formula 1 Racing driver Daniel Ricciardo’s
              website. The concept upgrades Ricciardo’s existing, lackluster
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
