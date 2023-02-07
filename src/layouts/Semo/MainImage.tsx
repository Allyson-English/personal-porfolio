import SemoHomepage from "../../images/semo/semo-homepage.png";

export const MainImage = () => {
  return (
    <div
      id="main-image-section"
      className="w-full h-[960px] bg-black relative"
      data-scroll-section
    >
      <div className="container mx-auto">
        <div className="w-full bg-white h-[1px] mb-24"></div>

        <img src={SemoHomepage} className="w-full h-auto" alt="" />
      </div>
    </div>
  );
};
