import { useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent, ScrollElement } from "locomotive-scroll";
import { MutableRefObject, useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTrackerMotionValue } from "../../utils/motion";

export const Introduction = () => {
  const el = useRef<HTMLDivElement>(null);
  const tracker = useTracker(el as MutableRefObject<HTMLElement>, {
    rootMargin: "50%",
  });
  const progress = useTrackerMotionValue(tracker);

  const introOpacity = useTransform(progress, [0.3, 0.9], [1, 0], {
    clamp: false,
  });

  return (
    <div
      ref={el}
      className="w-full h-[2400px] bg-black relative z-[10] shadow-2xl"
    >
      <div className="sticky top-0 overflow-x-hidden">
        <motion.div
          className="h-screen w-full flex flex-col items-center justify-center"
          style={{ opacity: introOpacity }}
        >
          <div className="w-full max-w-3xl mx-auto text-justify">
            <div className="float-left h-8 w-32 flex items-center">
              <span className="text-gray-400 text-sm">About</span>
            </div>
            <p className="text-4xl text-white leading-snug">
              Lorem ipsum dolor sit amet consectetur. Neque at elit sodales
              justo tortor porttitor tempor viverra. Ac viverra tortor quis sit
              senectus non eu. Tellus nulla lorem morbi integer lorem. Eu tellus
              quis faucibus at nisl aliquet facilisi.
            </p>
          </div>

          <div className="w-full max-w-3xl mx-auto mt-16">
            <div className="h-20 w-20 flex items-center justify-center border borer-white rounded-full">
              <div className="text-xs text-white">More</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
