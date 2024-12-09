"use client";
import { useTheme } from "next-themes";
import React from "react";
import lightICon from "@/assets/icons/light.svg";
import darkICon from "@/assets/icons/dark.svg";
import Image from "next/image";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
      onClick={() => handleChangeTheme()}
    >
      {theme === "light" ? (
        <Image alt="light icon" src={lightICon.src} width={30} height={30} />
      ) : theme === "dark" ? (
        <Image alt="dark icon" src={darkICon.src} width={30} height={30} />
      ) : (
        <></>
      )}
    </button>
  );
}
