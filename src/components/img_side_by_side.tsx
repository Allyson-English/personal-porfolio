interface SideBySideImagePaths {
  path1: string;
  path2: string;
}

export const SideBySideImages = ({ path1, path2 }: SideBySideImagePaths) => {
  return (
    <div className="flex container mx-auto mb-40">
      {" "}
      <div className="w-[50%] flex justify-center">
        {" "}
        <img src={path1} alt="" />
      </div>
      <div className="w-[50%] flex justify-center">
        {" "}
        <img src={path2} alt="" />
      </div>
    </div>
  );
};
