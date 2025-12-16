import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Behance } from "../assets/behance.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as X } from "../assets/x.svg";

export default function Socials({ darkMode, toggleDarkMode }) {
  const socials = [
    {
      id: 1,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/obiijeoma32/",
      icon: <Linkedin />,
    },
    {
      id: 2,
      name: "Behance",
      url: "https://www.behance.net/ijeomaobi",
      icon: <Behance />,
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/candydesignandcode?igsh=MXdrNTdjaW50aWNwdQ%3D%3D&utm_source=qr",
      icon: <Instagram />,
    },
    {
      id: 4,
      name: "X",
      url: "https://x.com/mynameiscandy_?s=21",
      icon: <X />,
    },
  ];
  return (
    <div className=" w-full justify-start items-center flex gap-3">
      {socials.map((item) => (
        <a
          key={item.id}
          className={`w-full cursor-pointer h-fit gap-[12px] font-medium flex justify-center no-underline items-center text-[16px]  rounded-[16px] py-4 px-6 transition-colors ${
            darkMode ? "bg-[#212122] hover:bg-[#1a1a1a] text-[#CFCFCF]" : "bg-[#FFFCFC] hover:bg-[#FAE9A5] text-[#363638]"
          }`}
          href={item.url}
        >
          {item.icon} <span className=" 100:hidden md:flex">{item.name}</span>
        </a>
      ))}
    </div>
  );
}
