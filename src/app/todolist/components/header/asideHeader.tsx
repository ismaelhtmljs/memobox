"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeaderAsideResponsive({
  onCloseAsideHeader,
  theme,
  toggleTheme
}: {
  onCloseAsideHeader: () => void;
  theme: string;
  toggleTheme: () => void;
}) {
  const [AnimatedExit, setAnimatedExit] = useState(false);

  const handleClose = () => {
    setAnimatedExit(true);
  };

  const onAnimationEnd = () => {
    if (AnimatedExit) {
      onCloseAsideHeader();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    }
  })

  const openLink = (Url: string) => {
    window.open(Url, "_blank");
  };

  return (
    <>
      <aside
        className={`h-[100%] w-max bg-[#e0e7ff] p-4 overflow-y-auto fixed top-0 z-[100] memoguide-aside-dark ${
          AnimatedExit ? "aside-exit" : "aside-enter"
        }`}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="flex flex-col gap-[15px]">
          <div className="p-[5px] flex items-center justify-evenly">
            <h2 className="text-[18px]">
              <strong>Menú de MemoBox</strong>
            </h2>
            <p onClick={handleClose} className="cursor-pointer text-xl">
              ❎
            </p>
          </div>
          {/* navbar */}
          <nav className="pl-[17px] flex flex-col">
            <ul className="flex gap-[30px] flex-col">
              <li>
                <a
                  onClick={() => openLink("https://github.com/ismaelhtmljs")}
                  className="p-2.5 bg-indigo-300 rounded hover:bg-indigo-600 hover:text-white cursor-pointer memoguide-li-aside-dark"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    openLink("https://github.com/ismaelhtmljs/memobox")
                  }
                  className="p-2.5 bg-indigo-300 rounded hover:bg-indigo-600 hover:text-white cursor-pointer memoguide-li-aside-dark"
                >
                  Repositorio
                </a>
              </li>
              <li>
                <Link
                  href="/todolist/pages/news"
                  className="p-2.5 bg-indigo-300 rounded hover:bg-indigo-600 hover:text-white cursor-pointer memoguide-li-aside-dark"
                >
                  MemoNews
                </Link>
              </li>
              <li>
                <Link
                  href="/todolist/pages/guide"
                  className="p-2.5 bg-indigo-300 rounded hover:bg-indigo-600 hover:text-white cursor-pointer memoguide-li-aside-dark"
                >
                  MemoGuide
                </Link>
              </li>
              <li>
                <button type="button" onClick={toggleTheme}>
                  <span className="p-1 bg-white text-black rounded-[.25rem] cursor-pointer">
                    {theme === "light" ? "🌙 Oscuro" : "🌞 Claro"}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
