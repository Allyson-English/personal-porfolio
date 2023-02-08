import SemoMobileLogin from "../../images/semo/semo-mobile-login.png";
import SemoMobileReport from "../../images/semo/semo-mobile-report.png";
import SemoMobileScore from "../../images/semo/semo-mobile-score.png";
import PhoneStateImage1 from "../../images/dimo/iphone-14-pro.png";

export const PhoneStates = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto mb-40">
        {" "}
        <div className="w-[50%]">
          <div className="flex container mx-auto mt-48 pb-20">
            <div className="w-full max-w-2xl">
              <p className="text-xl border-b-[1px] pb-5 text-white">
                Core home
              </p>
              <p className="text-xl text-white pt-5 leading-snug">
                The dominant component of the home’s UI changes to reflect the
                vehicle’s percentage of fuel or charge remaining. This wave and
                gradient is also carried through the tab bar icon.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src={PhoneStateImage1} alt="" />
        </div>
      </div>
    </div>
  );
};
