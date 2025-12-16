// import { ReactComponent as ArrowRight } from "../../assets/arrow-right-01.svg";
// import { ReactComponent as ArrowLeft } from "../../assets/arrow-left-01.svg";
// import emporium from "../../assets/Videos/Animated-iPhone-mockups.mp4";

// export default function Selected({ darkMode }) {
//   return (
//     <div className=" relative p-4 flex justify-between flex-col lg:h-full w-full">
//       <video autoPlay className=" absolute w-full h-full" src={emporium} />
//       <div></div>
//       <div className=" flex relative justify-between w-full p-4">
//         <button className={`${darkMode ? "bg-[#CBC8C7]" : ""} w-fit rounded-full p-4`}>
//           <ArrowLeft />
//         </button>
//         <button className="">
//           <ArrowRight />
//         </button>{" "}
//       </div>
//       <div className="w-full flex relative justify-center items-center gap-4">
//         <div className=" w-2 h-2 rounded-full" />
//         <div className=" w-2 h-2 rounded-full" />
//         <div className=" w-2 h-2 rounded-full" />
//       </div>
//     </div>
//   );
// }
import { useRef, useState, useEffect } from "react";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-01.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left-01.svg";
import video3 from "../../assets/Videos/Animated-iPhone-mockups.mp4";
import video2 from "../../assets/Videos/Scene.mp4";
import video1 from "../../assets/Videos/Showreel-Grid-Mobile-[remix].mp4";

export default function Selected({ darkMode }) {
  const videos = [video1, video2, video3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Play video whenever index changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [currentIndex]);
  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <div className="relative p-6 flex flex-col justify-between w-full 100:h-[400px] md:h-[600px] overflow-hidden rounded-[24px]">
      {/* Video */}
      <video ref={videoRef} src={videos[currentIndex]} loop muted playsInline autoPlay className="absolute rounded-[24px] inset-0 w-full h-full object-cover transition-opacity duration-300" />
      <div className=" w-full"></div>
      {/* Controls */}
      <div className="relative z-10 flex justify-between w-full ">
        <button onClick={prevVideo} className={`p-2 rounded-full transition bg-opacity-40  text-[#212122]  bg-[#CBC8C7]`}>
          <ArrowLeft />
        </button>

        <button onClick={nextVideo} className={`p-2 rounded-full transition bg-opacity-40  text-[#212122]  bg-[#CBC8C7]`}>
          <ArrowRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="relative z-10 flex justify-center gap-2.5 ">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to video ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-200
        ${index === currentIndex ? "bg-[#fffcfc] scale-125" : "bg-white/40 hover:bg-white/70"}
      `}
          />
        ))}
      </div>
    </div>
  );
}
