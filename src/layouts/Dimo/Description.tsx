export const Description = () => {
  return (
    <div className="w-full h-[550px] bg-black relative" data-scroll-section>
      <div className="container mx-auto">
        <div className="w-full max-w-3xl">
          <div className="float-left h-8 w-32 flex items-center">
            <span className="text-gray-400 text-sm">My work</span>
          </div>
          <p className="text-2xl text-white leading-snug mt-20">
            The DIMO app is a robust product designed to give users access to
            their vehicle's data, mint it as an NFT, earn and view rewards, and
            interact with marketplace products on DIMO. It was crucial for us to
            design an app which provided real-world value to users, something
            that went far beyond just checking their token balance.
          </p>
        </div>

        <div className="w-full h-[1px] bg-white my-16" />

        <div className="w-full pr-96 text-white">
          <div className="grid grid-cols-2 gap-24 w-full">
            <div className="text-xl">
              I joined DIMO as its founding designer in late 2021. Since then
              I've been leading and managing design teams and contractors across
              branding and product efforts, mainly the flagship mobile app.
            </div>
            <div className="text-xl">
              Users connect their vehicle to the app by logging into their
              existing OEM app or through pairing the vehicle with a hardware
              device sold by DIMO. After connecting users are able to see data
              about their vehicle's performance, valuation, and more in real
              time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
