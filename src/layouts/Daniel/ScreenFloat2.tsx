import { PageSpace } from "../../components/PageSpace";

export const ScreenFloat2 = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto">
        <div
          className="w-[60%] absolute z-[10] top-[30%]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src="/images/daniel-ricciardo/dr-spread-6a.png" alt="" />
        </div>

        <div
          className="w-[60%] absolute left-[40%] top-[25%] z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src="/images/daniel-ricciardo/dr-spread-6b.png" alt="" />
        </div>
      </div>

      <div className="flex container mx-auto pl-[40%] pt-[10%] ">
        <div className="container mx-auto mt-0">
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

export const ScreenFloat3 = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="flex container mx-auto">
        <div
          className="w-[60%] absolute z-[10]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src="/images/daniel-ricciardo/dr-spread-7a.png" alt="" />
        </div>

        <div
          className="w-[30%] absolute left-[70%] top-[30%] z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src="/images/daniel-ricciardo/dr-spread-7b.png" alt="" />
        </div>
      </div>

      <div className="flex container mx-auto pt-[50%] ">
        <div className="container mx-auto mt-0">
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
