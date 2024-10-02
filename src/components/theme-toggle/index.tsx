import { useLayoutEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const ThemeToggle = () => {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setDark] = useState(prefersDark ?? false);

  const breadcrumbStyle = `absolute h-[90%] top-[1.5px] left-[2px] transition bg-background aspect-square rounded-full ${
    isDark ? "translate-x-0" : "translate-x-10"
  }`;
  const sunStyle = `absolute h-[70%] top-[4px] left-[6px] aspect-square ${
    isDark ? "hidden" : "block"
  }`;
  const moonStyle = `absolute h-[70%] top-[4px] right-[7px] aspect-square ${
    isDark ? "block" : "hidden"
  }`;

  useLayoutEffect(() => {
    if (isDark && typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="relative rounded-full w-20 bg-copy text-background h-10 cursor-pointer focus:outline focus:outline-2 focus:outline-copy focus:outline-offset-2"
      onClick={() => {
        setDark(!isDark);
      }}
    >
      <div className={breadcrumbStyle} />
      <div className={sunStyle}>
        <IoSunnyOutline size={32} />
      </div>
      <div className={moonStyle}>
        <IoMoonOutline size={32} />
      </div>
    </button>
  );
};
