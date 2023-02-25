export const Outtro = () => {
  return (
    <div className="w-full bg-black h-screen md:h-[800px]">
      <div className="container mx-auto h-[1px] w-full bg-white mt-48"></div>
      <div className="container mx-auto mt-24">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center text-white w-full max-w-6xl text-[96px] leading-none hidden md:block">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
            <div className="h-8 w-8 rounded-full bg-gray-400 inline-block mx-6 mb-4" />
            <span>
              Neque at elit sodales justo tortor porttitor tempor viverra.
            </span>
          </div>

          <div className="text-center text-white w-full max-w-6xl text-[36px] leading-tight px-6 md:hidden">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            {/* <div className="h-8 w-8 rounded-full bg-gray-400 inline-block mx-6 my-4" /> */}
            <p>Neque at elit sodales justo tortor porttitor tempor viverra.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
