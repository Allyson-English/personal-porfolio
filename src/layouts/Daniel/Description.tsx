export const Description = () => {
  return (
    <div
      className="h-[800px] container mx-auto pt-32 pb-48"
      data-scroll-section
    >
      <div className="w-full max-w-3xl">
        <div className="float-left h-8 w-32 flex items-center">
          <span className="text-gray-400 text-sm">My work</span>
        </div>
        <p className="text-4xl text-white leading-snug">
          While DIMO was in its earliest stages we built a number of
          proofs-of-concept without a formalized design system. With our debut
          flagship mobile app in its architecting phase, our design team came
          together to create its visual language.
        </p>
      </div>

      <div className="w-full h-[1px] bg-white my-16" />

      <div className="w-full pr-96 text-white">
        <div className="grid grid-cols-2 gap-24 w-full">
          <div className="p">
            Dora, Daniel and I set up a period of weekly syncs to build the
            design system in parallel with the scoping and architecting of our
            upcoming mobile app. We began by compiling a series of reference
            systems to pull inspiration from including Base, Encore, DLS, and
            more. Eventually we settled on Base as a core reference point for
            its robust components and east-to-navigate file setup.
          </div>
          <div className="p">
            We compiled examples and references for our existing components as
            well as ones we projected a use for in the app. From there we
            divided and conquered throughout the week, then did weekly peer
            reviews of one another’s components to ensure they were up to
            standards and using the same naming and layout conventions.
          </div>
        </div>
      </div>
    </div>
  );
};
