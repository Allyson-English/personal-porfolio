import NormalMobile1 from "../../images/normal-nyc/normal-mobile-1.png";
import NormalMobile2 from "../../images/normal-nyc/normal-mobile-2.png";

export const FloatingPhoneScreens = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="relative container mx-auto">
        <div
          className="w-[492px] absolute left-24 z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src={NormalMobile1} alt="" className="w-full h-auto" />
        </div>

        <div
          className="w-[492px] absolute right-24 top-96 z-[10]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src={NormalMobile2} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
