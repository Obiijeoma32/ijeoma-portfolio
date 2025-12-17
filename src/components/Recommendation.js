import { useEffect, useRef, useState } from "react";
import damisi from "../assets/Images/damisi.jpeg";
import daniel from "../assets/Images/daniel.jpeg";
import kenneth from "../assets/Images/kenneth.avif";
import ogechi from "../assets/Images/ogechi.jpeg";

export default function Recommendation({ darkMode }) {
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (paused) return;

      container.scrollLeft += 1;

      // reset to start when reaching end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }
    }, 25); // speed control

    return () => clearInterval(interval);
  }, [paused]);
  const people = [
    {
      id: 1,
      name: " - Damisi Babalola",
      pic: damisi,
      desc: "I’ve had the pleasure of working with Ijeoma, and she is an incredible designer with a remarkable eye for detail. She has a natural ability to translate ideas into clean, thoughtful, and visually stunning experiences that truly stand out. Beyond her talent, she’s an absolute joy to collaborate with — creative, reliable, and consistently elevates every project she touches. I can’t recommend her highly enough!",
    },
    {
      id: 2,
      name: " – Daniel Ikekwem",
      pic: daniel,
      desc: "I’ve had the privilege of working closely with Ijeoma on multiple projects, and she’s one of the most exceptional UI/UX designers I’ve ever collaborated with. Her creativity, attention to detail, and deep understanding of user experience consistently elevate every product we work on. She has a rare ability to turn abstract ideas into clean, intuitive, and visually stunning designs that truly connect with users. Beyond her technical skills, Ijeoma is reliable, communicative, and an absolute joy to work with.",
    },
    {
      id: 3,
      name: "– Kenneth Ofili",
      pic: kenneth,
      desc: "I had the privilege of working alongside Ijeoma for about a year, and she truly stands out as a remarkable colleague. Not only does she consistently deliver top-notch work, but she brings such a positive energy and strong work ethic to everything she does. Ijeoma’s expertise in user interface design and front-end development really shone through during our time together. She has a natural talent for problem-solving, which made her an essential part of our team. ",
    },
    {
      id: 4,
      name: "– Ogechi Amaefule",
      pic: ogechi,
      desc: "I’ve known IJEOMA for a while now, and one thing that stands out is her creative eye. Even before she became a UX/UI designer, she’s always had that natural ability to make things look and feel right. Watching her grow into such a thoughtful designer has been inspiring. She has this rare balance, she’s deeply artistic but also incredibly logical in how she approaches user experience. Her designs are clean, functional, and full of intention. ",
    },
  ];
  return (
    <div className={`w-full h-fit gap-[16px] flex justify-start items-center flex-col rounded-[24px] p-6 transition-colors ${darkMode ? "bg-[#212122]" : "bg-[#FFFCFC] "}`}>
      <div className={` w-full flex justify-start items-start text-[16px] font-medium ${darkMode ? " text-[#9E9E9F]" : " text-[#363638]"}`}>Recommendations</div>
      {/* <div className="w-full flex justify-start items-start gap-4 overflow-x-scroll"> */}
      <div ref={sliderRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="w-full flex gap-4 overflow-x-scroll scrollbar-hide no-scrollbar no-scrollbar ">
        {people.map((item, index) => (
          <div key={index} className={`p-6 min-w-[280px] 100:flex-col md:flex-row h-fit lg:min-w-[500px] rounded-[24px] border flex gap-4 ${darkMode ? "border-[#3D3D40] bg-[#282829]" : "border-[#E8E8E8] bg-[#F5F5F5]"}`}>
            {" "}
            <img className=" w-[40px] h-[40px] rounded-full" src={item.pic} alt={item.name} />
            <div className="flex flex-col gap-4">
              <p className={`font-medium text-sm md:text-base break-words ${darkMode ? "text-[#C7C7C7]" : "text-[#363638]"}`}>{item.desc}</p>
              <span className={` font-normal text-xs ${darkMode ? " text-[#BFBFC0]" : "text-[#38383B]"} `}>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
