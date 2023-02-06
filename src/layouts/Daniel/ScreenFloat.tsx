export const ScreenFloat = () => {
  return (
    <div className="w-full h-[1600px] bg-black" data-scroll-section>
      <div className="relative container mx-auto">
        <div
          className="w-[60%] absolute left-24 z-[10]"
          data-scroll
          data-scroll-speed="3"
        >
          <img src="/images/daniel-ricciardo/dr-spread-5a.png" alt="" />
        </div>

        <div
          className="w-[30%] absolute right-24 top-96 z-[10]"
          data-scroll
          data-scroll-speed="9"
        >
          <img src="/images/daniel-ricciardo/dr-spread-5b.png" alt="" />
        </div>
      </div>
    </div>
  );
};
