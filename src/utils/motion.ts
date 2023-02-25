import { useScrollbar, useTracker } from "@14islands/r3f-scroll-rig";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export const useTrackerMotionValue = (
  tracker: ReturnType<typeof useTracker>,
  prop = "progress"
) => {
  const progress = useMotionValue(0);
  const { onScroll } = useScrollbar();
  const { scrollState, rect } = tracker;

  useEffect(() => {
    // update progress on scroll
    return onScroll(() => {
      progress.set(scrollState[prop]);
    });
  }, [progress, scrollState, prop, onScroll, rect]);

  return progress;
};
