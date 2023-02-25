import { useTracker } from "@14islands/r3f-scroll-rig";
import {
  easeInOut,
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { MutableRefObject, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { DynaimicColoredDescription } from "../../utils/DynamicColoredDescription";
import { useTrackerMotionValue } from "../../utils/motion";

import dimoCard from "../../images/cards/dimo-card.png";
import msCard from "../../images/cards/ms-card.png";
import podsCard from "../../images/cards/pods-card.png";
import drCard from "../../images/cards/dr-card.png";

const BgVariants = {
  default: {
    backgroundColor: "#0D0D0D",
  },
  dimo: {
    backgroundColor: "#0B2120",
  },
  ms: {
    backgroundColor: "#031A33",
  },
  pods: {
    backgroundColor: "#1C1C1C",
  },
  dr: {
    backgroundColor: "#181632",
  },
};

const DIMO_START = 0.45;
const MS_START = 0.55;
const PODS_START = 0.65;
const DR_START = 0.75;

const CARD_LENGTH = 0.06;

export const Work = () => {
  const el = useRef<HTMLDivElement>(null);
  const tracker = useTracker(el as MutableRefObject<HTMLElement>, {
    rootMargin: "50%",
  });
  const progress = useTrackerMotionValue(tracker);

  const introY = useTransform(progress, [0.3, 0.4], ["0vh", "-100vh"], {
    ease: easeInOut,
  });

  const marqueeOpacity = useTransform(progress, [0.35, 0.4], [0, 1]);

  const bgColor = useTransform(
    progress,
    [
      DIMO_START,
      DIMO_START + CARD_LENGTH,
      MS_START + CARD_LENGTH,
      PODS_START + CARD_LENGTH,
      DR_START + CARD_LENGTH,
      DR_START + CARD_LENGTH * 2,
    ],
    [0, 1, 2, 3, 4, 5],
    { clamp: true }
  );
  const [activeBgVariant, setBgVariant] = useState("default");

  useMotionValueEvent(bgColor, "change", (value) => {
    const floorValue = Math.floor(value);

    switch (floorValue) {
      case 1:
        return setBgVariant("dimo");
      case 2:
        return setBgVariant("ms");
      case 3:
        return setBgVariant("pods");
      case 4:
        return setBgVariant("dr");
      default:
        return setBgVariant("default");
    }
  });

  return (
    <motion.div
      ref={el}
      className="w-full h-[9600px] bg-black relative"
      variants={BgVariants}
      initial={"default"}
      animate={activeBgVariant}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="sticky top-0 overflow-x-hidden">
        <div className="w-full h-screen relative overflow-y-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-black shadow-2xl z-30 flex flex-col items-center justify-center"
            style={{ y: introY }}
          >
            <div className="w-full max-w-3xl mx-auto text-justify px-6 md:px-0">
              <div className="float-left h-8 w-32 flex items-center pt-1 md:pt-4">
                <span className="text-gray-400 text-sm">About</span>
              </div>
              <p className="text-2xl md:text-4xl text-white leading-snug">
                <DynaimicColoredDescription
                  text={
                    "Lorem ipsum dolor sit amet consectetur. Neque at elit sodales justo tortor porttitor tempor viverra. Ac viverra tortor quis sit senectus non eu. Tellus nulla lorem morbi integer lorem. Eu tellus quis faucibus at nisl aliquet facilisi."
                  }
                  progress={progress}
                  startValue={0.1}
                  endValue={0.3}
                />
              </p>
            </div>

            {/* <div
              className="w-full max-w-3xl mx-auto mt-16"
              style={{ opacity: 0 }}
            >
              <div className="h-20 w-20 flex items-center justify-center border borer-white rounded-full">
                <div className="text-xs text-white">More</div>
              </div>
            </div> */}
          </motion.div>

          <motion.div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10 flex items-center justify-center pointer-events-none">
            <motion.div className="w-full" style={{ opacity: marqueeOpacity }}>
              <motion.div className="text-white font-medium text-[128px] md:text-[304px]">
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
              <motion.div className="text-white font-medium text-[128px] md:text-[304px] -mt-16 md:-mt-40">
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
          </motion.div>

          <WorkCard
            image={dimoCard}
            progress={progress}
            startValue={DIMO_START}
            endValue={DIMO_START + CARD_LENGTH}
          />
          <WorkCard
            image={msCard}
            progress={progress}
            startValue={MS_START}
            endValue={MS_START + CARD_LENGTH}
          />
          <WorkCard
            image={podsCard}
            progress={progress}
            startValue={PODS_START}
            endValue={PODS_START + CARD_LENGTH}
          />
          <WorkCard
            image={drCard}
            progress={progress}
            startValue={DR_START}
            endValue={DR_START + CARD_LENGTH}
          />
        </div>
      </div>
    </motion.div>
  );
};

const WorkCard = ({
  progress,
  startValue,
  endValue,
  image,
}: {
  progress: MotionValue<number>;
  startValue: number;
  endValue: number;
  image: typeof dimoCard;
}) => {
  const cardY = useTransform(
    progress,
    [startValue, endValue - (endValue - startValue) * 0.2, endValue],
    ["100vh", "-5vh", "0vh"],
    {
      clamp: true,
    }
  );
  const cardScale = useTransform(
    progress,
    [endValue - (endValue - startValue) * 0.2, endValue],
    [1, 0.9]
  );

  return (
    <motion.a
      href="#"
      className="absolute z-20 top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      style={{ y: cardY, scale: cardScale }}
    >
      <img
        src={image}
        alt="DIMO"
        className="w-[90%] h-auto md:w-auto md:h-[90vh]"
      />
    </motion.a>
  );
};
