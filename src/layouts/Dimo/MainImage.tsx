import DimoMain from "../../images/dimo/dimo-hero.png";

export const MainImage = () => {
  return (
    <div className="container mx-auto overflow-y-clip" data-scroll-section>
      <div className="w-full h-[1px] bg-white my-16" />
      <img src={DimoMain} className="w-full h-auto" alt="" />
    </div>
  );
};
