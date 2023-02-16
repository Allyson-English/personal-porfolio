import { Link } from "react-router-dom";

interface BottomNavigationProps {
  previousProject: string;
  previousProjectURL: string;
  nextProject: string;
  nextProjectURL: string;
}

export const BottomNavigation = ({
  previousProject,
  previousProjectURL,
  nextProject,
  nextProjectURL,
}: BottomNavigationProps) => {
  if (nextProject === "") {
    return (
      <div className="h-[320px] w-full" data-scroll-section>
        <div className="container flex mx-auto border-b-[1px] border-t-[1px] text-white mb-64 justify-between pt-6 pb-6">
          <div className="flex text-8xl">
            <p></p>
            <div className="">
              <p className="text-8xl"></p>
              <p className="text-2xl"></p>
            </div>
          </div>
          <div className="flex text-8xl">
            <div className="">
              <Link to={nextProjectURL}>Next</Link>
              <p className="text-2xl">{nextProject}</p>
            </div>
            <p>→</p>
          </div>
        </div>
      </div>
    );
  }

  if (previousProject === "") {
    return (
      <div className="h-[320px] w-full" data-scroll-section>
        <div className="container flex mx-auto border-b-[1px] border-t-[1px] text-white mb-64 justify-between pt-6 pb-6">
          <div className="flex text-8xl">
            <p></p>
            <div className="">
              <p className="text-8xl"></p>
              <p className="text-2xl"></p>
            </div>
          </div>
          <div className="flex text-8xl">
            <div className="">
              <Link to={nextProjectURL}>Next</Link>
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
      <div className="container flex mx-auto border-b-[1px] border-t-[1px] text-white mb-64 justify-between pt-6 pb-6">
        <div className="flex text-8xl">
          <p>←</p>
          <div className="">
            <p className="text-8xl">
              <Link to={previousProjectURL}>Previous</Link>
            </p>
            <p className="text-2xl">{previousProject}</p>
          </div>
        </div>
        <div className="flex text-8xl">
          <div className="">
            <p className="text-8xl">
              <Link to={nextProjectURL}>Next</Link>
            </p>
            <p className="text-2xl">{nextProject}</p>
          </div>
          <p>→</p>
        </div>
      </div>
    </div>
  );
};
