export const FirstShowcase = () => {
  return (
    <div className="w-full overflow-y-clip" data-scroll-section>
      <div className="grid grid-cols-3">
        <img
          src="/images/dimo-healthy.png"
          className="w-full h-auto"
          alt="dimo healthy"
        />
        <img
          src="/images/dimo-warning.png"
          className="w-full h-auto"
          alt="dimo warning"
        />
        <img
          src="/images/dimo-danger.png"
          className="w-full h-auto"
          alt="dimo danger"
        />
      </div>
    </div>
  );
};
