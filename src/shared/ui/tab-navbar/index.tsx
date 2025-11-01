interface TabNavbarProps {
  isActive: number;
  setIsActive: (index: number) => void;
  tabs: string[];
}

export const TabNavbar = (props: TabNavbarProps) => {
  const { isActive, setIsActive, tabs } = props;

  return (
    <div className="bg-[#f1f5f9] px-2 py-1 w-fit flex rounded-full">
      {tabs.map((tab, index) => (
        <button
          onClick={() => setIsActive(index)}
          key={index}
          className={`${
            isActive === index ? "bg-white font-medium" : "text-[#64748b]"
          } px-6 py-2 rounded-full text-sm`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
