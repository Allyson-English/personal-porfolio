import DimoIphone4 from "../../images/dimo/iphone-14-pro4.png";
import DimoIphone5 from "../../images/dimo/iphone-14-pro5.png";

export const ScreenFloat = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="container mx-auto mt-30 pb-64">
        <div className="ml-[30%] w-full max-w-5xl text-justify">
          <div className="float-left h-8 w-40 flex items-center">
            <span className="text-gray-400 text-sm">
              Bluetooth + Blockchain
            </span>
          </div>
          <p className="text-4xl text-white leading-snug">
            For users pairing a hardware device to their vehicle we needed to
            use bluetooth as well as an external wallet. Combining two
            notoriously non-user friendly technologies was a challenge we had to
            overcome to streamline setup.
          </p>
        </div>
      </div>
      <div className="flex container mx-auto">
        <div
          className="w-[60%] absolute z-[10]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src={DimoIphone4} alt="" />
        </div>

        <div
          className="w-[30%] absolute left-[70%] top-[30%] z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src={DimoIphone5} alt="" />
        </div>
      </div>

      <div className="flex container mx-auto pt-[50%] ">
        <div className="container mx-auto mt-0">
          <div className="w-full max-w-2xl">
            <div className="float-left h-6 w-20 flex items-center"></div>
            <p className="text-xl text-white leading-snug">
              Guiding the user step-by-step through the setup and pairing of the
              hardware device presented a fairly significant challenge for our
              product and engineering teams. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
