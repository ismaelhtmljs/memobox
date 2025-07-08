"use client";
import "@/app/todolist/css/header.css";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import HeaderAsideResponsive from "./asideHeader";
import { useTheme } from "../../context/theme";
import Link from "next/link";

export default function Headertodolist() {
  const { theme, DarkToggle } = useTheme()
  const [asideHeader, SetasideHeader] = useState(false);

  const openLink = (Url: string) => {
    window.open(Url, "_blank");
  };

  return (
    <>
      <header className="bg-moded p-moded text-mod sticky top-0 z-[100]">
        <div className="p-1.5 flex justify-around items-center h-res">
          <div className="flex gap-2.5 items-center title-header-res">
            <h1 className="text-[20px] cursor-pointer">
              <strong>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/">MemoBox</a>
              </strong>
            </h1>
            <IoMenuSharp onClick={() => SetasideHeader(true)} className="text-[25px] hidden menu-res"/>
          </div>
          <nav className="navbar-res">
            <ul className="flex gap-5 items-center text-[15px] w-max ul-res-header">
              <li>
                <a
                  onClick={() => openLink("https://github.com/ismaelhtmljs")}
                  className="cursor-pointer hover-a-git text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    openLink("https://github.com/ismaelhtmljs/memobox")
                  }
                  className="cursor-pointer hover-a-repo text-white"
                >
                  Repositorio
                </a>
              </li>
              <li>
                <Link
                  href="/todolist/pages/news"
                  className="cursor-pointer hover-a-repo text-white"
                >
                  MemoNews
                </Link>
              </li>
              <li>
                <Link
                  href="/todolist/pages/guide"
                  className="cursor-pointer hover-a-repo text-white"
                >
                  MemoGuide
                </Link>
              </li>
              <li>
                <button type="button" onClick={DarkToggle}>
                  <span className="p-1 bg-white text-black rounded-[.25rem] cursor-pointer">
                    {theme === "light" ? "🌙 Oscuro" : "🌞 Claro"}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {asideHeader && (
        <HeaderAsideResponsive
          theme={theme}
          toggleTheme={DarkToggle}
          onCloseAsideHeader={() => SetasideHeader(false)}
        />
      )}
    </>
  );
}
