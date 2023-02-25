import { createBreakpoint } from "react-use";

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 400 });

export const useIsMobile = () => {
  const breakpoint = useBreakpoint();

  return breakpoint === "S";
};
