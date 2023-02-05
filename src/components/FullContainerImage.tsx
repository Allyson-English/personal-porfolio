import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

interface FullContainerImageProps {
  targetId: string;
  src: string;
}

export const FullContainerImage = ({
  targetId,
  src,
}: FullContainerImageProps) => {
  const { scroll } = useLocomotiveScroll();
  const scrollValue = useMotionValue(0);

  const imageScale = useTransform(scrollValue, [0, 0.4, 1], [0.7, 1, 1]);
  const imageOpacity = useTransform(scrollValue, [0, 0.6, 0.9], [1, 1, 0], {
    clamp: true,
  });

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
      className="h-[1600px] w-full pt-24 pb-24 text-center"
      data-scroll-section
      data-scroll
      data-scroll-id={`${targetId}-scroll`}
      data-scroll-offset="20%,50%"
    >
      <div
        className="container mx-auto"
        data-scroll
        data-scroll-speed="5"
        data-scroll-sticky
        data-scroll-target={`#${targetId}`}
      >
        <motion.img
          {...{ src }}
          alt=""
          className="w-full h-auto"
          style={{ scale: imageScale, opacity: imageOpacity }}
        />
      </div>
    </div>
  );
};
