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

export const Showcase = () => {
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

  const slidesOpacity = useTransform(scrollValue, [0.9, 1], [1, 0]);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["showcase"] === "object") {
        let progress = args.currentElements["showcase"].progress;
        // console.log("wtf, here?", progress);
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <>
      <div
        id="showcase-section"
        className="w-full h-[3200px] z-10 relative"
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

        <div
          className="absolute top-0"
          data-scroll
          data-scroll-call="enter"
          data-scroll-position="top"
        ></div>
        <div
          className="absolute bottom-0"
          data-scroll
          data-scroll-call="exit"
          data-scroll-position="bottom"
        ></div>

        <div
          className={`absolute top-0 left-0 right-0 bottom-0 z-20 ${
            !!slideOneActive || !!slideTwoActive || !!slideThreeActive
              ? "cursor-pointer"
              : "cursor-auto"
          }`}
          onClick={() => {
            if (slideThreeActive) {
              navigate("/projects/dreamfield");
            } else if (slideTwoActive) {
              navigate("/projects/mint-sunday");
            } else if (slideOneActive) {
              navigate("/projects/dimo");
            }
          }}
        />
      </div>

      {timestamp && (
        <Portal key={timestamp}>
          <motion.div
            className="fixed z-30 top-20 left-0 right-0 pointer-events-none"
            style={{
              y: slideOneY,
              scale: slideOneScale,
              opacity: slidesOpacity,
            }}
            data-scroll
            data-scroll-speed="3"
          >
            <button
              ref={slideOneRef}
              className="container mx-auto flex items-center justify-center"
            >
              <img
                src="/images/main-showcase-item.png"
                className="w-full h-auto sepia-0"
                alt=""
              />
            </button>
          </motion.div>

          <motion.div
            className="fixed z-30 top-20 left-0 right-0 pointer-events-none"
            style={{
              y: slideTwoY,
              scale: slideTwoScale,
              opacity: slidesOpacity,
            }}
            data-scroll
            data-scroll-speed="3"
          >
            <button
              ref={slideTwoRef}
              className="container mx-auto flex items-center justify-center"
            >
              <img
                src="/images/main-showcase-item.png"
                className="w-full h-auto sepia-[50%]"
                alt=""
              />
            </button>
          </motion.div>

          <motion.div
            className="fixed z-30 top-20 left-0 right-0 pointer-events-none"
            style={{
              y: slideThreeY,
              scale: slideThreeScale,
              opacity: slidesOpacity,
            }}
            data-scroll
            data-scroll-speed="3"
          >
            <button
              ref={slideThreeRef}
              className="container mx-auto flex items-center justify-center"
            >
              <img
                src="/images/main-showcase-item.png"
                className="w-full h-auto sepia"
                alt=""
              />
            </button>
          </motion.div>
        </Portal>
      )}
    </>
  );
};
