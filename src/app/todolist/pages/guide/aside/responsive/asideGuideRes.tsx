"use client";
import { useEffect, useState } from "react";
export default function AsideGuideRes({
  Setsection,
  onCloseAsideGuide,
}: {
  Setsection: (section: string) => void;
  onCloseAsideGuide: () => void;
}) {
  const [AnimatedExit, setAnimatedExit] = useState(false);

  const handleClose = () => {
    setAnimatedExit(true);
  };

  const onAnimationEnd = () => {
    if (AnimatedExit) {
      onCloseAsideGuide();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <aside
      className={`h-[100%] w-[100%] bg-[#e0e7ff] p-4 overflow-y-auto memonews-aside-dark fixed top-0 ${
        AnimatedExit ? "aside-exit" : "aside-enter"
      }`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="flex flex-col gap-[15px]">
        <div className="p-[5px] flex items-center justify-evenly">
          <h2 className="text-[18px]">
            <strong>Lista de guías</strong>
          </h2>
          <p onClick={handleClose} className="text-xl">❎</p>
        </div>
        <nav className="overflow-y-auto pl-[17px]">
          <ul className="flex flex-col gap-[15px]">
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("Memoguide-Centro")}
            >
              MemoGuide - Centro
            </li>
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("Memoguide-fijar-pestaña")}
            >
              ¿Como fijar MemoBox?
            </li>
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("Memoguide-activar-notificación")}
            >
              ¿Como se activan las notificaciones?
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
