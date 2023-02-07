import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";
import pods from "../../images/pods.png";

export const Projects = () => {
  // const { scroll } = useLocomotiveScroll();

  // const benValue = useMotionValue(0);
  // const benOpacity = useTransform(benValue, [0.5, 1], [1, 0], { clamp: true });

  return (
    <div
      id="projects-section"
      className="w-full h-[2800px] bg-black relative"
      data-scroll-section
    >
      <div className="container mx-auto h-[1px] w-full bg-white mt-48"></div>
      <div className="container mx-auto mt-48">
        <div className="w-full max-w-5xl text-justify">
          <div className="float-left h-8 w-40 flex items-center">
            <span className="text-gray-400 text-sm">More work</span>
          </div>
          <p className="text-4xl text-white leading-snug">
            Lorem ipsum dolor sit amet consectetur. Neque at elit sodales justo
            tortor porttitor tempor viverra. Ac viverra tortor quis sit senectus
            non eu. Tellus nulla lorem morbi integer lorem. Eu tellus quis
            faucibus at nisl aliquet facilisi.
          </p>
        </div>
      </div>
      <div className="relative container mx-auto">
        <div
          className="w-[840px] absolute left-0 z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src={pods} alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Semo</p>
            <p className="flex-1 text-gray-400 text-sm">Web, Mobile, System</p>
          </div>
        </div>

        <div
          className="w-[480px] absolute right-0 top-[400px] z-[11]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src="/images/pods.png" alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Pods Expansion Pack</p>
            <p className="flex-1 text-gray-400 text-sm">System</p>
          </div>
        </div>

        <div
          className="w-[320px] absolute left-0 top-[600px] z-[12]"
          data-scroll
          data-scroll-speed="6"
        >
          <img src="/images/kahani.png" alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Kahani</p>
            <p className="flex-1 text-gray-400 text-sm">Mobile</p>
          </div>
        </div>

        <div
          className="w-[480px] absolute right-0 top-[840px] z-[13]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src="/images/archimedes.png" alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Archimedes</p>
            <p className="flex-1 text-gray-400 text-sm">Web</p>
          </div>
        </div>

        <Link
          to="/projects/daniel-ricciardo"
          className="w-[840px] absolute left-64 top-[1000px] z-[14]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src="/images/daniel.png" alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Daniel Ricciardo</p>
            <p className="flex-1 text-gray-400 text-sm">Web</p>
          </div>
        </Link>

        <div
          className="w-[320px] absolute left-0 top-[1540px] z-[15]"
          data-scroll
          data-scroll-speed="6"
        >
          <img src="/images/normal-nyc.png" alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Normal NYC</p>
            <p className="flex-1 text-gray-400 text-sm">Web</p>
          </div>
        </div>

        <div
          className="w-[840px] absolute right-64 top-[1680px] z-[1]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src="/images/uncurb.png" alt="" className="w-full h-auto" />
          <div className="flex items-center mt-4">
            <p className="text-white text-sm w-64">Uncurb</p>
            <p className="flex-1 text-gray-400 text-sm">Web, Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
};
