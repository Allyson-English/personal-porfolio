export const MainImage = () => {
  return (
    <div
      id="main-image-section"
      className="w-full h-[960px] bg-black relative"
      data-scroll-section
    >
      <div className="container mx-auto">
        <div className="w-full bg-white h-[1px] mb-24"></div>

        <img
          src="/images/normal-nyc/normal-cover.png"
          className="w-full h-auto"
          alt=""
        />
      </div>
    </div>
  );
};
