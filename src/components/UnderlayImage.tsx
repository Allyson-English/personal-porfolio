import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { defer } from "lodash";
import { useEffect, useMemo, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useToggle } from "react-use";
import { v4 as uuidv4 } from "uuid";

interface UnderlayImageProps {
  targetId: string;
  overlaySrc: string;
  underlaySrc: string;
}

export const UnderlayImage = ({
  targetId,
  overlaySrc,
  underlaySrc,
}: UnderlayImageProps) => {
  const { scroll } = useLocomotiveScroll();
  const scrollValue = useMotionValue(0);

  const imageScale = useTransform(scrollValue, [0, 0.4, 1], [0.7, 1, 1]);
  const imageOpacity = useTransform(scrollValue, [0, 0.4, 0.8], [1, 1, 0]);
  const bgImageOpacity = useTransform(scrollValue, [0, 0.4, 1], [0, 0, 1]);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements[`${targetId}-scroll`] === "object") {
        let progress = args.currentElements[`${targetId}-scroll`].progress;
        // console.log("wtf, here?", progress);
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <div
      id={targetId}
      className="h-[1600px] w-full pt-24 text-center"
      data-scroll-section
      data-scroll
      data-scroll-id={`${targetId}-scroll`}
      data-scroll-offset="20%,50%"
    >
      <div
        className="container mx-auto relative"
        data-scroll
        data-scroll-speed="5"
        data-scroll-sticky
        data-scroll-target={`#${targetId}`}
        // style={{
        //   scale: containerScale,
        // }}
      >
        <motion.img
          src={underlaySrc}
          alt=""
          className="absolute top-0 left-0 w-full h-auto -z-10"
          style={{ opacity: bgImageOpacity }}
        />

        <motion.img
          src={overlaySrc}
          alt=""
          className="w-full h-auto"
          style={{ scale: imageScale, opacity: imageOpacity }}
        />
      </div>
    </div>
  );
};
