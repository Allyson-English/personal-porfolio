import drSpread5A from "../../images/daniel-ricciardo/dr-spread-5a.png";
import drSpread5B from "../../images/daniel-ricciardo/dr-spread-5b.png";

export const ScreenFloat = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="relative container mx-auto">
        <div
          className="w-[60%] absolute left-24 z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src={drSpread5A} alt="" />
        </div>

        <div
          className="w-[30%] absolute right-24 top-96 z-[10]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src={drSpread5B} alt="" />
        </div>
      </div>
    </div>
  );
};
