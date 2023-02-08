interface ReusableDescriptionProps {
  main: string;
  firstParagraph: string;
  secondParagraph: string;
}

export const ReusableDescription = ({
  main,
  firstParagraph,
  secondParagraph,
}: ReusableDescriptionProps) => {
  return (
    <div
      className="h-[800px] container mx-auto pt-32 pb-48"
      data-scroll-section
    >
      <div className="w-full max-w-3xl">
        <div className="float-left h-8 w-32 flex items-center">
          <span className="text-gray-400 text-sm">My work</span>
        </div>
        <p className="text-4xl text-white leading-snug">{main}</p>
      </div>

      <div className="w-full h-[1px] bg-white my-16" />

      <div className="w-full pr-96 text-white">
        <div className="grid grid-cols-2 gap-24 w-full">
          <div className="text-2xl">{firstParagraph}</div>
          <div className="text-2xl">{secondParagraph}</div>
        </div>
      </div>
    </div>
  );
};
