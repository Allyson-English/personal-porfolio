import { useEffect, useMemo, useRef, useState } from "react";
import { useMount, useUnmount } from "react-use";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { OnScrollEvent } from "locomotive-scroll";
import { defer } from "lodash";
// import { useEffect, useMemo, useRef } from "react";
import { Portal } from "react-portal";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import CustomizeNFT from "../../images/dimo/iPhone14CustomizeNFT.png";
import Minted from "../../images/dimo/iPhone14Minted.png";

export const VehicleAsNFTs = () => {
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
    [0.1, 0.4, 1, 1, 1, 1, 0, 0, 0, 0, 0]
  );
  const bg1ImageOpacity = useTransform(
    scrollValue,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0]
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

  const slidesOpacity = useTransform(
    scrollValue,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
  );

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
                    Vehicles as NFTs
                  </p>
                  <p className="text-2xl text-white pt-5 leading-snug">
                    Users can change the appearance of the NFT of their vehicle
                    with a customizer in the app. The NFT serves as the user’s
                    passport into the DIMO app and ecosystem.
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
              src={Minted}
              alt=""
              className="absolute top-0 left-0 w-full h-auto -z-10"
              style={{
                y: slideFourTextBox,
                scale: imageScale,
                opacity: bg1ImageOpacity,
              }}
            />

            <motion.img
              src={CustomizeNFT}
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
