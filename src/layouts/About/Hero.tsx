import { useTracker } from "@14islands/r3f-scroll-rig";
import { MutableRefObject, useEffect, useRef } from "react";
import { useTrackerMotionValue } from "../../utils/motion";
import { motion, useAnimationControls } from "framer-motion";

import heroCircle from "../../images/about/circle-bg.png";
import { delay } from "lodash";

const START_COLOR = "#282828";
const END_COLOR = "#FFFFFF";

export const Hero = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    delay(() => controls.start({ color: END_COLOR }), 1000);
    delay(() => controls.start({ color: START_COLOR }), 1500);
    delay(() => controls.start({ color: END_COLOR }), 2000);
    delay(() => controls.start({ color: START_COLOR }), 2000);
    delay(() => controls.start({ color: END_COLOR }), 2500);
    delay(() => controls.start({ color: START_COLOR }), 3000);
    delay(() => controls.start({ color: END_COLOR }), 3500);
    delay(() => controls.start({ color: START_COLOR }), 4000);
    delay(() => controls.start({ color: END_COLOR }), 5500);
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] w-full bg-black flex flex-col items-center justify-center relative">
      <img src={heroCircle} alt="" className="absolute h-[80%] w-auto" />

      <div className="w-full max-w-3xl mx-auto text-justify z-10">
        <div className="float-left h-8 w-32 flex items-center pt-6">
          <span className="text-gray-400 text-sm">About</span>
        </div>
        <motion.p
          className="text-4xl text-white leading-snug"
          initial={{ color: START_COLOR }}
          animate={controls}
          transition={{
            duration: 0.2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Neque at elit sodales justo
          tortor porttitor tempor viverra. Ac viverra tortor quis sit senectus
          non eu. Tellus nulla lorem morbi integer lorem. Eu tellus quis
          faucibus at nisl aliquet facilisi.
        </motion.p>
      </div>
    </div>
  );
};
