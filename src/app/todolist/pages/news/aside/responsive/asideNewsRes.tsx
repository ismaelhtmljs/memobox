"use client";
import { useEffect, useState } from "react";
export default function AsideNewsRes({
  Setsection,
  onCloseAsideNews,
}: {
  Setsection: (section: string) => void;
  onCloseAsideNews: () => void;
}) {
  const [AnimatedExit, setAnimatedExit] = useState(false);

  const handleClose = () => {
    setAnimatedExit(true);
  };

  const onAnimationEnd = () => {
    if (AnimatedExit) {
      onCloseAsideNews();
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
            <strong>Lista de actualizaciones</strong>
          </h2>
          <p onClick={handleClose} className="cursor-pointer text-xl">
            ❎
          </p>
        </div>
        <nav className="overflow-y-auto pl-[17px]">
          <ul className="flex flex-col gap-[15px]">
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("MemoNews-centro")}
            >
              MemoNews
            </li>
            <li
              className="bg-[#93c5fd] p-[5px] rounded shadow cursor-pointer hover:bg-[#60a5fa] memonews-li-aside-dark"
              onClick={() => Setsection("vMemo1.0.1")}
            >
              Actualización{" "}
              <strong>
                <i>vMemo1.0.1</i>
              </strong>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
