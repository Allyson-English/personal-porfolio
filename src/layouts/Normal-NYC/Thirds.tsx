import NormalMobile3 from "../../images/normal-nyc/normal-mobile-3.png";
import NormalMobile4 from "../../images/normal-nyc/normal-mobile-4.png";
import NormalMobile5 from "../../images/normal-nyc/normal-mobile-5.png";
import NormalMobileReport from "../../images/semo/semo-mobile-report.png";
import NormalMobileScore from "../../images/semo/semo-mobile-score.png";
import NormalMobileConnect from "../../images/semo/semo-mobile-connect.png";

export const Thirds1 = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto mb-40">
        <div className="w-[33%] flex justify-center mt-64">
          <img src={NormalMobile3} alt="" />
        </div>
        <div className="w-[33%] flex justify-center mt-64">
          <img src={NormalMobile4} alt="" />
        </div>
        <div className="w-[33%] flex justify-center mt-64">
          <img src={NormalMobile5} alt="" />
        </div>
      </div>
    </div>
  );
};

export const Thirds2 = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto mb-40">
        <div className="w-[33%] flex items-end">
          <div className="w-full max-w-2xl">
            <div className="float-left h-6 w-20 flex items-center"></div>
            <p className="text-xl text-white leading-snug">
              Lorem ipsum dolor sit amet consectetur. Neque at elit sodales
              justo tortor porttitor tempor viverra. Ac viverra tortor quis sit
              senectus non eu. Tellus nulla lorem morbi integer lorem. Eu tellus
              quis faucibus at nisl aliquet facilisi.
            </p>
          </div>
        </div>
        <div className="w-[33%] flex justify-center ">
          <img src={NormalMobileReport} alt="" />
        </div>
        <div className="w-[33%] flex justify-center ">
          <img src={NormalMobileScore} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export const Thirds3 = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto mb-40 mt-40">
        <div className="w-[33%] flex items-end">
          <div className="w-full max-w-2xl">
            <div className="float-left h-6 w-20 flex items-center"></div>
            <p className="text-xl text-white leading-snug">
              Lorem ipsum dolor sit amet consectetur. Neque at elit sodales
              justo tortor porttitor tempor viverra. Ac viverra tortor quis sit
              senectus non eu. Tellus nulla lorem morbi integer lorem. Eu tellus
              quis faucibus at nisl aliquet facilisi.
            </p>
          </div>
        </div>
        <div className="w-[33%] flex justify-center "></div>
        <div className="w-[33%] flex justify-center ">
          <img src={NormalMobileConnect} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};
