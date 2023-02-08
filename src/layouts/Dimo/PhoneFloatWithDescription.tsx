import LeftFloatPhone from "../../images/dimo/iphone-14-pro2.png";
import RightFloatPhone from "../../images/dimo/iphone-14-pro3.png";

export const LeftFloatPhoneWithDescription = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto mb-40">
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src={LeftFloatPhone} alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex container mx-auto mt-48 pb-20">
            <div className="w-full max-w-2xl">
              <p className="text-xl border-b-[1px] pb-5 text-white">
                Intelligence
              </p>
              <p className="text-xl text-white pt-5 leading-snug">
                A suite of data-focused graphs, insights, and tips provides
                users with a look into their cars’ performance and trends over
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RightFloatPhoneWithDescription = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto mb-64">
        {" "}
        <div className="w-[50%]">
          <div className="flex container mx-auto mt-48 pb-20">
            <div className="w-full max-w-2xl">
              <p className="text-xl border-b-[1px] pb-5 text-white">
                Vehicles as NFTs
              </p>
              <p className="text-xl text-white pt-5 leading-snug">
                Users can change the appearance of the NFT of their vehicle with
                a customizer in the app. The NFT serves as the user’s passport
                into the DIMO app and ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          {" "}
          <img src={RightFloatPhone} alt="" />
        </div>
      </div>
    </div>
  );
};
