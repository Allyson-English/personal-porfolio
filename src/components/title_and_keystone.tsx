interface TitleAndKeystoneParams {
  pageTitle: string;
  imagePath: string;
}

export const TitleAndKeystoneImage = ({
  pageTitle,
  imagePath,
}: TitleAndKeystoneParams) => {
  return (
    <>
      <img
        className=" absolute mx-auto mt-20 ml-[40%]"
        src={imagePath}
        alt=""
      />
      <div className="h-24 w-full bg-transparent sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-white text-lg font-medium">Ben</div>
          <div className="text-white"></div>
          <button className="text-white border border-white px-8 py-1 rounded-full">
            Contact
          </button>
        </div>
      </div>
      <p className="text-white font-normal text-[232px] text-center">
        {pageTitle}
      </p>
    </>
  );
};
