import React from "react";

type TextProps = {
  title: string;
  paragraph: string;
};

const TextBox = ({ title, paragraph }: TextProps) => {
  return (
    <div className="p-80 bottom-0 left-0">
      <p className="text-white text-sm float-left mr-20 mt-2">{title}</p>

      <p className="text-white text-4xl text-justify">{paragraph}</p>
    </div>
  );
};

export default TextBox;
