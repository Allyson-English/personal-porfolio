import { Contact } from "./Contact";

export const Header = () => (
  <div className="h-24 w-full bg-transparent sticky top-0 z-20">
    <div className="container mx-auto flex justify-between items-center h-full">
      <div className="text-white text-lg font-medium">
        <a href="../">Ben</a>
      </div>
      <div className="text-white"></div>
      <Contact />
    </div>
  </div>
);
