import { useTracker } from "@14islands/r3f-scroll-rig";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MutableRefObject, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { useMeasure, useWindowSize } from "react-use";
import { useTrackerMotionValue } from "../../utils/motion";

export const Cards = () => {
  const el = useRef<HTMLDivElement>(null);
  const tracker = useTracker(el as MutableRefObject<HTMLElement>, {
    rootMargin: "50%",
  });
  const progress = useTrackerMotionValue(tracker);
  const { height } = useWindowSize();
  console.log(height, (height - (height - 752) * 2) / 2400);

  const underlayAnimation = useTransform(
    progress,
    [0, (height - (height - 752) * 2) / 2400],
    ["-100vh", "0vh"]
  );
  const position = useTransform(progress, (value) =>
    value < 0.3 && value > 0 ? "fixed" : "static"
  );
  const zIndex = useTransform(progress, (value) =>
    value < 0.3 && value > 0 ? 100 : 9
  );

  return (
    <motion.div
      ref={el}
      className="w-full h-[2400px] bg-black relative"
      style={{
        position,
        zIndex,
      }}
      // style={{ position }}
      // style={{ y: underlayAnimation }}
    >
      <div className="sticky top-0 overflow-x-hidden">
        <div className="h-screen w-full flex flex-col items-center justify-center relative">
          <motion.div
            className="w-full"
            // style={{ opacity: marqueeOpacity }}
          >
            <motion.div className="text-white font-medium text-[304px]">
              <Marquee speed={32} gradient={false}>
                Recent work - Recent work - Recent work - Recent work - Recent
                work - Recent work - Recent work - Recent work - Recent work -
                Recent work - Recent work - Recent work - Recent work - Recent
                work - Recent work - Recent work - Recent work - Recent work -
                Recent work - Recent work - Recent work - Recent work - Recent
                work - Recent work - Recent work - Recent work - Recent work -
                Recent work -
              </Marquee>
            </motion.div>
            <motion.div className="text-white font-medium text-[304px] -mt-40">
              <Marquee speed={24} gradient={false} direction="right">
                Recent work - Recent work - Recent work - Recent work - Recent
                work - Recent work - Recent work - Recent work - Recent work -
                Recent work - Recent work - Recent work - Recent work - Recent
                work - Recent work - Recent work - Recent work - Recent work -
                Recent work - Recent work - Recent work - Recent work - Recent
                work - Recent work - Recent work - Recent work - Recent work -
                Recent work -
              </Marquee>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
