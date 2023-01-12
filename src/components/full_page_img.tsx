interface ImagePath {
  path: string;
  margin: string;
}

export const FullPageImage = ({ path, margin }: ImagePath) => {
  return <img className={`w-[100%] ${margin}`} src={path} alt="" />;
};
