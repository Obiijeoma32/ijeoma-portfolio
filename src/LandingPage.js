import { useEffect, useState } from "react";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Works from "./components/Works";
import Socials from "./components/Socials";
import { ReactComponent as Mail } from "./assets/mail.svg";
import { ReactComponent as Arrow } from "./assets/arrow-up-right-01.svg";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedMode === "dark" || (!savedMode && systemPreference)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className=" flex flex-col gap-4 w-full">
      <div className=" flex 100:flex-col lg:flex-row justify-start item-start gap-4 w-full">
        <div className=" flex flex-col gap-4 w-full">
          <Bio darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className=" w-full h-fit 100:flex lg:hidden">
            <Works darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Tools darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Socials className=" 100:hidden lg:flex" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className=" 100:flex lg:hidden 100:flex-col-reverse lg:flex-row w-full justify-start items-center flex gap-3">
            <a
              href="https://contra.com/ijeoma_obi_gi5an57m/work?r=ijeoma_obi_gi5an57m"
              className={`border-[2px] text-[16px] w-full h-fit font-medium  flex gap-2 justify-center items-center py-4 px-8 rounded-full ${
                darkMode ? "bg-[#212122] border-[#E6BF1A] hover:bg-[#373633] text-[#CFCFCF]" : "text-[#363638]  bg-[#FFFCFC]  border-[#FAEBA5] hover:bg-[#FAE9A5]"
              }`}
            >
              <Arrow className="" />
              <div className=" text-nowrap w-fit"> Hire me on Contra</div>
            </a>{" "}
            <a
              href="mailto:obiijeoma32@gmail.com"
              className={`border-[4px] text-[16px] w-full h-fit font-medium  flex gap-2 justify-center items-center py-4 px-6 rounded-full ${
                darkMode ? "bg-[#D59F1A] border-[#E6BF1A] hover:bg-[#ae8300] text-[#121212]" : "text-[#333333]  bg-[#FFB601]  border-[#FAE9A5] hover:bg-[#FAE9A5]"
              }`}
            >
              <Mail className="" /> Send Me an Email
            </a>
          </div>
        </div>
        <div className="100:hidden lg:flex flex-col justify-start  gap-4 w-full">
          <Works className="" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className=" 100:flex-col-reverse lg:flex-row w-full justify-start items-center flex gap-3">
            <a
              href="https://contra.com/ijeoma_obi_gi5an57m/work?r=ijeoma_obi_gi5an57m"
              className={`border-[2px] text-[16px] w-fit h-fit font-medium  flex gap-2 justify-center items-center py-4 px-8 rounded-full ${
                darkMode ? "bg-[#212122] border-[#E6BF1A] hover:bg-[#373633] text-[#CFCFCF]" : "text-[#363638]  bg-[#FFFCFC]  border-[#FAEBA5] hover:bg-[#FAE9A5]"
              }`}
            >
              <Arrow className="" />
              <div className=" text-nowrap w-fit"> Hire me on Contra</div>
            </a>{" "}
            <a
              href="mailto:obiijeoma32@gmail.com"
              className={`border-[4px] text-[16px] w-full h-fit font-medium  flex gap-2 justify-center items-center py-4 px-6 rounded-full ${
                darkMode ? "bg-[#D59F1A] border-[#E6BF1A] hover:bg-[#ae8300] text-[#121212]" : "text-[#333333]  bg-[#FFB601]  border-[#FAE9A5] hover:bg-[#FAE9A5]"
              }`}
            >
              <Mail className="" /> Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
