function App() {
  return (
    <main className="bg-black">
      {/* HEADER */}
      <div className="h-16 w-full bg-transparent sticky top-0">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-white">Ben</div>
          <div className="text-white">Ben</div>
          <div className="text-white">Ben</div>
        </div>
      </div>

      {/* FIRST SECTION */}
      <div className="h-[calc(100vh-4rem)] w-full bg-black flex flex-col justify-end">
        <div className="flex items-end container mx-auto pr-96 mb-32">
          <div className="w-[692px]">
            <div className="flex items-center mb-8">
              <div className="h-12 w-12 bg-white mr-4"></div>
              <div>
                <p className="text-white">
                  Portfolio 2020 - 2022
                  <br />
                  Last updated November 31, 2022
                </p>
              </div>
            </div>
            <div className="space-y-2 font-bold">
              <p className="text-white uppercase text-6xl tracking-widest">
                Ben Kochanowski
              </p>
              <div className="flex items-center">
                <div className="h-1 flex-1 bg-white mr-4"></div>
                <p className="text-white uppercase text-6xl tracking-widest">
                  Is a digital
                </p>
              </div>
              <p className="text-white uppercase text-6xl tracking-widest">
                Product Designer
              </p>
            </div>
          </div>

          <div className="w-80 ml-24">
            <p className="text-white text-sm">
              DESIGN LEAD @ DIMO. LOREM IPSUM DOLOR SIT AMET. SOMETHING ELSE
              THAT GOES HERE. CONSTECTIO KODNRA DENEMI.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-end container mx-auto pb-4">
          <div className="flex flex-col items-center justify-center">
            <span className="text-white uppercase">Scroll to explore</span>
            <div className="h-24 w-[1px] bg-white mt-2"></div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="h-screen w-full bg-green-500"></div>

      {/* FOOTER */}
      <div className="h-16 w-full bg-transparent fixed bottom-0">
        <div className="container mx-auto flex justify-between items-center h-full">
          <span className="text-white">PORTFOLIO 2020 - 2022</span>
          <span className="text-white">UPDATED NOVEMBER 20, 2022</span>
        </div>
      </div>
    </main>
  );
}

export default App;
