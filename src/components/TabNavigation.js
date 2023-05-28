import Image from "next/image";

export default function TabNavigation({
  tabs,
  setCurrentTabIndex,
  currentTabIndex,
}) {
  return (
    <div className="text-white bg-dark-900 p-1.5 gap-1.5 flex rounded flex-col md:flex-row shadow-xl">
      {tabs.map((tab, i) => {
        return (
          <div
            className={`cursor-pointer px-8 py-4 hover:text-brand-default hover:bg-dark-800 duration-300 transition-all text-center ${
              currentTabIndex === i ? "text-brand-default bg-dark-800" : "bg-dark-700"
            }`}
            key={i}
            onClick={() => setCurrentTabIndex(i)}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
}

export const Tab = ({ isActive, children, techStack = [] }) => {
  return (
    <div
      className={`${
        isActive ? "block" : "hidden"
      } bg-dark-900 text-white w-full sm:w-3/4 md:w-1/2 p-10 rounded  shadow-xl`}
    >
      <div className="flex gap-5 mb-5">
        {techStack.map((tech, i) => (
          <Image
            key={i}
            src={`/techstack/${tech}.svg`}
            width="60"
            height="60"
            alt={tech}
          />
        ))}
      </div>
      {children}
    </div>
  );
};
