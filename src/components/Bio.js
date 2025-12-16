import sun from "../assets/sun-03.svg";
import moon from "../assets/moon-01.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import ije from "../assets/Images/ijeoma.jpeg";
import { useEffect, useState } from "react";

export default function Bio({ darkMode, toggleDarkMode }) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update the year dynamically when the component mounts
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  //   console.log(date);
  return (
    <div className={`w-full h-fit gap-[48px] flex justify-start items-center flex-col rounded-[24px] p-6 transition-colors ${darkMode ? "bg-[#212122]" : "bg-[#FFFCFC] "}`}>
      <div className=" w-full justify-between items-center flex">
        <div className=" w-fit flex justify-start items-center  gap-4">
          <button className={` 100:flex lg:hidden w-fit`}>
            <Menu className={` rotate-180  ${darkMode ? "text-[#BFBFC0]" : " text-[#2F2F31]"}`} />
          </button>
          <div className={` w-fit 100:px-2.5 md:px-4 py-2 rounded-[24px] text-[14px] h-fit flex gap-2 justify-center  items-center font-medium ${darkMode ? "bg-[#2E5E25] text-[#C5C5C7]" : "bg-[#E8F2E6] text-[#3D3D40]"}`}>
            <span className={`${darkMode ? " bg-[#4D9644]  border-[#BBEDB4]" : " bg-[#65A65D] border-[#BBEDB4]"}   border-2 w-2.5 h-2.5 rounded-full  `} />{" "}
            <div className={`justify-center gap-1 w-fit h-fit item-center text-center flex 100:hidden phone:flex`}>
              {" "}
              Available <span className="flex 100:hidden md:flex">to Work</span>
            </div>
          </div>
          <button onClick={toggleDarkMode} className={`   ${darkMode ? " hover:bg-[#] bg-[#121212] hover:bg-[#373633]" : " bg-[#ebebeb] hover:bg-[#FAE9A5]"} cursor-pointer flex justify-center items-center w-fit p-[8px] rounded-full`}>
            <img src={darkMode ? sun : moon} alt={darkMode ? "sun" : "moon"} />
          </button>
        </div>
        <a
          href="mailto:obiijeoma32@gmail.com"
          className={`border-[4px] text-[16px] w-fit h-fit font-medium  flex gap-2 justify-center items-center py-2 px-6 rounded-full ${
            darkMode ? "bg-[#D59F1A] border-[#E6BF1A] hover:bg-[#ae8300] text-[#121212]" : "text-[#333333]  bg-[#FFB601]  border-[#FAE9A5] hover:bg-[#FAE9A5]"
          }`}
        >
          <Mail className=" 100:hidden phone:flex" /> Contact Me
        </a>
      </div>
      <div className=" flex flex-col gap-8 w-full justify-start items-start">
        <div className=" flex items-center justify-start gap-2.5 w-fit">
          <img src={ije} className="w-[50px] h-[50px] rounded-full " alt="ijeoma" />
          <div className=" w-fit flex-col flex justify-start items-start gap-[2px]">
            <h2 className={`${darkMode ? "text-[#E6E6E6]" : "text-[#282829]"} text-[16px] font-semibold`}>Ijeoma Candy Obi</h2>
            <h4 className={`${darkMode ? "text-[#BFBFC0] " : "text-[#5A5A5C]"} text-[14px] font-medium`}>Product Designer</h4>
          </div>
        </div>
        <p className={`${darkMode ? "text-[#BFBFC0] " : "text-[#2F2F31]"} md:text-[20px]  100:text-[16px] font-normal lg:leading-8`}>
          I’m a Product Designer with experience of {currentYear - 2022} years across fintech, marketplaces, and web applications. I focus on creating designs that are simple, accessible, and intentional. I combine UX thinking with strong UI
          execution, backed by user research and prototyping.
        </p>
      </div>
    </div>
  );
}
