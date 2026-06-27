export default function Skills({ darkMode, toggleDarkMode }) {
  const skills = ["Wireframing", "Prototyping", "User flows", "UX writing", "Usability testing", "Components & design systems", "Responsive layouts", "Frontend", "Illustration", "Motion design", "AI design", "Design leadership", "Design research", "Accessibility design",  "Information architecture", "User research thinking", "Design systems",  "Design for empathy" , "Design for mobile apps", "Design for web apps"];

  return (
    <div className={`w-full h-fit gap-[16px] flex justify-start items-start flex-col rounded-[24px] p-6 transition-colors ${darkMode ? "bg-[#212122]" : "bg-[#FFFCFC] "}`}>
      <div className={`w-full flex justify-start items-start text-[16px] font-medium ${darkMode ? "text-[#9E9E9F]" : "text-[#363638]"}`}>Skills</div>
      <div className="w-full justify-start items-start flex flex-wrap gap-2.5">
        {skills.map((item, id) => (
          <div
            key={id}
            className={`rounded-[24px] gap-2 flex justify-center items-center h-fit max-w-full px-4 py-2 text-[14px] font-medium leading-tight whitespace-normal ${darkMode ? "bg-[#2F2F31] text-[#D6D6D6]" : "bg-[#EBEBEB] text-[#3D3D40]"}`}
          >
            <span className={`${darkMode ? "bg-[#4D9644]" : "bg-[#65A65D]"} w-1.5 h-1.5 rounded-full shrink-0`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
