import { useMotionValue, useTransform, motion } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export const Hero = () => {
  const { scroll } = useLocomotiveScroll();
  const benValue = useMotionValue(0);
  const benOpacity = useTransform(benValue, [0.5, 1], [1, 0], { clamp: true });

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (args: OnScrollEvent) => {
      if (typeof args.currentElements["hero"] === "object") {
        let progress = args.currentElements["hero"].progress;
        // console.log(args.currentElements["hero"]);
        benValue.set(progress);
        // ouput log example: 0.34
        // gsap example : myGsapAnimation.progress(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <div
      className="h-[calc(100vh-4rem)] w-full bg-black flex flex-col justify-end"
      data-scroll-section
    >
      <div className="flex items-end container mx-auto mb-32">
        <div className="w-[50%]">
          {/* <div className="flex items-center mb-8">
            <div className="h-12 w-12 bg-white mr-4"></div>
            <div>
              <p className="text-white">
                Portfolio 2020 - 2022
                <br />
                Last updated November 31, 2022
              </p>
            </div>
          </div> */}
          <motion.div
            className="space-y-2 text-right max-w-[460px] min-w-[460px]"
            data-scroll
            data-scroll-id="hero"
            style={{ opacity: benOpacity }}
          >
            <p className="text-white text-6xl flex justify-between">
              Ben Kochanowski
            </p>

            {/* <p className="text-white text-6xl flex justify-between">
              <span>B</span>
              <span>e</span>
              <span>n</span>
              <span> </span>
              <span>K</span>
              <span>o</span>
              <span>c</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
              <span>o</span>
              <span>w</span>
              <span>s</span>
              <span>k</span>
              <span>i</span>
            </p> */}
            <div className="flex items-center">
              <div className="h-[1px] flex-1 bg-gray-500 mr-4 relative">
                <div className="absolute left-0 -top-1 bg-gray-200 h-2 w-2 rounded-full"></div>
              </div>
              <p className="text-white text-6xl">is a digital</p>
            </div>
            <p className="text-white text-6xl flex justify-between">
              Product Designer.
            </p>
            {/* <p className="text-white text-6xl flex justify-between">
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>d</span>
              <span>u</span>
              <span>c</span>
              <span>t</span>
              <span> </span>
              <span>D</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span>e</span>
              <span>r</span>
              <span>.</span>
            </p> */}
          </motion.div>
        </div>

        <div className="w-64">
          <p className="text-white text-base">
            Design Lead @ DIMO.
            <br />
            Lorem ipsum dolor sit amet.
            <br />
            Something else goes here.
            <br />
            Another line of placeholder text.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-end container mx-auto pb-4">
        <div className="flex flex-col items-center justify-center w-48">
          {/* <span className="text-white uppercase">Scroll to explore</span> */}
          <Marquee className="text-white uppercase" gradient={false}>
            Scroll to explore – Scroll to explore –
          </Marquee>
          <div className="h-24 w-[1px] bg-white mt-4 relative">
            <motion.div
              className="h-4 w-[1px] bg-black -top-4 absolute"
              animate={{ y: 112 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                type: "tween",
              }}
            />

            <motion.div
              className="h-4 w-[1px] bg-black -top-4 absolute"
              animate={{ y: 112 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1,
                type: "tween",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
