interface BoldStatementProps {
  text: string;
}

export const BoldStatement = ({ text }: BoldStatementProps) => {
  return (
    <div className="h-[480px] w-full" data-scroll-section>
      <div className="container mx-auto">
        <p className="text-white text-[96px] text-center leading-[1.2]">
          {text}
        </p>
      </div>
    </div>
  );
};
