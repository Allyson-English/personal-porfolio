import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Parallax } from "react-parallax";

interface FullWidthImageProps {
  targetId: string;
  src: string;
}

export const FullWidthImage = ({ targetId, src }: FullWidthImageProps) => {
  const { scroll } = useLocomotiveScroll();
  const scrollValue = useMotionValue(0);

  const topY = useTransform(scrollValue, [0.3, 1], ["0rem", "-6rem"]);
  const bottomY = useTransform(scrollValue, [0.3, 1], ["6rem", "0rem"]);

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
      className="h-[100vh] w-full relative overflow-hidden"
      data-scroll-section
      data-scroll
      data-scroll-id={`${targetId}-scroll`}
    >
      <img {...{ src }} alt="" className="w-auto h-full" />

      <motion.div
        className="w-full h-24 absolute top-0 left-0 right-0 bg-black"
        style={{ y: topY }}
      />
      <motion.div
        className="w-full h-24 absolute bottom-0 left-0 right-0 bg-black"
        style={{ y: bottomY }}
      />

      {/* <Parallax
        // blur={10}
        bgImage={src}
        style={{ width: "100%", height: "100vh" }}
        bgImageStyle={{ width: "100%", height: "100vh" }}
        strength={200}
      /> */}
    </div>
  );
};
