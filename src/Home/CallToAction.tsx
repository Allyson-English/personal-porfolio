import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export const CallToAction = () => {
  const { scroll } = useLocomotiveScroll();

  const scrollValue = useMotionValue(0);
  const contentY = useTransform(scrollValue, [0.2, 0.4], ["-50vh", "0vh"]);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["call-to-action"] === "object") {
        let progress = args.currentElements["call-to-action"].progress;
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <div
      id="cta-section"
      className="w-full bg-gray-100 overflow-hidden"
      data-scroll-section
      data-scroll
      data-scroll-id="call-to-action"
    >
      <motion.div
        className="container mx-auto py-16 -z-10"
        style={{ y: contentY }}
      >
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-4 text-black text-2xl">
            <a href="#" className="block">
              LinkedIn
            </a>
            <a href="#" className="block">
              Polywork
            </a>
            <a href="#" className="block">
              Mailto
            </a>
          </div>
          <div className="col-span-1 text-center">
            <p className="text-black text-lg mb-8">hi@benkochanowski.com</p>
            <p className="text-gray-400 text-base mb-2">
              Designed by Ben Kochanowski
            </p>
            <p className="text-gray-400 text-base">
              Built by Aaron Marz & Allyson English
            </p>
          </div>
          <div className="col-span-1 text-right">
            <button className="text-black text-2xl">Back to Top</button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black mt-16 mb-8"></div>

        <p className="w-full text-center text-[248px]">Get in touch</p>
      </motion.div>
    </div>
  );
};
