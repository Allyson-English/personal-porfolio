import {
  motion,
  MotionValue,
  progress,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { Fragment, useMemo, useState } from "react";

const Variants = {
  inactive: {
    color: "#282828",
    // fontWeight: 300,
  },
  active: {
    color: "#FFFFFF",
    // fontWeight: 500,
  },
};

interface DynaimicColoredDescriptionProps {
  text: string;
  progress: MotionValue<number>;
  startValue: number;
  endValue: number;
}

export const DynaimicColoredDescription = ({
  text,
  progress,
  startValue,
  endValue,
}: DynaimicColoredDescriptionProps) => {
  const chunks = useMemo(() => text.split(" "), [text]);
  const transform = useTransform(
    progress,
    [startValue, endValue],
    [-1, chunks.length],
    { clamp: true }
  );
  const [activeValue, setActiveValue] = useState(-1);

  useMotionValueEvent(transform, "change", (value) => {
    setActiveValue(Math.floor(value));
  });

  return (
    <>
      {chunks.map((str, index) => (
        <Fragment key={`${index}`}>
          <motion.span
            key={`${index}-span`}
            variants={Variants}
            animate={activeValue > index ? "active" : "inactive"}
            transition={{
              duration: 0.1,
            }}
          >
            {str}
          </motion.span>{" "}
        </Fragment>
      ))}
    </>
  );
};
