import { useState } from "react";
import AllWorks from "./works/AllWorks";
import Illustration from "./works/Illustration";
import Selected from "./works/Selected";

export default function Works({ darkMode }) {
  const [work, setWork] = useState("selected-works");

  const menu = [
    { id: 1, label: "Selected Works", value: "selected-works" },
    { id: 2, label: "All Projects", value: "all-projects" },
    { id: 3, label: "Illustrations", value: "illustrations" },
  ];

  return (
    <div className={`w-full h-full flex flex-col gap-4 rounded-[24px] p-6 transition-colors ${darkMode ? "bg-[#212122]" : "bg-[#FFFCFC]"}`}>
      {/* Menu */}
      <div className={`w-full p-2.5 rounded-full flex gap-2 border ${darkMode ? "bg-[#191919] border-[#2F2F31]" : "bg-[#F5F5F5] border-[#E8E8E8]"}`}>
        {menu.map((item) => {
          const isActive = work === item.value;

          return (
            <button
              key={item.id}
              onClick={() => setWork(item.value)}
              aria-selected={isActive}
              className={`md:px-4 100:px-2 py-2 rounded-[20px] w-full 100:text-sm md:text-base font-medium transition-all duration-200
                ${isActive ? (darkMode ? "bg-[#2F2F31] text-[#CFCFCF] shadow-sm cursor-not-allowed" : "bg-white text-[#212122] shadow-sm cursor-not-allowed") : darkMode ? "text-[#A1A1A3] hover:bg-[#232325]" : "text-[#6B6B6E] hover:bg-[#EAEAEA]"}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="w-full">
        {work === "selected-works" && <Selected darkMode={darkMode} />}
        {work === "all-projects" && <AllWorks darkMode={darkMode} />}
        {work === "illustrations" && <Illustration darkMode={darkMode} />}
      </div>
    </div>
  );
}
