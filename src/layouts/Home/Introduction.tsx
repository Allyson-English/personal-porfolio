import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent, ScrollElement } from "locomotive-scroll";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export const Introduction = () => {
  const { scroll } = useLocomotiveScroll();
  const introValue = useMotionValue(0);
  const introOpacity = useTransform(introValue, [0, 1], [1, 0], {
    clamp: false,
  });

  useEffect(() => {
    if (!scroll) return;

    // scroll.on("call", (value: string, way: string, obj: ScrollElement) => {
    //   console.log("here", value, way, obj);
    // });

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["first"] === "object") {
        let progress = args.currentElements["first"].progress;
        introValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <div
      id="introduction-section"
      className="w-full h-[1600px] bg-black relative"
      data-scroll-section
    >
      <motion.div
        className="h-screen w-screen flex flex-col items-center justify-center"
        data-scroll
        data-scroll-speed="5"
        data-scroll-sticky
        data-scroll-target="#introduction-section"
        data-scroll-id="first"
        style={{ opacity: introOpacity }}
      >
        <div className="w-full max-w-3xl mx-auto text-justify">
          <div className="float-left h-8 w-32 flex items-center">
            <span className="text-gray-400 text-sm">About</span>
          </div>
          <p className="text-4xl text-white leading-snug">
            Lorem ipsum dolor sit amet consectetur. Neque at elit sodales justo
            tortor porttitor tempor viverra. Ac viverra tortor quis sit senectus
            non eu. Tellus nulla lorem morbi integer lorem. Eu tellus quis
            faucibus at nisl aliquet facilisi.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto mt-16">
          <div className="h-20 w-20 flex items-center justify-center border borer-white rounded-full">
            <div className="text-xs text-white">More</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
