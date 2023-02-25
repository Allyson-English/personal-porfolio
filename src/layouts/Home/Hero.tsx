import { useTracker } from "@14islands/r3f-scroll-rig";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { MutableRefObject, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTrackerMotionValue } from "../../utils/motion";

import circlePng from "../../images/hero-circle.png";

export const Hero = () => {
  const el = useRef<HTMLDivElement>(null);
  const tracker = useTracker(el as MutableRefObject<HTMLElement>, {
    rootMargin: "50%",
  });
  const progress = useTrackerMotionValue(tracker);
  const benOpacity = useTransform(progress, [0.5, 1], [1, 0], { clamp: true });
  const circleY = useTransform(progress, [0.5, 1], ["0vh", "-30vh"], {
    clamp: true,
  });

  return (
    <div
      ref={el}
      className="h-screen md:h-[calc(100vh-4rem)] w-full bg-black flex flex-col justify-end relative"
    >
      <motion.img
        src={circlePng}
        alt=""
        className="absolute top-40 md:top-0 left-0 h-auto w-[60%] md:w-[32%]"
        style={{
          y: circleY,
        }}
      />
      <div className="flex flex-col md:flex-row md:items-end container mx-auto mb-32 px-6 md:px-0">
        <div className="md:w-[50%] mb-8 md:mb-0">
          <motion.div
            className="space-y-2 md:text-right w-[274px] md:w-[460px]"
            style={{ opacity: benOpacity }}
          >
            <p className="text-white text-4xl md:text-6xl flex justify-between">
              Ben Kochanowski
            </p>
            <div className="flex items-center">
              <div className="h-[1px] flex-1 bg-gray-500 mr-4 relative">
                <div className="absolute left-0 -top-1 bg-gray-200 h-2 w-2 rounded-full"></div>
              </div>
              <p className="text-white text-4xl md:text-6xl">is a digital</p>
            </div>
            <p className="text-white text-4xl md:text-6xl flex justify-between">
              Product Designer.
            </p>
          </motion.div>
        </div>

        <div className="w-64">
          <p className="text-white text-base">
            Design Lead @ DIMO.
            <br />
            Lorem ipsum dolor sit amet.
            <br />
            Something else goes here.
            <br />
            Another line of placeholder text.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-end container mx-auto pb-4">
        <div className="flex flex-col items-center justify-center w-48">
          <Marquee className="text-white uppercase" gradient={false}>
            Scroll to explore – Scroll to explore –
          </Marquee>
          <div className="h-24 w-[1px] bg-white mt-4 relative">
            <motion.div
              className="h-4 w-[1px] bg-black -top-4 absolute"
              animate={{ y: 112 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                type: "tween",
              }}
            />

            <motion.div
              className="h-4 w-[1px] bg-black -top-4 absolute"
              animate={{ y: 112 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1,
                type: "tween",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
