const heights = {
  s: "h-16",
  m: "h-32",
  l: "h-48",
  xl: "h-64",
};

interface PageSpaceProps {
  size: keyof typeof heights;
}

export const PageSpace = ({ size }: PageSpaceProps) => {
  return <div className={`${heights[size]} w-full`} data-scroll-section></div>;
};
