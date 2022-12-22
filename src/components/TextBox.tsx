import React from "react";

type TextProps = {
  title: string;
  paragraph: string;
};

const TextBox = ({ title, paragraph }: TextProps) => {
  return (
    <div className="w-[850px]">
      <p className="text-white text-sm float-left mr-20 mt-2">{title}</p>
      <p className="text-white text-4xl text-justify">{paragraph}</p>
    </div>
  );
};

export default TextBox;
