import { useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MutableRefObject, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { useMeasure, useWindowSize } from "react-use";
import { useTrackerMotionValue } from "../utils/motion";

export const CallToAction = () => {
  const el = useRef<HTMLDivElement>(null);
  const tracker = useTracker(el as MutableRefObject<HTMLElement>, {
    rootMargin: "50%",
  });
  const progress = useTrackerMotionValue(tracker);

  const contentY = useTransform(progress, [0.1, 0.4], ["-20vh", "0vh"]);

  return (
    <div ref={el} className="w-full bg-gray-100 overflow-hidden">
      <motion.div
        className="container mx-auto py-16 -z-10 overflow-clip"
        style={{ y: contentY }}
      >
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-4 text-black text-2xl">
            <a href="#" className="block">
              LinkedIn
            </a>
            <a href="#" className="block">
              Polywork
            </a>
            <a href="#" className="block">
              Mailto
            </a>
          </div>
          <div className="col-span-1 text-center">
            <p className="text-black text-lg mb-8">hi@benkochanowski.com</p>
            <p className="text-gray-400 text-base mb-2">
              Designed by Ben Kochanowski
            </p>
            <p className="text-gray-400 text-base">
              Built by Aaron Marz & Allyson English
            </p>
          </div>
          <div className="col-span-1 text-right">
            <button className="text-black text-2xl">Back to Top</button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black mt-16 mb-8"></div>

        <p className="w-full text-center font-medium text-[240px]">
          Get in touch
        </p>
      </motion.div>
    </div>
  );
};
