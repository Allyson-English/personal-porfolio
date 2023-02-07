import SemoMobileLogin from "../../images/semo/semo-mobile-login.png";
import SemoMobileReport from "../../images/semo/semo-mobile-report.png";
import SemoMobileScore from "../../images/semo/semo-mobile-score.png";
import SemoMobileConnect from "../../images/semo/semo-mobile-connect.png";

export const Thirds1 = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto">
        <div className="w-[33%] flex justify-center ">
          <img src={SemoMobileLogin} alt="" />
        </div>
        <div className="w-[33%] flex justify-center "> </div>
        <div className="w-[33%] flex">
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
          <img src={SemoMobileReport} alt="" />
        </div>
        <div className="w-[33%] flex justify-center ">
          <img src={SemoMobileScore} alt="" />{" "}
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
          <img src={SemoMobileConnect} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};
