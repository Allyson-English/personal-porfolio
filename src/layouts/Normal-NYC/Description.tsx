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
          Normal’s site was launched to complement its 90k+ follower Instagram
          account and host more in-depth interview content.
        </p>
      </div>

      <div className="w-full h-[1px] bg-white my-16" />

      <div className="w-full pr-96 text-white">
        <div className="grid grid-cols-2 gap-24 w-full">
          <div className="p">
            Normal was seeking an “art gallery” style of visual direction in
            which the site’s branding and colors wouldn’t clash with or dominate
            the photo or interview content.
          </div>
          <div className="p">
            We decided to use a very neutral palette to create a calm and
            sophisticated look for the blog along with a basic text-based
            wordmark. Our goal was to remain calm, inviting, and sophisticated
            while remaining recognizable and authentic.
          </div>
        </div>
      </div>
    </div>
  );
};
