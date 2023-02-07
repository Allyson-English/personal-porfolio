import drMobile1 from "../../images/dr-mobile-1.png";
import drMobile2 from "../../images/dr-mobile-2.png";

export const FloatingPhoneScreens = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="relative container mx-auto">
        <div
          className="w-[492px] absolute left-24 z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src={drMobile1} alt="" className="w-full h-auto" />
        </div>

        <div
          className="w-[492px] absolute right-24 top-96 z-[10]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src={drMobile2} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
