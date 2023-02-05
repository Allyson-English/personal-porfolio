export const Outtro = () => {
  return (
    <div
      id="outtro-section"
      className="w-full bg-black h-[800px]"
      data-scroll-section
    >
      <div className="container mx-auto h-[1px] w-full bg-white mt-48"></div>
      <div className="container mx-auto mt-24">
        <div className="w-full flex flex-col items-center justify-center">
          <div
            className="text-center text-white w-full max-w-6xl leading-none"
            style={{ fontSize: "96px" }}
          >
            <span>Lorem ipsum dolor sit amet consectetur.</span>
            <div className="h-8 w-8 rounded-full bg-gray-400 inline-block mx-6 mb-4" />
            <span>
              Neque at elit sodales justo tortor porttitor tempor viverra.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
