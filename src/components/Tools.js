export default function Tools({ darkMode, toggleDarkMode }) {
  const tools = ["Figma", "Adobe Suite", "Framer", "Html", "Css", "Reeact.js"];
  return (
    <div className={`w-full h-fit gap-[16px] flex justify-start items-center flex-col rounded-[24px] p-6 transition-colors ${darkMode ? "bg-[#212122]" : "bg-[#FFFCFC] "}`}>
      <div className={` w-full flex justify-start items-start text-[16px] font-medium ${darkMode ? " text-[#9E9E9F]" : " text-[#363638]"}`}>Tools</div>
      <div className=" w-full justify-start items-center flex flex-wrap gap-2.5">
        {tools.map((item, id) => (
          <div key={id} className={` rounded-[24px] gap-2  flex justify-center items-center h-fit w-fit px-4 py-2 text-[14px] font-medium ${darkMode ? " bg-[#2F2F31] text-[#D6D6D6]" : " bg-[#EBEBEB] text-[#3D3D40]"}`}>
            <span className={`${darkMode ? " bg-[#A88220]" : " bg-[#D59F1A]"}    w-1.5 h-1.5 rounded-full  `} /> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
