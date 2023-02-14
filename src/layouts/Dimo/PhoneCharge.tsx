import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { OnScrollEvent } from "locomotive-scroll";
import { Portal } from "react-portal";
import { useNavigate, useBeforeUnload } from "react-router-dom";
import { useMouseHovered, useToggle } from "react-use";
import { defer } from "lodash";
import { useUpdate, useMount, useUnmount } from "react-use";
import mainShowcase from "../../images/main-showcase-item.png";
import DimoHero from "../../images/dimo/dimo-hero.png";
import DRHero from "../../images/daniel-ricciardo/dr-final.png";
import PodsHero from "../../images/pods-system/pods-hero.png";
import HealthyPhone from "../../images/dimo/iPhoneHealthy.png";
import WarningPhone from "../../images/dimo/iPhoneWarning.png";
import DangerPhone from "../../images/dimo/iPhoneDanger.png";

export const CoreHome = () => {
  const { scroll } = useLocomotiveScroll();
  const navigate = useNavigate();
  const update = useUpdate();
  const [timestamp, setTimestamp] = useState<string | undefined>();

  useMount(() => setTimestamp(`${Date.now()}`));
  useUnmount(() => setTimestamp(undefined));

  const slideOneRef = useRef<HTMLButtonElement>(null);
  const slideTwoRef = useRef<HTMLButtonElement>(null);
  const slideThreeRef = useRef<HTMLButtonElement>(null);
  const [inView, setInView] = useToggle(true);

  const {
    elX: slideOneElX,
    elY: slideOneElY,
    elW: slideOneElW,
    elH: slideOneElH,
  } = useMouseHovered(slideOneRef);

  const slideOneActive = useMemo(
    () =>
      slideOneElX > 0 &&
      slideOneElX < slideOneElW &&
      slideOneElY > 0 &&
      slideOneElY < slideOneElH,
    [slideOneElX, slideOneElY, slideOneElW, slideOneElH]
  );

  const {
    elX: slideTwoElX,
    elY: slideTwoElY,
    elW: slideTwoElW,
    elH: slideTwoElH,
  } = useMouseHovered(slideTwoRef);

  const slideTwoActive = useMemo(
    () =>
      slideTwoElX > 0 &&
      slideTwoElX < slideTwoElW &&
      slideTwoElY > 0 &&
      slideTwoElY < slideTwoElH,
    [slideTwoElX, slideTwoElY, slideTwoElW, slideTwoElH]
  );

  const {
    elX: slideThreeElX,
    elY: slideThreeElY,
    elW: slideThreeElW,
    elH: slideThreeElH,
  } = useMouseHovered(slideThreeRef);

  const slideThreeActive = useMemo(
    () =>
      slideThreeElX > 0 &&
      slideThreeElX < slideThreeElW &&
      slideThreeElY > 0 &&
      slideThreeElY < slideThreeElH,
    [slideThreeElX, slideThreeElY, slideThreeElW, slideThreeElH]
  );

  const scrollValue = useMotionValue(0);
  const marqueeOpacity = useTransform(scrollValue, [0, 0.5], [1, 0.3], {
    clamp: true,
  });
  const slideOneY = useTransform(
    scrollValue,
    [0.1, 0.3, 0.9, 1],
    ["100vh", "0vh", "0vh", "-100vh"],
    {
      clamp: true,
    }
  );
  const slideOneScale = useTransform(scrollValue, [0.3, 0.35], [1, 0.9], {
    clamp: true,
  });
  const slideTwoY = useTransform(
    scrollValue,
    [0.35, 0.55, 0.9, 1],
    ["100vh", "0vh", "0vh", "-100vh"],
    {
      clamp: true,
    }
  );
  const slideTwoScale = useTransform(scrollValue, [0.55, 0.6], [1, 0.9], {
    clamp: true,
  });
  const slideThreeY = useTransform(
    scrollValue,
    [0.6, 0.8, 0.9, 1],
    ["100vh", "0vh", "0vh", "-100vh"],
    {
      clamp: true,
    }
  );
  const slideThreeScale = useTransform(scrollValue, [0.8, 0.85], [1, 0.9], {
    clamp: true,
  });

  const slideFourTextBox = useTransform(
    scrollValue,
    [0.1, 0.3, 0.9, 1],
    ["100vh", "0vh", "0vh", "-100vh"],
    {
      clamp: true,
    }
  );
  const textBoxScale = useTransform(scrollValue, [0.3, 0.35], [1, 0.9], {
    clamp: true,
  });

  const slidesOpacity = useTransform(scrollValue, [0.9, 1], [1, 0]);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["healthy"] === "object") {
        let progress = args.currentElements["healthy"].progress;
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <>
      <div
        id="phonehealth"
        className="w-full h-[3200px] z-10 relative bg-black"
        data-scroll-section
        data-scroll
        data-scroll-id="healthy"
      >
        <div className="flex container mx-auto">
          <div className="w-[50%] flex justify-center">
            {timestamp && (
              <Portal key={timestamp}>
                <motion.div
                  className="fixed z-30 top-[20%] left-[10%] right-[50%] pointer-events-none"
                  style={{
                    y: slideFourTextBox,
                    scale: textBoxScale,
                    opacity: slidesOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <div className="w-full max-w-2xl">
                    <p className="text-2xl border-b-[1px] pb-5 text-white">
                      Core home
                    </p>
                    <p className="text-2xl text-white pt-5 leading-snug">
                      The dominant component of the home’s UI changes to reflect
                      the vehicle’s percentage of fuel or charge remaining. This
                      wave and gradient is also carried through the tab bar
                      icon.
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
                  className="fixed z-30 top-20 right-0 left-[50%] pointer-events-none"
                  style={{
                    y: slideOneY,
                    scale: slideOneScale,
                    opacity: slidesOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img src={HealthyPhone} className="mx-auto" alt="" />
                </motion.div>

                <motion.div
                  className="fixed z-30 top-20 right-0 left-[50%] pointer-events-none"
                  style={{
                    y: slideTwoY,
                    scale: slideTwoScale,
                    opacity: slidesOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img
                    src={WarningPhone}
                    className="mx-auto rounded-3xl"
                    alt=""
                  />
                </motion.div>

                <motion.div
                  className="fixed z-30 top-20 right-0 left-[50%] pointer-events-none"
                  style={{
                    y: slideThreeY,
                    scale: slideThreeScale,
                    opacity: slidesOpacity,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                >
                  <img
                    src={DangerPhone}
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
