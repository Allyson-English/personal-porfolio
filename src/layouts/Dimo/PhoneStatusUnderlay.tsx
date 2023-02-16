import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useUpdate, useMount, useUnmount } from "react-use";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { defer } from "lodash";
// import { useEffect, useMemo, useRef } from "react";
import { Portal } from "react-portal";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useToggle } from "react-use";
import { v4 as uuidv4 } from "uuid";
import HealthyPhone from "../../images/dimo/iPhoneHealthy.png";
import WarningPhone from "../../images/dimo/iPhoneWarning.png";
import DangerPhone from "../../images/dimo/iPhoneDanger.png";

interface UnderlayImageProps {
  targetId: string;
  overlaySrc: string;
  underlaySrc: string;
}

export const PhoneUnderlay = () => {
  const { scroll } = useLocomotiveScroll();
  const scrollValue = useMotionValue(0);

  const [timestamp, setTimestamp] = useState<string | undefined>();
  useMount(() => setTimestamp(`${Date.now()}`));
  useUnmount(() => setTimestamp(undefined));

  const imageScale = useTransform(
    scrollValue,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1, 1, 1, 1]
  );
  const imageOpacity = useTransform(
    scrollValue,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0.1, 0.4, 0.8, 1, 1, 1, 0, 0, 0, 0, 0]
  );
  const bgImageOpacity = useTransform(
    scrollValue,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0.1, 0.4, 0.8, 1, 1, 1, 0, 0, 0, 0]
  );
  const bg1ImageOpacity = useTransform(
    scrollValue,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0.1, 0.4, 0.8, 1, 1, 1, 1, 1, 0.6, 0.2]
  );

  const targetId = "temp";

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
      if (typeof args.currentElements[`${targetId}-scroll`] === "object") {
        let progress = args.currentElements[`${targetId}-scroll`].progress;
        scrollValue.set(progress);
      }
    });
  }, [scroll?.name]);

  return (
    <div
      id={targetId}
      className="h-[3200px] w-full pt-24"
      data-scroll-section
      data-scroll
      data-scroll-id={`${targetId}-scroll`}
      //   data-scroll-offset="100%,50%"
    >
      <div className="flex container mx-auto">
        {" "}
        <div className="w-[50%]">
          {timestamp && (
            <Portal key={timestamp}>
              <motion.div
                className="fixed z-30 top-[20%] left-[10%] right-[50%] pointer-events-none"
                style={{
                  y: slideFourTextBox,
                  scale: imageScale,
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
                    wave and gradient is also carried through the tab bar icon.
                  </p>
                </div>
              </motion.div>
            </Portal>
          )}
        </div>
        <div className="w-[50%] flex justify-center">
          <div
            // className="container mx-auto relative"
            data-scroll
            data-scroll-speed="5"
            data-scroll-sticky
            data-scroll-target={`#${targetId}`}
            // style={{
            //   scale: containerScale,
            // }}
          >
            <motion.img
              src={DangerPhone}
              alt=""
              className="absolute top-0 left-0 w-full h-auto -z-10"
              style={{
                y: slideFourTextBox,
                scale: imageScale,
                opacity: bg1ImageOpacity,
              }}
            />

            <motion.img
              src={WarningPhone}
              alt=""
              className="absolute top-0 left-0 w-full h-auto -z-10"
              style={{
                y: slideFourTextBox,
                scale: imageScale,
                opacity: bgImageOpacity,
              }}
            />

            <motion.img
              src={HealthyPhone}
              alt=""
              className="w-full h-auto"
              style={{
                y: slideFourTextBox,
                scale: imageScale,
                opacity: imageOpacity,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
