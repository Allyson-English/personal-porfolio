import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { OnScrollEvent } from "locomotive-scroll";
import { Portal } from "react-portal";
import { useMouseHovered, useHoverDirty, useMeasure } from "react-use";

export const Showcase = () => {
  const { scroll } = useLocomotiveScroll();
  const slideOneRef = useRef<HTMLDivElement>(null);
  // console.log(isHovered);
  // const [slideOneRef, { x, y, width, height, top, right, bottom, left }] =
  //   useMeasure<any>();
  // console.log(top, left, right, bottom);

  const scrollValue = useMotionValue(0);
  const marqueeOpacity = useTransform(scrollValue, [0, 0.5], [1, 0.3], {
    clamp: true,
  });
  const slideOneBottom = useTransform(
    scrollValue,
    [0, 0.1, 0.3, 0.9, 1],
    // ["-20px", "-20px", `${(3200 - 3200 * 0.3 - 20) * -1}px`, `240px`, "-20px"]
    [
      "-20px",
      "-20px",
      `${(3200 - 3200 * 0.3 - 20) * -1}px`,
      `${3200 - 3200 * 0.9 - 20}px`,
      "0px",
    ]
    // [
    //   "0px",
    //   `${(3200 - 3200 * 0.1 - 640) * -1}px`,
    //   `${(3200 - 3200 * 0.3 - 640) * -1}px`,
    //   `0px`,
    //   "0px",
    // ]
  );
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

  const slidesOpacity = useTransform(scrollValue, [0.9, 1], [1, 0]);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["showcase"] === "object") {
        let progress = args.currentElements["showcase"].progress;
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <>
      <div
        id="showcase-section"
        className="w-full h-[3200px] z-10"
        data-scroll-section
        data-scroll
        data-scroll-id="showcase"
        data-scroll-offset="100,50%"
      >
        <motion.div
          className="w-full"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#showcase-section"
          style={{ opacity: marqueeOpacity }}
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

      <Portal>
        <motion.div
          ref={slideOneRef}
          className="fixed top-20 left-0 right-0 pointer-events-none"
          style={{
            y: slideOneY,
            scale: slideOneScale,
            opacity: slidesOpacity,
          }}
          data-scroll
          data-scroll-speed="3"
          onUpdate={() =>
            console.log(slideOneRef.current?.getBoundingClientRect())
          }
        >
          <button
            className="container mx-auto flex items-center justify-center"
            onClick={() => console.log("here")}
          >
            <img
              src="/images/main-showcase-item.png"
              className="w-full h-auto sepia-0"
              alt=""
            />
          </button>
        </motion.div>

        <motion.div
          className="fixed top-20 left-0 right-0 pointer-events-none"
          style={{
            y: slideTwoY,
            scale: slideTwoScale,
            opacity: slidesOpacity,
          }}
          data-scroll
          data-scroll-speed="3"
        >
          <button
            className="container mx-auto flex items-center justify-center"
            onClick={() => console.log("here")}
          >
            <img
              src="/images/main-showcase-item.png"
              className="w-full h-auto sepia-[50%]"
              alt=""
            />
          </button>
        </motion.div>

        <motion.div
          className="fixed top-20 left-0 right-0 pointer-events-none"
          style={{
            y: slideThreeY,
            scale: slideThreeScale,
            opacity: slidesOpacity,
          }}
          data-scroll
          data-scroll-speed="3"
        >
          <button
            className="container mx-auto flex items-center justify-center"
            onClick={() => console.log("here")}
          >
            <img
              src="/images/main-showcase-item.png"
              className="w-full h-auto sepia"
              alt=""
            />
          </button>
        </motion.div>
      </Portal>
    </>
  );
};
