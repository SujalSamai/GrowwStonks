import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-5 md:px-8 py-3 text-white bg-stone-900 dark:bg-purplish rounded-lg mx-4 my-2 shadow-md">
      <div className="flex items-center">
        <Image src={logo} width={60} height={60} />
        <h1 className="dark:text-white text-2xl md:text-3xl font-bold tracking-wider mx-2">
          GrowwStonks
        </h1>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
