interface SideBySideImagePaths {
  path1: string;
  path2: string;
  parentClass: string;
}

export const SideBySideImages = ({
  path1,
  path2,
  parentClass,
}: SideBySideImagePaths) => {
  return (
    <div className={`flex container mx-auto ${parentClass}`}>
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
