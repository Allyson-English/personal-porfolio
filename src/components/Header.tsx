import { Link, NavLink } from "react-router-dom";
import { Contact } from "./Contact";

export const Header = () => (
  <>
    <div className="h-24 w-full bg-transparent fixed top-0 z-20 md:hidden">
      <div className="w-full px-6 flex items-center justify-between h-full">
        <Link className="text-white text-lg font-medium" to="/">
          Ben
        </Link>
        <button className="focus:outline-none border-white border rounded-full h-8 w-8 flex flex-col items-center justify-center space-y-[4px]">
          <div className="bg-white h-[1px] w-[12px]" />
          <div className="bg-white h-[1px] w-[12px]" />
          <div className="bg-white h-[1px] w-[12px]" />
        </button>
      </div>
    </div>

    <div className="h-24 w-full bg-transparent sticky top-0 z-20 hidden md:block">
      <div className="container mx-auto flex items-center h-full">
        <div className="text-white text-lg font-medium">
          <a href="/">Ben</a>
        </div>
        <div className="flex-1"></div>
        <Link to="/about" className="text-white px-8 mr-4">
          About
        </Link>
        <Contact />
      </div>
    </div>
  </>
);
