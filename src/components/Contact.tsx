import { AnimatePresence, motion } from "framer-motion";
import { useMeasure, useToggle } from "react-use";

export const Contact = () => {
  const [isActive, toggleActive] = useToggle(false);
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <>
      <button
        className="text-white border border-white px-8 py-1 rounded-full"
        onClick={toggleActive}
      >
        Contact
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.button
            key="overlay"
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20"
            onClick={toggleActive}
          />
        )}

        {isActive && (
          <motion.div
            ref={ref}
            key="bg-layer"
            className="fixed top-0 left-0 right-0 h-[640px] bg-gray-100"
            initial={{ y: "-640px" }}
            animate={{ y: isActive ? 0 : "-640px" }}
            exit={{
              y: "-640px",
              transition: {
                delay: 0.2,
                type: "tween",
              },
            }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <div className="flex flex-col justify-end w-full h-full relative">
              <div className="container mx-auto h-24">
                <div className="w-[480px] h-full grid grid-cols-3 gap-12">
                  <div className="col-span-1 flex justify-between items-center">
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                    <p className="font-base text-lg">Mailto</p>
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                  </div>

                  <div className="col-span-1 flex justify-between items-center">
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                    <p className="font-base text-lg">LinkedIn</p>
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                  </div>

                  <div className="col-span-1 flex justify-between items-center">
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                    <p className="font-base text-lg">Polywork</p>
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                  </div>
                </div>
              </div>

              <img
                className="absolute -bottom-2 -right-2 w-auto h-28"
                src="../images/loops.png"
              />
            </div>
          </motion.div>
        )}

        {isActive && (
          <motion.div
            key="fg-layer"
            className="fixed top-0 left-0 right-0 h-[540px] bg-white drop-shadow"
            initial={{ y: "-540px" }}
            animate={{ y: isActive ? 0 : "-540px" }}
            exit={{
              y: "-540px",
              transition: {
                delay: 0,
                type: "tween",
              },
            }}
            transition={{
              type: "tween",
              duration: 0.4,
              delay: 0.2,
            }}
          >
            <div className="w-full h-16">
              <div className="h-full container mx-auto flex justify-between items-center">
                <p className="font-medium text-lg">Ben</p>
                <button
                  className="border border-black rounded-full h-8 w-8 flex items-center justify-center"
                  onClick={toggleActive}
                >
                  x
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center pointer-events-none">
              <h1
                className="font-medium leading-[400px]"
                style={{
                  fontSize: Math.round(width / 3.5),
                }}
              >
                Contact
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
