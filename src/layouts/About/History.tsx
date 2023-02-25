const items = [
  { label: "DIMO", value: "2021 - 2023" },
  { label: "SEMO", value: "2021" },
  { label: "Gateway X", value: "2021" },
  { label: "Archimedes PYF", value: "2021" },
  { label: "Normal New York", value: "2021" },
  { label: "Dreamfield", value: "2021" },
  { label: "Pensando (Cisco)", value: "2020 - 2021" },
  {
    label: "Mott Children's Hospital at The University of Michigan",
    value: "2020 - 2021",
  },
  { label: "Habitat for Humanity", value: "2020 - 2021" },
  { label: "Uncurb (Ford)", value: "2020 - 2021" },
];

export const History = () => {
  return (
    <div className="bg-black w-full py-24">
      <div className="container mx-auto px-12">
        <div className="w-full bg-gray-500 h-[1px] mb-12" />
        <div className="w-full max-w-5xl grid grid-cols-2 gap-12">
          <p className="text-white leading-loose">
            Lorem ipsum dolor sit amet consectetur. Magnis in ultrices nulla est
            massa luctus mauris. Scelerisque quam gravida lobortis tincidunt hac
            ut blandit id magna. Mauris eget mauris sed nulla libero amet mi
            vitae hendrerit. Sed ut in ultrices convallis iaculis adipiscing
            integer. Enim viverra enim morbi aenean malesuada ipsum auctor
            aenean placerat.
          </p>
          <p className="text-white leading-loose">
            Lorem ipsum dolor sit amet consectetur. A in velit sit est fames
            urna tortor morbi semper. Placerat sit egestas in consequat.
            Nascetur nunc quisque quam interdum condimentum duis. Viverra varius
            augue convallis sem. Platea tortor vehicula faucibus viverra quam.
            Eu habitant at sit enim arcu nulla sollicitudin proin.
          </p>
        </div>

        <h3 className="text-white text-2xl mt-24">
          Selected current & previous clients
        </h3>
        <ul className="border-t border-b border-gray-500 mt-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="border-b border-gray-500 py-4 flex items-center justify-between"
            >
              <p className="text-white">{item.label}</p>
              <p className="text-white">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
