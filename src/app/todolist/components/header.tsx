"use client";
import "@/app/todolist/css/header.css";

export default function Headertodolist() {
  const openLink = (Url: string) => {
    window.open(Url, "_blank");
  };

  return (
    <header className="bg-moded p-moded text-mod ">
      <div className="p-1.5 flex justify-around items-center h-res">
        <div className="flex gap-2.5 items-center">
          <h1 className="text-[20px] cursor-pointer">
            <strong>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/">MemoBox</a>
            </strong>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-5 items-center text-[15px]">
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
              <button type="button">
                <span className="p-1 bg-white text-black rounded-[.25rem] cursor-pointer">
                  🌞 Claro
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
