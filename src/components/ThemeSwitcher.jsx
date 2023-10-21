"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-1/12 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <BsToggleOff className="h-10 w-10 mx-auto text-cyan-500 hover:scale-105 duration-200 transition-all" />
      ) : (
        <BsToggleOn className="h-10 w-10 mx-auto text-cyan-400 hover:scale-105 duration-200 transition-all" />
      )}
    </button>
  );
};
