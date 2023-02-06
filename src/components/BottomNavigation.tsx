interface BottomNavigationProps {
  previousProject: string;
  nextProject: string;
}

export const BottomNavigation = ({
  previousProject,
  nextProject,
}: BottomNavigationProps) => {
  if (previousProject === "") {
    return (
      <div className="h-[320px] w-full" data-scroll-section>
        <div className="container flex mx-auto border-b-[1px] border-t-[1px] text-white mb-64 justify-between">
          <div className="flex text-8xl">
            <p></p>
            <div className="">
              <p className="text-8xl"></p>
              <p className="text-2xl"></p>
            </div>
          </div>
          <div className="flex text-8xl">
            <div className="">
              <p className="text-8xl">Next</p>
              <p className="text-2xl">{nextProject}</p>
            </div>
            <p>→</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[320px] w-full" data-scroll-section>
      <div className="container flex mx-auto border-b-[1px] border-t-[1px] text-white mb-64 justify-between">
        <div className="flex text-8xl">
          <p>←</p>
          <div className="">
            <p className="text-8xl">Previous</p>
            <p className="text-2xl">{previousProject}</p>
          </div>
        </div>
        <div className="flex text-8xl">
          <div className="">
            <p className="text-8xl">Next</p>
            <p className="text-2xl">{nextProject}</p>
          </div>
          <p>→</p>
        </div>
      </div>
    </div>
  );
};