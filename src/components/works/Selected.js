import { useRef, useState, useEffect } from "react";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-01.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left-01.svg";
import video3 from "../../assets/Videos/Animated-iPhone-mockups.mp4";
import video2 from "../../assets/Videos/Scene.mp4";
import video1 from "../../assets/Videos/Showreel-Grid-Mobile-[remix].mp4";
import video4 from "../../assets/Videos/Penthry.mp4";
import video5 from "../../assets/Videos/ije.mp4";

export default function Selected() {
  const videos = [
    {
      id: 1,
      video: video1,
      url: "https://www.behance.net/gallery/236487743/Community-Access-App-A-2-Year-Redesign-Journey",
    },
    {
      id: 2,
      video: video2,
      url: "https://apps.apple.com/ng/app/stay-assist/id6749885496",
    },

    {
      id: 4,
      video: video4,
      url: "https://penthreymain.vercel.app",
    },
    {
      id: 3,
      video: video3,
      url: "https://on.contra.com/jqkrfJ",
    },
    {
      id: 5,
      video: video5,
      url: "https://www.ijefund.com/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length);

  const prevVideo = () => setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  return (
    <div className="relative 100:p-2 sm:p-6 flex flex-col justify-between w-full 100:h-[400px] md:h-[600px] overflow-hidden rounded-[24px]">
      {/* VIDEO */}
      <video ref={videoRef} src={videos[currentIndex].video} muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-cover" />

      {/* VIEW PROJECT */}
      <div className="relative z-10 p-4">
        {/* <a href={videos[currentIndex].url} target="_blank" rel="noopener noreferrer" className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium">
          View Project
        </a> */}
      </div>

      {/* CONTROLS */}
      <div className="relative z-10 flex justify-between items-center w-full ">
        {" "}
        <button onClick={prevVideo} className={`p-2 rounded-full transition bg-opacity-40  text-[#212122]  bg-[#CBC8C7]`}>
          <ArrowLeft />{" "}
        </button>{" "}
        <button onClick={nextVideo} className={`p-2 rounded-full transition bg-opacity-40  text-[#212122]  bg-[#CBC8C7]`}>
          <ArrowRight />{" "}
        </button>{" "}
      </div>

      {/* INDICATORS */}
      <div className="relative z-10 flex justify-between  ">
        <div className=" w-[100px]"></div>
        <div className="justify-center items-center w-fit gap-2 flex ">
          {videos.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white scale-125" : "bg-white/40"}`} />
          ))}
        </div>
        <a href={videos[currentIndex].url} target="_blank" rel="noopener noreferrer" className="inline-block bg-opacity-80  text-[#212122]  bg-[#CBC8C7] px-4 py-2 rounded-full 100:text-xs md:text-sm font-medium">
          View Project
        </a>
      </div>
    </div>
  );
}
