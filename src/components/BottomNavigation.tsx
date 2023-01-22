interface BottomNavigationProps {
  label: string;
  location?: string;
}

export const BottomNavigation = ({
  label,
  location,
}: BottomNavigationProps) => {
  return (
    <div className="h-[320px] w-full" data-scroll-section>
      <div className="container mx-auto">
        <div className="w-full bg-white h-[1px] mb-12"></div>
        <div className="flex items-center">
          <p className="text-white text-[96px] leading-[1.2]">Next</p>
        </div>
        <p className="text-gray-300 text-lg">{label}</p>
        <div className="w-full bg-white h-[1px] mt-12"></div>
      </div>
    </div>
  );
};
