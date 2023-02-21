import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { OnScrollEvent } from "locomotive-scroll";
import { Portal } from "react-portal";
import { useNavigate } from "react-router-dom";
import { useUpdate, useMount, useUnmount } from "react-use";

import Distance from "../../images/dimo/iPhone14ConnectedMiles.png";
import Habits from "../../images/dimo/iPhone14Habits.png";
import Valuation from "../../images/dimo/iPhone14MarketplaceValue.png";
import Range from "../../images/dimo/iPhone14Range.png";
import TirePressure from "../../images/dimo/iPhone14TirePressure.png";

export const VehicleIntelligence = () => {
  const { scroll } = useLocomotiveScroll();
  const navigate = useNavigate();
  const update = useUpdate();
  const [timestamp, setTimestamp] = useState<string | undefined>();

  useMount(() => setTimestamp(`${Date.now()}`));
  useUnmount(() => setTimestamp(undefined));

  const scrollValue = useMotionValue(0);

  const scrollScale = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0, 0.25, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    {
      clamp: true,
    }
  );

  const slideOneOpacity = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0.5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    {
      clamp: true,
    }
  );
  const slideTwoOpacity = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0, 0, 0, 0, 0.5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    {
      clamp: true,
    }
  );

  const slideThreeOpacity = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    {
      clamp: true,
    }
  );

  const slideFourOpacity = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1, 1, 1, 1, 0, 0, 0, 0],
    {
      clamp: true,
    }
  );

  const slideFiveOpacity = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    {
      clamp: true,
    }
  );

  const slideFiveY = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    {
      clamp: true,
    }
  );

  const slideFourTextBox = useTransform(scrollValue, [0, 1], [0.5, 1], {
    clamp: true,
  });

  const slidesOpacity = useTransform(
    scrollValue,
    [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
    [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    {
      clamp: true,
    }
  );

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["vehicleIntelligence"] === "object") {
        let progress = args.currentElements["vehicleIntelligence"].progress;
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <>
      <div
        id="intelligence"
        className="w-full h-[3200px] z-10 relative bg-black pb-64"
        data-scroll-section
        data-scroll
        data-scroll-id="vehicleIntelligence"
      >
        <div className="flex container mx-auto">
          <div className="w-[10%]">
            {timestamp && (
              <Portal key={timestamp}>
                <motion.div
                  className="fixed z-30 top-[25%] left-[5%] pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: scrollScale,
                    opacity: slideOneOpacity,
                  }}
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl text-white pt-5 leading-snug">
                      <span className="inline-block">
                        <ul className="list-disc">
                          <li>
                            <b>Range</b>
                          </li>
                        </ul>
                      </span>
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Distance
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Valuation
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Habits
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Tires
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="fixed z-30 top-[25%] left-[5%] pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: scrollScale,
                    opacity: slideTwoOpacity,
                  }}
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Range
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      <span className="inline-block">
                        <ul className="list-disc">
                          <li>
                            <b>Distance</b>
                          </li>
                        </ul>
                      </span>
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Valuation
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Habits
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Tires
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="fixed z-30 top-[25%] left-[5%] pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: scrollScale,
                    opacity: slideThreeOpacity,
                  }}
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Range
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Distance
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      <span className="inline-block">
                        <ul className="list-disc">
                          <li>
                            <b>Valuation</b>
                          </li>
                        </ul>
                      </span>
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Habits
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Tires
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="fixed z-30 top-[25%] left-[5%] pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: scrollScale,
                    opacity: slideFourOpacity,
                  }}
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Range
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Distance
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Valuation
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      <span className="inline-block">
                        <ul className="list-disc">
                          <li>
                            <b>Habits</b>
                          </li>
                        </ul>
                      </span>
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Tires
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="fixed z-30 top-[25%] left-[5%] pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: scrollScale,
                    opacity: slideFiveOpacity,
                  }}
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Range
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Distance
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Valuation
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      Habits
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      <span className="inline-block">
                        <ul className="list-disc">
                          <li>
                            <b>Tires</b>
                          </li>
                        </ul>
                      </span>
                    </p>
                  </div>
                </motion.div>
              </Portal>
            )}
          </div>
          <div className="w-[40%] flex justify-center">
            {timestamp && (
              <Portal key={timestamp}>
                <motion.div
                  className="fixed z-30 top-[25%] left-[50%]  pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: scrollScale,
                    opacity: slidesOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl border-b-[1px] pb-5 text-white">
                      Intelligence
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      A suite of data-focused graphs, insights, and tips
                      provides users with a look into their cars’ performance
                      and trends over time.
                    </p>
                  </div>
                </motion.div>
              </Portal>
            )}
          </div>
          <div className="w-[50%]">
            {timestamp && (
              <Portal key={timestamp}>
                <motion.div
                  className="fixed z-30 top-[20%] left-0 right-[40%] pointer-events-none"
                  style={{
                    y: slideOneOpacity,
                    scale: scrollScale,
                    opacity: slideOneOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img src={Range} className="mx-auto" alt="" />
                </motion.div>

                <motion.div
                  className="fixed z-30 top-[20%] left-0 right-[40%]  pointer-events-none"
                  style={{
                    y: slideTwoOpacity,
                    scale: scrollScale,
                    opacity: slideTwoOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img src={Distance} className="mx-auto rounded-3xl" alt="" />
                </motion.div>

                <motion.div
                  className="fixed z-30 top-[20%] left-0 right-[40%]  pointer-events-none"
                  style={{
                    y: slideThreeOpacity,
                    scale: scrollScale,
                    opacity: slideThreeOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img src={Valuation} className="mx-auto rounded-3xl" alt="" />
                </motion.div>

                <motion.div
                  className="fixed z-30 top-[20%] left-0 right-[40%]  pointer-events-none"
                  style={{
                    y: slideFourOpacity,
                    scale: scrollScale,
                    opacity: slideFourOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img src={Habits} className="mx-auto rounded-3xl" alt="" />
                </motion.div>

                <motion.div
                  className="fixed z-30 top-[20%] left-0 right-[40%] bottom-[20%]  pointer-events-none"
                  style={{
                    y: slideFiveY,
                    scale: scrollScale,
                    opacity: slideFiveOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img
                    src={TirePressure}
                    className="mx-auto rounded-3xl"
                    alt=""
                  />
                </motion.div>
              </Portal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
