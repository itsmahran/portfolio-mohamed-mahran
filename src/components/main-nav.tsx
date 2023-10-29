"use client";

import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

interface MainNavProps {}

const MainNav: FunctionComponent<MainNavProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex">
      <ul className="flex">
        <li>
          <div>
            <button
              className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
