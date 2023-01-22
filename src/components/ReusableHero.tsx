import { useMeasure } from "react-use";
import { ListItem } from "./ListItem";
import { Textfit } from "react-textfit";
import { ReactNode } from "react";

interface ReusableHeroProps {
  titleComponent: ReactNode;
  about: string;
  items: { label: string; value: string }[];
  projectUrl: string;
}

export const ReusableHero = ({
  titleComponent,
  about,
  items,
  projectUrl,
}: ReusableHeroProps) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-6rem)] w-full bg-black flex flex-col justify-end"
      data-scroll-section
    >
      <div className="flex-1 flex items-center justify-center relative text-white font-bold">
        {titleComponent}
      </div>
      <div className="h-72 flex container mx-auto">
        <div className="w-80 space-y-4">
          {items.map(({ label, value }, index) => (
            <ListItem key={`${index}`} {...{ label, value }} />
          ))}
        </div>
        <div className="flex-1 flex justify-center px-32">
          <div className="w-full">
            <div className="float-left h-4 w-16 flex items-center pt-2">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-xl text-white leading-normal">{about}</p>
          </div>
        </div>
        <a
          href={projectUrl}
          className="h-48 w-48 border border-white rounded-full flex items-center justify-center"
        >
          <p className="text-white">Live project</p>
        </a>
      </div>
    </div>
  );
};
