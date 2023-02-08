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
          The Semo team and I set out to refresh the company’s brand to convey a
          more modern and friendly appearance.
        </p>
      </div>

      <div className="w-full h-[1px] bg-white my-16" />

      <div className="w-full pr-96 text-white">
        <div className="grid grid-cols-2 gap-24 w-full">
          <div className="text-xl">
            Semo’s core competency was its <b>Semo Score</b>, a proprietary way
            of quantifying a user’s insurance risk profile similar to a credit
            score. Users connected their coverage and provided information to
            the app in order to get a more accurate score. The company then used
            the score to enable to user to shop for better rates or enter into a
            deductible sharing pool.
          </div>
          <div className="text-xl">
            The team’s brand goals were to convey “your friend in insurance” as
            its messaging and feel. Semo was using orange as its primary color -
            we changed to a blue and changed the logo from an all-caps wordmark
            to tone down the brand. Semo wanted to keep Mr. Semo as its mascot,
            which we left relatively unchanged.
          </div>
        </div>
      </div>
    </div>
  );
};
