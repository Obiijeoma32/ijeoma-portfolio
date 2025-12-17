import a from "../../assets/Images/illusttration/cover.png";
import aHover from "../../assets/Images/illusttration/Graduation.png";
import b from "../../assets/Images/illusttration/cover (1).png";
import bHover from "../../assets/Images/illusttration/man.png";
import c from "../../assets/Images/illusttration/Running man 1 cover.jpg";
import cHover from "../../assets/Images/illusttration/Running man 1.jpg";
import d from "../../assets/Images/illusttration/chi Cover.png";
import dHover from "../../assets/Images/illusttration/Chhi 4.png";
import e from "../../assets/Images/illusttration/CAR Black.jpg";
import eHover from "../../assets/Images/illusttration/CAR Black trace.jpg";
import f from "../../assets/Images/illusttration/Mood.png";
import fHover from "../../assets/Images/illusttration/Mood Trace.png";
import g from "../../assets/Images/illusttration/CAR White.jpg";
import gHover from "../../assets/Images/illusttration/CAR White trace.jpg";
import h from "../../assets/Images/illusttration/Background.png";
import hHover from "../../assets/Images/illusttration/Background trace.png";
import i from "../../assets/Images/illusttration/Background with car.png";
import iHover from "../../assets/Images/illusttration/Background with car trace.png";

export default function Illustration({ darkMode }) {
  // const illustrations = [a, b, c, d, e, f, g, h, i];

  const illustrations = [
    { id: 1, main: a, hover: aHover },
    { id: 2, main: b, hover: bHover },
    { id: 3, main: c, hover: cHover },
    { id: 4, main: d, hover: dHover },
    { id: 5, main: e, hover: eHover },
    { id: 6, main: f, hover: fHover },
    { id: 7, main: g, hover: gHover },
    { id: 8, main: h, hover: hHover },
    { id: 9, main: i, hover: iHover },
  ];
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
      {/* {illustrations.map((item, index) => (
        <img key={index} src={item} alt={`Illustration ${index + 1}`} className="w-full h-[200px] object-cover rounded-lg" />
      ))} */}
      {illustrations.map((item) => (
        <div key={item.id} className="relative group w-full h-[200px] rounded-2xl overflow-hidden">
          {/* Main Image */}
          <img src={item.main} alt="" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />

          {/* Hover Image */}
          <img src={item.hover} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
